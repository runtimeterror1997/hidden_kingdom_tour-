export interface Hotel {
    id: string;
    name: string;
    location: string | string[];
    category: "Luxury" | "Premium" | "Comfort";
    stars: number;
    description: string;
    image: string;
    features: string[];
}

export const hotels: Hotel[] = [
    {
        id: "amankora",
        name: "Amankora",
        location: ["Paro", "Thimphu", "Punakha", "Gangtey", "Bumthang"],
        category: "Luxury",
        stars: 5,
        description: "A collection of five intimate lodges situated across the central and western valleys of Bhutan, each offering its own unique character and a shared commitment to minimalist luxury and spiritual peace.",
        image: "/assets/luxury/amankora1.png",
        features: ["Spa & Wellness", "Traditional Stone Bath", "Library", "Chef's Table Dining"]
    },
    {
        id: "le-meridien-thimphu",
        name: "Le Meridien",
        location: ["Paro", "Thimphu"],
        category: "Luxury",
        stars: 5,
        description: "Located in the heart of the capital, Le Meridien Thimphu combines contemporary style with traditional Bhutanese design, offering a sophisticated base for exploring Thimphu.",
        image: "/assets/luxury/lee.png", // Using Pemako as a representative high-end image
        features: ["Indoor Heated Pool", "Latitude 27 Bar", "Latest Recipe Restaurant", "Explore Spa"]
    },
    {
        id: "six-senses-thimphu",
        name: "Six Senses",
        location: ["Paro", "Thimphu", "Gangtey"],
        category: "Luxury",
        stars: 5,
        description: "Known as the 'Palace in the Sky', this magnificent lodge is situated on a hillside with sweeping views of the Thimphu Valley and the giant Buddha Dordenma.",
        image: "/assets/luxury/sixes.png",
        features: ["Infinity Pool", "Award-winning Spa", "Farm-to-Table Dining", "Yoga Pavilion"]
    },
    {
        id: "pemako-thimphu",
        name: "Pemako",
        location: ["Thimphu", "Punakha"],
        category: "Luxury",
        stars: 5,
        description: "A sanctuary of luxury blending Bhutanese heritage with modern sophistication, offering unparalleled views of the capital's dramatic landscape.",
        image: "/assets/luxury/pemako.png",
        features: ["Luxury Suites", "Heated Indoor Pool", "Fine Dining", "Oxygen Bar"]
    },
    {
        id: "zhiwa-ling-ascent",
        name: "Zhiwa Ling Ascent",
        location: "Paro",
        category: "Luxury",
        stars: 5,
        description: "Bhutan's first contemporary concept hotel, offering a unique blend of modern architecture and traditional spiritual comfort.",
        image: "/assets/luxury/zhiwaling1.png",
        features: ["Roof Terrace", "Modern Design", "Meditation Space", "Organic Garden"]
    },
    {
        id: "naksel-boutique-paro",
        name: "Naksel Boutique Paro",
        location: "Paro",
        category: "Premium",
        stars: 4,
        description: "An eco-friendly sanctuary that balances luxury with sustainability, providing breathtaking views of Mount Jomolhari and the ancient Taktsang Monastery.",
        image: "/assets/hotels/naksel1.png",
        features: ["Mountain Views", "Traditional Sauna", "Hiking Trails", "Library"]
    },
    {
        id: "terma-linca",
        name: "Terma Linca Resort",
        location: "Thimphu",
        category: "Premium",
        stars: 4,
        description: "Nestled along the banks of the Wangchhu River, this resort offers a peaceful retreat with a perfect blend of modern amenities and traditional aesthetics.",
        image: "/assets/hotels/terma.png",
        features: ["Riverside Dining", "Archery Ground", "Wellness Center", "Traditional Stone Bath"]
    },
    {
        id: "norkhil-boutique",
        name: "Norkhil Boutique Hotel & Spa",
        location: "Thimphu",
        category: "Premium",
        stars: 4,
        description: "An oasis of calm in the bustling capital, Norkhil offers sophisticated design and a world-class spa experience for the discerning traveler.",
        image: "/assets/hotels/norkhil_spa.png",
        features: ["City Central", "Steam & Sauna", "Boutique Gallery", "Fine Cuisine"]
    },
    {
        id: "tara-phendeyling",
        name: "Tara Phendeyling Hotel",
        location: "Thimphu",
        category: "Comfort",
        stars: 3,
        description: "Offers warm hospitality and a genuine Bhutanese experience, with comfortable rooms and easy access to Thimphu's main attractions.",
        image: "/assets/hotels/tara.png",
        features: ["Traditional Decor", "On-site Restaurant", "Free Wi-Fi", "Friendly Service"]
    },
    {
        id: "peaceful-resort",
        name: "Peaceful Resort",
        location: "Thimphu",
        category: "Comfort",
        stars: 3,
        description: "A serene garden resort providing a quiet escape with simple, elegant rooms and a focus on tranquility and relaxation.",
        image: "/assets/hotels/peace.png",
        features: ["Garden Setting", "Quiet Location", "Authentic Meals", "Personalized Care"]
    }
];
