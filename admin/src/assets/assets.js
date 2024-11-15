// Import images in `assets.js`
import image1 from './images/image1.jpeg';
import image3 from './images/image3.jpeg';
import upload from './images/upload.png'

// Collect all images in an `assets` object
const assets = {
    image1,
    image3,
    upload
};

// Products array with images referenced through the `assets` object
export const products = [
    {
        _id: "aaaa",
        name: "Sandwich",
        price: 100,
        image: assets.image1, // Accessing the image through `assets`
        
    },
    {
        _id: "bbbb",
        name: "Burger",
        price: 150,
        image: assets.image3, // Accessing the image through `assets`
       
    }
];

// Export the `assets` object as the default export
export default assets;
