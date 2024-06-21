if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { isLoggedIn, isOwner, validateListing } = require("./middleware.js");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const Listing = require("./models/listing.js");
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true })); //for data parsing
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const dbUrl = process.env.ATLASDB_URL;

async function main() {
  await mongoose.connect(dbUrl);
}

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});
store.on("error", (error) => {
  console.error("Error in Mongo session store:", error);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions)); // connect.sid cookie in session id
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

app.get("/",(req,res)=>{
  res.redirect("/listings")
})
app.get("/home",(req,res)=>{
  res.render("listings/home.ejs")
})
app.get("/recycle",(req,res)=>{
  res.render("listings/recycle.ejs")
})
app.get("/research",(req,res)=>{
  res.render("listings/research.ejs")
})

// Add to Cart Route


app.get("/cart", isLoggedIn,(req, res) => {
  res.render("listings/cart.ejs",{ cartItems: req.user.cartItems });
  
});
app.post('/cart', isLoggedIn, async (req, res) => {
  try {
    const { listingId } = req.body;
    console.log('Listing ID:', listingId); // Check if listingId is received correctly

    const listing = await Listing.findById(listingId);
    if (!listing) {
      console.log('Listing not found with ID:', listingId);
      req.flash("error", "Listing not found"); // Flash message if listing not found
      return res.redirect("/listings"); // Redirect to listings page or appropriate route
    }

    // Ensure user's cart is initialized if it doesn't exist
    if (!req.user.cartItems) {
      req.user.cartItems = req.user.cartItems || [];
    }

    // Add listing to user's cart
    req.user.cartItems.push(listing);
    await req.user.save();

    // Redirect to cart page or appropriate route
    res.render("listings/cart.ejs", { cartItems: req.user.cartItems });
  } catch (err) {
    console.error('Error adding to cart:', err);
    req.flash("error", "Server error"); // Flash message for server error
    res.status(500).send('Server error'); // Send 500 status for server error
  }
  console.log(req.user.cartItems)
});

app.post("/cart/remove/:id", async (req, res) => {
  const { id } = req.params;
  
  try {
    // Remove the item from the user's cart based on the listing ID
    req.user.cartItems = req.user.cartItems.filter(item => item._id.toString() !== id);
    await req.user.save();
    
    // Redirect back to the cart page
    res.redirect("/listings/cart");
  } catch (err) {
    console.error("Error removing item from cart:", err);
    req.flash("error", "Failed to remove item from cart");
    res.redirect("/listings/cart");
  }
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
}); //* mtlb saari ki saari incoming req k saath match krdo


app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went Wrong" } = err;
  res.status(statusCode).render("error.ejs", { err });
  // res.status(statusCode).send(message);
});

app.listen(8080, () => {
  console.log("server is listening to port 8080");
});
