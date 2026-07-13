// Import all images using Vite's glob import
const productImages = import.meta.glob('../assets/*.{webp,png,jpg,jpeg}', { eager: true });

export const categories = ["Sofa", "Chair", "Dining", "Lighting", "Decoration", "Office Furniture", "Artifacts", "Bed"];

export const products = [
    // Sofas
    { id: 1, category: "Sofa", img: productImages['../assets/sofa1.webp']?.default || productImages['../assets/sofa1.webp'], name: "Modern Sofa", description: "A beautiful Modern Sofa for your living room." },
    { id: 2, category: "Sofa", img: productImages['../assets/sofa2.webp']?.default || productImages['../assets/sofa2.webp'], name: "Leather Sofa", description: "Premium leather comfort." },
    { id: 3, category: "Sofa", img: productImages['../assets/sofa3.webp']?.default || productImages['../assets/sofa3.webp'], name: "Sectional Sofa", description: "Spacious seating for the whole family." },
    
    // Chairs
    { id: 4, category: "Chair", img: productImages['../assets/char1.webp']?.default || productImages['../assets/char1.webp'], name: "Armchair", description: "Classic armchair design." },
    { id: 5, category: "Chair", img: productImages['../assets/char2.webp']?.default || productImages['../assets/char2.webp'], name: "Dining Chair", description: "Elegant dining seating." },
    { id: 6, category: "Chair", img: productImages['../assets/char3.webp']?.default || productImages['../assets/char3.webp'], name: "Accent Chair", description: "Adds character to any room." },
    { id: 7, category: "Chair", img: productImages['../assets/char4.webp']?.default || productImages['../assets/char4.webp'], name: "Office Chair", description: "Ergonomic support for work." },
    
    // Dining Tables
    { id: 8, category: "Dining", img: productImages['../assets/table1.webp']?.default || productImages['../assets/table1.webp'], name: "Wooden Table", description: "Solid wood dining table." },
    { id: 9, category: "Dining", img: productImages['../assets/table2.webp']?.default || productImages['../assets/table2.webp'], name: "Glass Table", description: "Modern glass dining table." },
    { id: 10, category: "Dining", img: productImages['../assets/table3.webp']?.default || productImages['../assets/table3.webp'], name: "Extendable Table", description: "Perfect for hosting guests." },
    { id: 11, category: "Dining", img: productImages['../assets/table4.webp']?.default || productImages['../assets/table4.webp'], name: "Round Table", description: "Intimate round dining experience." },
    { id: 12, category: "Dining", img: productImages['../assets/table5.webp']?.default || productImages['../assets/table5.webp'], name: "Outdoor Table", description: "Durable for outdoor spaces." },
    
    // Lighting
    { id: 13, category: "Lighting", img: productImages['../assets/light1.webp']?.default || productImages['../assets/light1.webp'], name: "Pendant Light", description: "Stylish hanging light." },
    { id: 14, category: "Lighting", img: productImages['../assets/light2.webp']?.default || productImages['../assets/light2.webp'], name: "Floor Lamp", description: "Tall, elegant floor lighting." },
    { id: 15, category: "Lighting", img: productImages['../assets/light3.webp']?.default || productImages['../assets/light3.webp'], name: "Table Lamp", description: "Perfect for reading or working." },
    { id: 16, category: "Lighting", img: productImages['../assets/light4.webp']?.default || productImages['../assets/light4.webp'], name: "Chandelier", description: "Luxurious center piece lighting." },
    { id: 17, category: "Lighting", img: productImages['../assets/light5.webp']?.default || productImages['../assets/light5.webp'], name: "Wall Sconce", description: "Subtle wall-mounted light." },
    
    // Decoration
    { id: 18, category: "Decoration", img: productImages['../assets/decor1.webp']?.default || productImages['../assets/decor1.webp'], name: "Vase Set", description: "Decorative ceramic vases." },
    { id: 19, category: "Decoration", img: productImages['../assets/decor2.webp']?.default || productImages['../assets/decor2.webp'], name: "Wall Art", description: "Contemporary abstract wall art." },
    
    // Beds
    { id: 20, category: "Bed", img: productImages['../assets/bed-1.png']?.default || productImages['../assets/bed-1.png'], name: "Premium Bed 1", description: "Luxurious comfort for your bedroom." },
    { id: 21, category: "Bed", img: productImages['../assets/bed-2.png']?.default || productImages['../assets/bed-2.png'], name: "Premium Bed 2", description: "Luxurious comfort for your bedroom." },
    { id: 22, category: "Bed", img: productImages['../assets/bed-3.png']?.default || productImages['../assets/bed-3.png'], name: "Premium Bed 3", description: "Luxurious comfort for your bedroom." },
    { id: 23, category: "Bed", img: productImages['../assets/bed-4.png']?.default || productImages['../assets/bed-4.png'], name: "Premium Bed 4", description: "Luxurious comfort for your bedroom." },
    { id: 24, category: "Bed", img: productImages['../assets/bed-5.png']?.default || productImages['../assets/bed-5.png'], name: "Premium Bed 5", description: "Luxurious comfort for your bedroom." },
    { id: 25, category: "Bed", img: productImages['../assets/bed-6.png']?.default || productImages['../assets/bed-6.png'], name: "Premium Bed 6", description: "Luxurious comfort for your bedroom." },
    { id: 26, category: "Bed", img: productImages['../assets/bed-7.png']?.default || productImages['../assets/bed-7.png'], name: "Premium Bed 7", description: "Luxurious comfort for your bedroom." },
    { id: 27, category: "Bed", img: productImages['../assets/bed-8.png']?.default || productImages['../assets/bed-8.png'], name: "Premium Bed 8", description: "Luxurious comfort for your bedroom." },
    { id: 28, category: "Bed", img: productImages['../assets/bed-9.png']?.default || productImages['../assets/bed-9.png'], name: "Premium Bed 9", description: "Luxurious comfort for your bedroom." },
    { id: 29, category: "Bed", img: productImages['../assets/bed-10.png']?.default || productImages['../assets/bed-10.png'], name: "Premium Bed 10", description: "Luxurious comfort for your bedroom." },
    { id: 30, category: "Bed", img: productImages['../assets/bed-11.png']?.default || productImages['../assets/bed-11.png'], name: "Premium Bed 11", description: "Luxurious comfort for your bedroom." },
    { id: 31, category: "Bed", img: productImages['../assets/bed-12.png']?.default || productImages['../assets/bed-12.png'], name: "Premium Bed 12", description: "Luxurious comfort for your bedroom." },
    { id: 32, category: "Bed", img: productImages['../assets/bed-13.png']?.default || productImages['../assets/bed-13.png'], name: "Premium Bed 13", description: "Luxurious comfort for your bedroom." },
];
