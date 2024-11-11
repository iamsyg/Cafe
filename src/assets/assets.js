// Import images in `assets.js`
import image1 from './images/image1.jpeg';
import image3 from './images/image3.jpeg';

// Collect all images in an `assets` object
const assets = {
    image1,
    image3
};

// Products array with images referenced through the `assets` object
export const products = [
    {
        _id: "aaaa",
        name: "Sandwich",
        description: "Mastt taste",
        price: 100,
        image: assets.image1, // Accessing the image through `assets`
        category: "Veg"
    },
    {
        _id: "bbbb",
        name: "Burger",
        description: "Delicious burger",
        price: 150,
        image: assets.image3, // Accessing the image through `assets`
        category: "Non-Veg"
    }
];

// Export the `assets` object as the default export
export default assets;
