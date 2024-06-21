const sampleListings = [
  {
    title: "Elegant White Sweater",
    description: "Stay warm and stylish with this elegant white sweater. Perfect for any occasion.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2022/12/20180706/SW10611.webp",
      filename: "listing_image"
    },
    price: 1299,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Trendy Blue Sweater",
    description: "A trendy blue sweater to keep you cozy during the colder months.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2022/12/21180514/SW11361.webp",
      filename: "listing_image"
    },
    price: 1499,
    location: "Delhi",
    country: "India"
  },
  {
    title: "Casual Green Shirt",
    description: "A casual green shirt perfect for everyday wear.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2022/05/18185845/SHT3721.webp",
      filename: "listing_image"
    },
    price: 899,
    location: "Bangalore",
    country: "India"
  },
  {
    title: "Stylish Pink Top",
    description: "Add a pop of color to your wardrobe with this stylish pink top.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2022/04/28183326/TP3671.webp",
      filename: "listing_image"
    },
    price: 999,
    location: "Chennai",
    country: "India"
  },
  {
    title: "Chic Floral Top",
    description: "A chic floral top perfect for summer days.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2023/09/15165712/TP15401.webp",
      filename: "listing_image"
    },
    price: 1099,
    location: "Hyderabad",
    country: "India"
  },
  {
    title: "Elegant White Dress",
    description: "An elegant white dress suitable for any special occasion.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2023/12/19160456/WD1961.webp",
      filename: "listing_image"
    },
    price: 1999,
    location: "Pune",
    country: "India"
  },
  {
    title: "Stylish Black Dress",
    description: "A stylish black dress that adds a touch of sophistication to your wardrobe.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2023/12/19160520/WD2001.webp",
      filename: "listing_image"
    },
    price: 2199,
    location: "Kolkata",
    country: "India"
  },
  {
    title: "Casual White Dress",
    description: "A casual white dress perfect for everyday wear.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2023/09/08170259/WD1251.webp",
      filename: "listing_image"
    },
    price: 1799,
    location: "Ahmedabad",
    country: "India"
  },
  {
    title: "Warm Brown Sweater",
    description: "A warm brown sweater to keep you cozy.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2023/01/21184511/SW15401.webp",
      filename: "listing_image"
    },
    price: 1399,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Comfy Gray Sweater",
    description: "A comfy gray sweater ideal for cold weather.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2024/01/22172353/SW18291.webp",
      filename: "listing_image"
    },
    price: 1299,
    location: "Surat",
    country: "India"
  },
  {
    title: "Cozy Maroon Sweater",
    description: "A cozy maroon sweater that combines comfort and style.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2024/01/22172559/SW18481.webp",
      filename: "listing_image"
    },
    price: 1499,
    location: "Lucknow",
    country: "India"
  },
  {
    title: "Elegant Blue Sweater",
    description: "An elegant blue sweater that is perfect for any occasion.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2023/12/13164233/SW17351.webp",
      filename: "listing_image"
    },
    price: 1599,
    location: "Kanpur",
    country: "India"
  },
  {
    title: "Warm Red Sweater",
    description: "Stay warm with this stylish red sweater.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2024/01/22172539/SW18451.webp",
      filename: "listing_image"
    },
    price: 1699,
    location: "Nagpur",
    country: "India"
  },
  {
    title: "Chic Black Sweater",
    description: "A chic black sweater for a stylish look.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2024/01/22172422/SW18331.webp",
      filename: "listing_image"
    },
    price: 1599,
    location: "Indore",
    country: "India"
  },
  {
    title: "Classic Navy Sweater",
    description: "A classic navy sweater that goes with everything.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2023/01/18190403/SW14351.webp",
      filename: "listing_image"
    },
    price: 1499,
    location: "Bhopal",
    country: "India"
  },
  {
    title: "Casual Beige Sweater",
    description: "A casual beige sweater perfect for a relaxed look.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2023/01/18190342/SW14321.webp",
      filename: "listing_image"
    },
    price: 1399,
    location: "Patna",
    country: "India"
  },
  {
    title: "Trendy Red Sweater",
    description: "A trendy red sweater to brighten up your wardrobe.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2022/12/21180509/SW11351.webp",
      filename: "listing_image"
    },
    price: 1499,
    location: "Vadodara",
    country: "India"
  },
  {
    title: "Stylish Gray Sweater",
    description: "A stylish gray sweater for a modern look.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2023/01/11182354/SW13081.webp",
      filename: "listing_image"
    },
    price: 1399,
    location: "Ludhiana",
    country: "India"
  },
  {
    title: "Elegant Beige Sweater",
    description: "An elegant beige sweater suitable for all occasions.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2022/12/30174111/SW12001.webp",
      filename: "listing_image"
    },
    price: 1599,
    location: "Agra",
    country: "India"
  },
  {
    title: "Comfy Brown Sweater",
    description: "A comfy brown sweater to keep you warm.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2023/01/07184823/SW12931.webp",
      filename: "listing_image"
    },
    price: 1399,
    location: "Nashik",
    country: "India"
  },
  {
    title: "Warm Purple Sweater",
    description: "A warm purple sweater for a cozy feel.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2024/01/22172054/SW18031.webp",
      filename: "listing_image"
    },
    price: 1499,
    location: "Faridabad",
    country: "India"
  },
  {
    title: "Casual Blue Sweater",
    description: "A casual blue sweater that is both stylish and comfortable.",
    image: {
      url: "https://cdn.shopatsarojini.com/wp-content/uploads/2023/01/03183902/SW12251.webp",
      filename: "listing_image"
    },
    price: 1399,
    location: "Meerut",
    country: "India"
  }]
  
  module.exports = { data: sampleListings }; 