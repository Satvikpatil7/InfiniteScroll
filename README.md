# Infinite Image 

This project implements an infinite scrolling image loader that fetches random images and appends them to a container. It also supports smooth scrolling to the top of the page.

## Features
- Fetches random images from the `https://picsum.photos/200/300` API
- Infinite scrolling to load more images as the user reaches the bottom
- Smooth scroll-to-top functionality

## Technologies Used
- JavaScript
- HTML/CSS

## How It Works
1. **Fetching Images**: Uses `Promise.all` to fetch 10 images concurrently.
2. **Rendering Images**: Dynamically creates `img` elements and appends them to the container.
3. **Infinite Scrolling**: Detects when the user reaches the bottom and loads more images.
4. **Smooth Scrolling**: Provides a button or trigger to smoothly scroll back to the top of the page.

## API Endpoint
The script fetches data from `https://picsum.photos/200/300?random=${i}`.



