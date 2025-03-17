// Select the container element from the DOM
const container = document.getElementById("container");

// URL to fetch random images
const URL = "https://picsum.photos/200/300?random=${i}";

// Array to store the fetched image URLs
let images = [];

// Function to load images asynchronously
const loadImages = async () => {
  try {
    console.log("Loading images...");

    // Fetch 10 images concurrently using Promise.all
    images = await Promise.all(
      Array.from({ length: 10 }, async (_, i) => {
        const response = await fetch(URL);
        return response.url; // Get the final image URL
      })
    );

    console.log("Fetched images:", images);

    // Display the images
    setupImages();
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};

// Function to create and append image elements to the container
function setupImages() {
  console.log("Setting up images...");

  images.forEach((image) => {
    const img = document.createElement("img");
    img.src = image; // Set the image source
    container.appendChild(img); // Append the image to the container
  });
}

// Initial call to load images when the page loads
loadImages();

// Event listener for infinite scrolling
window.addEventListener('scroll', () => {
  console.log("Scroll event detected");

  // Log the current scroll position and dimensions
  console.log("window.scrollY:", window.scrollY);
  console.log("window.innerHeight:", window.innerHeight);
  console.log("container.scrollHeight:", container.scrollHeight);

  // Check if the user has scrolled to the bottom of the page
  if (window.scrollY + window.innerHeight+window.scrollY  >= document.documentElement.scrollHeight) {
    console.log("Loading more images...");
    loadImages();
  }
});

// Function to smoothly scroll to the top of the page
function scrollToTop() {
  console.log("Scrolling to top...");

  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling effect
  });
}
