export interface ItineraryItem {
    day: number;
    title: string;
    description: string;
    overnight: string;
}

export interface Tour {
    id: string;
    title: string;
    duration: string;
    category: "Cultural" | "Trekking" | "Festival" | "Luxury" | "Adventure";
    price: string;
    image: string;
    detailImage?: string; // Image to be shown on the details page (different from listing)
    description: string;
    featured?: boolean;
    highlights: string[];
    inclusions: string[];
    itinerary: ItineraryItem[];
}

export const tours: Tour[] = [
    {
        id: "bhutan-express",
        title: "Bhutan Express Tour",
        duration: "4 Days / 3 Nights",
        category: "Cultural",
        price: "$1,100",
        detailImage: "/assets/home/punakha.png",
        image: "/assets/home/tigernest.png",
        description: "Experience the essence of Bhutan on a short but comprehensive journey through Paro and Thimphu. Visit the iconic Tiger's Nest, ancient dzongs, and witness the unique culture of the Dragon Kingdom. Enjoy local cuisine, cultural immersion, and breathtaking scenery throughout the day.",
        featured: true,
        highlights: [
            "Hike to Paro Taktsang (Tiger's Nest)",
            "Visit Tashichho Dzong in Thimphu",
            "Explore the National Museum",
            "Scenic drive to Chele La Pass"
        ],
        inclusions: [
            "All internal ground transport",
            "Certified English-speaking guide",
            "3-star accommodation (double occupancy)",
            "All meals and bottled water",
            "Visa fees and SDF charges",
            "Entrance fees to monuments"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Paro - Transfer to Thimphu",
                description: "Arrive at Paro International Airport. Your guide will meet you and drive to Thimphu. Visit the National Memorial Chorten and Tashichho Dzong in the evening.",
                overnight: "Thimphu"
            },
            {
                day: 2,
                title: "Thimphu Sightseeing - Paro",
                description: "Visit the Buddha Dordenma, Folk Heritage Museum, and the Textile Museum. Afternoon drive back to Paro and visit the National Museum (Ta Dzong).",
                overnight: "Paro"
            },
            {
                day: 3,
                title: "Tiger's Nest Hike",
                description: "Hike to the iconic Taktsang Goemba (Tiger's Nest), perched on a cliff 900m above the valley floor. Farewell dinner in Paro.",
                overnight: "Paro"
            },
            {
                day: 4,
                title: "Departure",
                description: "Early morning transfer to Paro International Airport for your departure flight.",
                overnight: "Departure"
            }
        ]
    },
    {
        id: "jomolhari-trek",
        title: "Jomolhari Trek",
        duration: "10 Days / 9 Nights",
        category: "Trekking",
        price: "$2,450",
        detailImage: "/assets/home/jomo.png",
        image: "/assets/home/jomo.webp",
        description: "A breathtaking high-altitude trek offering stunning views of Mt. Jomolhari, diverse landscapes from lush forests to alpine meadows, and glimpses of blue sheep. Enjoy local cuisine, cultural immersion, and breathtaking scenery throughout the day.",
        featured: true,
        highlights: [
            "Views of Mt. Jomolhari (7,326m)",
            "Crossing Nyeli La Pass (4,870m)",
            "Jangothang Base Camp",
            "Pristine alpine lakes"
        ],
        inclusions: [
            "Trekking permit and fees",
            "Camping equipment (tents, sleeping mats)",
            "Cook and support staff (ponies/yaks)",
            "All meals during trek",
            "Accommodation in hotels before/after trek"
        ],
        itinerary: [
            { day: 1, title: "Arrival in Paro", description: "Arrive in Paro, meet your trekking team, and enjoy a day of acclimatization with local sightseeing.", overnight: "Paro" },
            { day: 2, title: "Paro - Shana", description: "Drive to the ruins of Drukgyel Dzong where the trek begins. Follow the Paro Chhu river through pine and rhododendron forests.", overnight: "Shana (Camp)" },
            { day: 3, title: "Shana - Thangthangkha", description: "Continue the trek along the river, gradually ascending. If weather permits, catch your first glimpse of Mt. Jomolhari.", overnight: "Thangthangkha (Camp)" },
            { day: 4, title: "Thangthangkha - Jangothang", description: "The trail opens up into a wide glacial valley. Reach Jomolhari Base Camp, one of the most beautiful camp sites in the Himalayas.", overnight: "Jangothang (Camp)" },
            { day: 5, title: "Rest Day at Jangothang", description: "Acclimatization day. You can explore the nearby lakes or hike towards the base of Jomolhari or Jichu Drake.", overnight: "Jangothang (Camp)" },
            { day: 6, title: "Jangothang - Lingshi", description: "Cross the Nyeli La pass (4,870m). Descend into the Lingshi valley with views of Lingshi Dzong.", overnight: "Lingshi (Camp)" },
            { day: 7, title: "Lingshi - Shodu", description: "Cross the Yeli La pass (4,930m). From the top, witness panoramic views of Jomolhari, Tserim Kang, and Masang Gang.", overnight: "Shodu (Camp)" },
            { day: 8, title: "Shodu - Barshong", description: "The trail follows the Thimphu Chhu through dense forests. Reach the ruins of Barshong Dzong.", overnight: "Barshong (Camp)" },
            { day: 9, title: "Barshong - Dolam Kencho - Thimphu", description: "The final trekking day takes you down to the road head near Thimphu. Drive to your hotel for a well-deserved rest.", overnight: "Thimphu" },
            { day: 10, title: "Departure", description: "Final transfer to Paro International Airport for your departure.", overnight: "Departure" }
        ]
    },
    {
        id: "royal-highland-festival",
        title: "Royal Highland Festival",
        duration: "8 Days / 7 Nights",
        category: "Festival",
        price: "$1,850",
        image: "/assets/festival/rhf.webp",
        detailImage: "/assets/festival/highlandfes.png",
        description: "Experience the unique culture of Bhutan's highland nomads in Laya. Witness the Royal Highland Festival featuring yak contests, traditional games, and vibrant textiles. Enjoy local cuisine, cultural immersion, and breathtaking scenery throughout the day.",
        featured: true,
        highlights: [
            "Attend the Royal Highland Festival in Laya",
            "Experience nomadic lifestyle",
            "Scenic helicopter ride (optional)",
            "Gasa Hot Springs"
        ],
        inclusions: [
            "Special festival permits",
            "Accommodation in tents/homestays in Laya",
            "All meals and transport",
            "Guide and support staff"
        ],
        itinerary: [
            { day: 1, title: "Arrival in Paro", description: "Arrive at Paro. In the evening, visit the National Museum and Paro Rinpung Dzong.", overnight: "Paro" },
            { day: 2, title: "Paro - Gasa", description: "Drive to Punakha and then further to Gasa. Relax in the therapeutic natural hot springs of Gasa.", overnight: "Gasa" },
            { day: 3, title: "Trek to Laya", description: "Trek through pristine forests and alpine meadows to reach the remote village of Laya (3,800m).", overnight: "Laya" },
            { day: 4, title: "Royal Highland Festival - Day 1", description: "Immerse yourself in the opening ceremonies, traditional music, and unique yak-related competitions.", overnight: "Laya" },
            { day: 5, title: "Royal Highland Festival - Day 2", description: "Enjoy the second day of the festival, including traditional Layap wrestling and nomadic sports.", overnight: "Laya" },
            { day: 6, title: "Laya - Gasa - Punakha", description: "Trek back down to the road head and drive to Punakha valley.", overnight: "Punakha" },
            { day: 7, title: "Punakha - Thimphu - Paro", description: "Visit Punakha Dzong. Drive to Thimphu for some sightseeing and continue to Paro for your final night.", overnight: "Paro" },
            { day: 8, title: "Departure", description: "Transfer to Paro International Airport for your flight out.", overnight: "Departure" }
        ]
    },

    {
        id: "adventure-rafting-cycling",
        title: "Adventure: Raft & Ride",
        duration: "9 Days / 8 Nights",
        category: "Adventure",
        price: "$2,100",
        image: "/assets/adventure/rafting.png",
        detailImage: "/assets/adventure/rafting1.png",
        description: "Get your adrenaline pumping with mountain biking on Himalayan trails and white-water rafting in the Punakha valley. Enjoy local cuisine, cultural immersion, and breathtaking scenery throughout the day.",
        highlights: [
            "Mountain Biking from Dochula Pass",
            "White Water Rafting on Mo Chhu",
            "Hiking in Phobjikha Valley",
            "Camping under the stars"
        ],
        inclusions: [
            "High-quality mountain bikes and gear",
            "Rafting equipment and safety guide",
            "Camping gear",
            "Support vehicle for cyclists"
        ],
        itinerary: [
            { day: 1, title: "Arrival Paro - Thimphu", description: "Arrive at Paro. Meet your guide and transfer to Thimphu. Take a short evening cycle around the capital city.", overnight: "Thimphu" },
            { day: 2, title: "Thimphu Trails", description: "Cycle towards the Tango and Cheri monasteries. Hike up to the monasteries and enjoy a downhill ride back to Thimphu.", overnight: "Thimphu" },
            { day: 3, title: "Thimphu - Punakha (Ride)", description: "Drive to Dochula Pass (3,100m). From there, enjoy an exhilarating downhill bike ride into the subtropical Punakha valley.", overnight: "Punakha" },
            { day: 4, title: "River Rafting", description: "Morning hike to Khamsum Yulley Namgyal Chorten. Afternoon white-water rafting on the Mo Chhu or Pho Chhu river.", overnight: "Punakha" },
            { day: 5, title: "Punakha - Phobjikha", description: "Drive to the glacial valley of Phobjikha. Cycle along the nature trail and visit the Gangtey Monastery.", overnight: "Phobjikha" },
            { day: 6, title: "Phobjikha Exploration", description: "A full day of cycling through the wide, open valley, exploring the winter home of the Black-necked Cranes.", overnight: "Phobjikha" },
            { day: 7, title: "Phobjikha - Paro", description: "Return drive to Paro. Visit a local farmhouse for a traditional meal and a session of Bhutanese archery.", overnight: "Paro" },
            { day: 8, title: "Hike to Tiger's Nest", description: "The ultimate hike to Taktsang (Tiger's Nest) Monastery. Celebrate your adventure with a farewell dinner.", overnight: "Paro" },
            { day: 9, title: "Departure", description: "Transfer to Paro International Airport for your departure flight.", overnight: "Departure" }
        ]
    },
    {
        id: "motorcycle-expedition",
        title: "Motorcycle Expedition",
        duration: "12 Days / 11 Nights",
        category: "Adventure",
        price: "$3,500",
        image: "/assets/home/moto.jpg",
        detailImage: "/assets/adventure/moto.png",
        description: "Experience the thrill of riding through the winding mountain roads of the Himalayas. This motorcycle tour takes you across high passes, through lush valleys, and into the heart of Bhutan's unique culture.",
        highlights: [
            "Riding across Dochu La and Pele La passes",
            "Exploring the remote Haa Valley",
            "Bhutanese cultural immersion & cuisine",
            "Winding mountain roads with stunning vistas"
        ],
        inclusions: [
            "Royal Enfield motorcycle rental",
            "Fuel and maintenance",
            "Mechanic and support vehicle",
            "All permits and sightseeing"
        ],
        itinerary: [
            { day: 1, title: "Arrival in Paro", description: "Arrive in Paro. Meet your guide, pick up your Royal Enfield bikes, and have a safety briefing and test ride.", overnight: "Paro" },
            { day: 2, title: "Ride to Thimphu", description: "Ride to Thimphu along the river road. Visit the Buddha Point and enjoy the evening in the capital.", overnight: "Thimphu" },
            { day: 3, title: "Thimphu to Punakha", description: "Ride over the Dochu La Pass (3,100m). Descend into the warm valley of Punakha.", overnight: "Punakha" },
            { day: 4, title: "Punakha to Trongsa", description: "Ride across the Pele La Pass (3,420m) and enter central Bhutan, reaching the historic town of Trongsa.", overnight: "Trongsa" },
            { day: 5, title: "Trongsa to Bumthang", description: "Cross the Yotong La Pass (3,400m) and descend into the spiritual heartland of Bumthang.", overnight: "Bumthang" },
            { day: 6, title: "Bumthang Sightseeing", description: "Ride through the four valleys of Bumthang, visiting ancient temples and the local brewery.", overnight: "Bumthang" },
            { day: 7, title: "Bumthang to Punakha", description: "Begin the return ride westwards, crossing the mountain passes back to Punakha.", overnight: "Punakha" },
            { day: 8, title: "Punakha to Paro", description: "Ride back to Paro, with a final chance to enjoy the winding Himalayan roads.", overnight: "Paro" },
            { day: 9, title: "Tiger's Nest Hike", description: "Give the bikes a rest and hike to the spectacular Tiger's Nest Monastery.", overnight: "Paro" },
            { day: 10, title: "Haa Valley Ride", description: "Take a day ride to the remote Haa Valley via the high Chele La Pass.", overnight: "Paro" },
            { day: 11, title: "Leisure Day", description: "A day for shopping, relaxing, or a traditional hot stone bath.", overnight: "Paro" },
            { day: 12, title: "Departure", description: "Final transfer to Paro International Airport for your departure.", overnight: "Departure" }
        ],
        featured: false
    },
    {
        id: "bird-watching-tour",
        title: "Bird Watching Tour",
        duration: "14 Days / 13 Nights",
        category: "Adventure",
        price: "$3,650",
        image: "/assets/adventure/bird.png",
        detailImage: "/assets/adventure/bird1.png",
        description: "A comprehensive 14-day expedition through Bhutan's premier birding hotspots. From the high-altitude passes of Chele La to the subtropical jungles of Manas, witness an incredible diversity of avian life including the rare White-bellied Heron and Ward's Trogon.",
        highlights: [
            "Spot the endangered White-bellied Heron",
            "Explore top birding sites like Yongkala and Zhemgang",
            "Observe the Black-necked Cranes in Phobjikha",
            "Discover rare Himalayan pheasants and hornbills"
        ],
        inclusions: [
            "Expert birding guide",
            "High-quality spotting scopes",
            "All permits and entry fees",
            "3-star accommodation & meals"
        ],
        itinerary: [
            { day: 1, title: "Arrival In Paro", description: "Arrive at Paro International Airport. Meet your birding guide and transfer to your hotel. Afternoon birding along the Paro River for Ibisbill and Black-tailed Crake.", overnight: "Paro" },
            { day: 2, title: "Birding In Paro", description: "Full day birding in Paro. Visit Chele La Pass (3,988m) to search for Himalayan Monal, Blood Pheasant, and Satyr Tragopan.", overnight: "Paro" },
            { day: 3, title: "Paro - Thimphu", description: "Drive to Thimphu. Morning birding en route. Afternoon visit to the sewage ponds for various migratory ducks and the nearby forest for laughingthrushes.", overnight: "Thimphu" },
            { day: 4, title: "Thimphu - Punakha - Wangduephodrang", description: "Drive over Dochu La Pass (3,100m). Look for Fire-tailed Myzornis and various warblers. Continue to the subtropical valley of Punakha.", overnight: "Punakha" },
            { day: 5, title: "Wangduephodrang - Gangtey", description: "Drive to the beautiful glacial valley of Phobjikha (Gangtey). Birding along the way for high-altitude species.", overnight: "Phobjikha" },
            { day: 6, title: "Gangtey - Trongsa", description: "Morning observation of Black-necked Cranes (winter) or other local specialties. Drive to Trongsa via Pele La Pass.", overnight: "Trongsa" },
            { day: 7, title: "Trongsa - Zhemgang - Tingtibi", description: "Enter the bird-rich region of Zhemgang. Search for Rufous-necked Hornbill and Ward's Trogon in the warm broadleaf forests.", overnight: "Tingtibi" },
            { day: 8, title: "Birding In Tingtibi And Manas (Day 8)", description: "Full day exploration of the Tingtibi area and towards Royal Manas National Park. Search for the Great Hornbill and Pallas's Fish Eagle.", overnight: "Tingtibi" },
            { day: 9, title: "Birding In Tingtibi And Manas (Day 9)", description: "Continued exploration of the unique subtropical ecosystems. Focus on low-altitude specialists and wetland birds.", overnight: "Tingtibi" },
            { day: 10, title: "Birding In Tingtibi And Manas (Day 10)", description: "Morning birding in Tingtibi before starting the return journey northwards.", overnight: "Tingtibi" },
            { day: 11, title: "Tingtibi - Bumthang", description: "Scenic drive to the cultural heartland of Bumthang. Sharp eyes for Himalayan Beautiful Rosefinch and various buntings.", overnight: "Bumthang" },
            { day: 12, title: "Bumthang", description: "Full day birding in the alpine forests of Bumthang. Search for the elusive Great Parrotbill and Himalayan Monal.", overnight: "Bumthang" },
            { day: 13, title: "Bumthang - Thimphu", description: "Long drive back to Thimphu. Short birding stops at strategic mountain passes along the way.", overnight: "Thimphu" },
            { day: 14, title: "Thimphu-Paro Departure", description: "Early morning transfer to Paro International Airport for your departure flight. Farewell to the Land of the Thunder Dragon.", overnight: "Departure" }
        ]
        ,
        featured: false
    },
    {
        id: "spiritual-immersion",
        title: "Spiritual Immersion Tour",
        duration: "6 Days / 5 Nights",
        category: "Cultural",
        price: "$1,450",
        image: "/assets/home/yulay.png",
        detailImage: "/assets/home/prayers.png",
        description: "Connect with the spiritual heart of Bhutan. Meditate in ancient monasteries, receive blessings from lamas, and participate in a butter lamp ceremony. Enjoy local cuisine, cultural immersion, and breathtaking scenery throughout the day.",
        featured: false,
        highlights: [
            "Meditation session at Gangtey Monastery",
            "Butter lamp ceremony in Thimphu",
            "Visit to the Fertility Temple",
            "Stay in a monastery guesthouse (optional)"
        ],
        inclusions: [
            "All internal transport",
            "Guide with spiritual knowledge",
            "Accommodation",
            "Meals and temple fees"
        ],
        itinerary: [
            { day: 1, title: "Arrival Paro", description: "Arrive in Paro and visit the sacred Kyichu Lhakhang, one of the oldest temples in Bhutan.", overnight: "Paro" },
            { day: 2, title: "Thimphu Spirituality", description: "Drive to Thimphu. Participate in a peaceful meditation session at Changangkha Lhakhang.", overnight: "Thimphu" },
            { day: 3, title: "Punakha - Chimi Lhakhang", description: "Drive to Punakha over Dochula Pass. Visit the fertility temple, Chimi Lhakhang.", overnight: "Punakha" },
            { day: 4, title: "Gangtey Monastery", description: "Drive to the beautiful Phobjikha valley and visit the Gangtey Monastery.", overnight: "Phobjikha" },
            { day: 5, title: "Paro Return", description: "Return drive to Paro. Visit a local monastery for a butter lamp ceremony.", overnight: "Paro" },
            { day: 6, title: "Departure", description: "Transfer to Paro International Airport for your departure flight.", overnight: "Departure" }
        ]
    },
    // --- Additional Cultural Tours ---
    {
        id: "glimpse-of-bhutan",
        title: "Glimpse of Bhutan",
        duration: "5 Days / 4 Nights",
        category: "Cultural",
        price: "$1,250",
        image: "/assets/home/punakha1.png",
        detailImage: "/assets/home/dochula.png",
        description: "A perfect introduction to Bhutan, covering the essential highlights of Paro, Thimphu, and Punakha. Ideal for those with limited time who want to experience the best. Enjoy local cuisine, cultural immersion, and breathtaking scenery throughout the day.",
        highlights: [
            "Punakha Dzong architecture",
            "Buddha Dordenma Statue",
            "Tiger's Nest Hike",
            "Dochula Pass panoramic views"
        ],
        inclusions: [
            "3-star Accommodation",
            "Full board meals",
            "Guide and transport",
            "All entry fees"
        ],
        itinerary: [
            { day: 1, title: "Arrival Paro - Thimphu", description: "Arrive in Paro. Drive to Thimphu (1 hr). Visit Memorial Chorten and Tashichho Dzong.", overnight: "Thimphu" },
            { day: 2, title: "Thimphu to Punakha", description: "Drive over Dochula Pass (3,100m). Visit Chimi Lhakhang (Fertility Temple) and the majestic Punakha Dzong.", overnight: "Punakha" },
            { day: 3, title: "Punakha to Paro", description: "Return drive to Paro. Visit the National Museum and Paro Rinpung Dzong.", overnight: "Paro" },
            { day: 4, title: "Tiger's Nest Excursion", description: "Morning hike to Taktshang Goemba. Traditional hot stone bath in the evening (optional).", overnight: "Paro" },
            { day: 5, title: "Departure", description: "Transfer to Paro Airport for flight out.", overnight: "Departure" }
        ]
    },
    {
        id: "central-bhutan-explorer",
        title: "Central Bhutan Explorer",
        duration: "10 Days / 9 Nights",
        category: "Cultural",
        price: "$2,600",
        image: "/assets/home/jakar.png",
        detailImage: "/assets/home/scenic1.png",
        description: "Journey beyond the west to the spiritual heartland of Bumthang. Explore ancient temples, lush valleys, and the authentic rural life of central Bhutan. Enjoy local cuisine, cultural immersion, and breathtaking scenery throughout the day.",
        highlights: [
            "Bumthang Valley spiritual sites",
            "Gangtey Valley & Black Necked Cranes",
            "Trongsa Dzong Museum",
            "Burning Lake (Mebar Tsho)"
        ],
        inclusions: [
            "All accommodation and meals",
            "Domestic flight (optional add-on)",
            "Private vehicle and guide",
            "Permits for restricted areas"
        ],
        itinerary: [
            { day: 1, title: "Arrival Paro - Thimphu", description: "Welcome to Bhutan. Transfer to Thimphu and brief city orientation.", overnight: "Thimphu" },
            { day: 2, title: "Thimphu Sightseeing", description: "Full day exploring Thimphu: Arts School, Textile Museum, and Motithang Takin Preserve.", overnight: "Thimphu" },
            { day: 3, title: "Thimphu - Punakha", description: "Scenic drive over Dochula Pass to Punakha. Visit the Dzong and Suspension Bridge.", overnight: "Punakha" },
            { day: 4, title: "Punakha - Phobjikha", description: "Drive to the glacial valley of Phobjikha. Visit Gangtey Monastery.", overnight: "Phobjikha" },
            { day: 5, title: "Phobjikha - Bumthang", description: "Drive to Bumthang via Pele La pass and Trongsa Dzong. Arrive in Jakar.", overnight: "Bumthang" },
            { day: 6, title: "Bumthang Cultural Tour", description: "Visit Jambay Lhakhang, Kurjey Lhakhang, and Tamshing Lhakhang.", overnight: "Bumthang" },
            { day: 7, title: "Tang Valley Excursion", description: "Day trip to Tang Valley and Mebar Tsho (Burning Lake).", overnight: "Bumthang" },
            { day: 8, title: "Bumthang - Wangdue", description: "Long drive back towards west, overnight in Wangdue Phodrang.", overnight: "Wangdue" },
            { day: 9, title: "Wangdue - Paro", description: "Drive to Paro. Afternoon leisure or shopping.", overnight: "Paro" },
            { day: 10, title: "Departure", description: "Farewell and airport transfer.", overnight: "Departure" }
        ]
    },
    // --- Additional Trekking Tours ---
    {
        id: "druk-path-trek",
        title: "Druk Path Trek",
        duration: "9 Days / 8 Nights",
        category: "Trekking",
        price: "$2,200",
        image: "/assets/trekking/drukpath2.png",
        detailImage: "/assets/trekking/drukpath1.png",
        description: "The most popular short trek in Bhutan, connecting Paro and Thimphu. Trek across mountain ridges, past pristine lakes, and through rhododendron forests. Enjoy local cuisine, cultural immersion, and breathtaking scenery throughout the day.",
        highlights: [
            "Jimilang Tsho Lake",
            "Phajoding Monastery",
            "Views of Mt. Gangkar Puensum",
            "High altitude ridges"
        ],
        inclusions: [
            "Full trekking crew (cook, assistants)",
            "Pack animals for luggage",
            "Sleeping tents and dining tent",
            "All meals on trek"
        ],
        itinerary: [
            { day: 1, title: "Arrival Paro", description: "Arrival in Paro. Acclimatization and museum visit.", overnight: "Paro" },
            { day: 2, title: "Tiger's Nest Hike", description: "Acclimatization hike to the iconic Taktsang Goemba.", overnight: "Paro" },
            { day: 3, title: "Trek Day 1: Paro - Jele Dzong", description: "Start trek from Ta Dzong. Camp at Jele Dzong (3,400m) near the ancient fortress.", overnight: "Jele Dzong (Camp)" },
            { day: 4, title: "Trek Day 2: Jele Dzong - Jangchulakha", description: "Trek through thick alpine forest. Camp at 3,700m with views of the Himalayan range.", overnight: "Jangchulakha (Camp)" },
            { day: 5, title: "Trek Day 3: Jangchulakha - Jimilang Tsho", description: "Follow the ridge line. Camp at the beautiful Jimilang Tsho lake (3,800m).", overnight: "Jimilang Tsho (Camp)" },
            { day: 6, title: "Trek Day 4: Jimilang Tsho - Simkotra Tsho", description: "Pass Janetsho lake. Camp at Simkotra (4,100m) for a high-altitude night.", overnight: "Simkotra Tsho (Camp)" },
            { day: 7, title: "Trek Day 5: Simkotra - Phajoding - Thimphu", description: "Descend to Phajoding Monastery and then down to the Thimphu valley.", overnight: "Thimphu" },
            { day: 8, title: "Thimphu Sightseeing - Paro", description: "Morning in Thimphu. Afternoon drive to Paro.", overnight: "Paro" },
            { day: 9, title: "Departure", description: "Transfer to Paro Airport for departure flight.", overnight: "Departure" }
        ]
    },
    {
        id: "snowman-trek",
        title: "Legendary Snowman Trek",
        duration: "25 Days / 24 Nights",
        category: "Trekking",
        price: "$6,500",
        image: "/assets/trekking/snow.png",
        detailImage: "/assets/trekking/snowman1.png",
        description: "Regarded as one of the hardest and most spectacular treks in the world. Traverse the remote Lunana region, cross 11 passes over 4,500m, and witness untouched Himalayan beauty. Enjoy local cuisine, cultural immersion, and breathtaking scenery throughout the day.",
        featured: false,
        highlights: [
            "Remote Lunana region",
            "Table Mountain (Zongophu Gang)",
            "Views of Jomolhari and Jichu Drake",
            "Highest settlements in Bhutan"
        ],
        inclusions: [
            "Expert trekking guide & specialized cook",
            "Additional pack animals & yaks",
            "Satellite phone support",
            "All camping & permit fees"
        ],
        itinerary: [
            { day: 1, title: "Arrival Paro", description: "Preparation day. Meet your guide and double-check your gear for the upcoming trek.", overnight: "Paro" },
            { day: 2, title: "Tiger's Nest Hike", description: "Acclimatization hike to Taktsang Goemba.", overnight: "Paro" },
            { day: 3, title: "Paro - Shana", description: "Drive to Drukgyel Dzong. Start of the trek, following the Paro Chhu river.", overnight: "Shana (Camp)" },
            { day: 4, title: "Shana - Thangthangkha", description: "Trek continues up the valley through rhododendron and pine forests.", overnight: "Thangthangkha (Camp)" },
            { day: 5, title: "Thangthangkha - Jangothang", description: "Reach Jomolhari Base Camp. Breathtaking views of Mt. Jomolhari.", overnight: "Jangothang (Camp)" },
            { day: 6, title: "Rest at Jangothang", description: "Critical acclimatization day. Explore the nearby glacial lakes.", overnight: "Jangothang (Camp)" },
            { day: 7, title: "Jangothang - Lingshi", description: "Cross the Nyeli La Pass (4,870m). Descend into Lingshi valley.", overnight: "Lingshi (Camp)" },
            { day: 8, title: "Lingshi - Chebisa", description: "Trek through delightful alpine meadows and visit Chebisa village.", overnight: "Chebisa (Camp)" },
            { day: 9, title: "Chebisa - Shomuthang", description: "Cross the Gobu La Pass (4,410m) and descend into a forested valley.", overnight: "Shomuthang (Camp)" },
            { day: 10, title: "Shomuthang - Robluthang", description: "Cross the Jhari La Pass (4,750m) with views of Kang Bum mountain.", overnight: "Robluthang (Camp)" },
            { day: 11, title: "Robluthang - Limithang", description: "Cross the Shinje La Pass (4,900m). Stunning views of Mt. Tiger Mountain.", overnight: "Limithang (Camp)" },
            { day: 12, title: "Limithang - Laya", description: "Descend to the high-altitude village of Laya, home of the Layap people.", overnight: "Laya" },
            { day: 13, title: "Rest at Laya", description: "Explore the unique culture and traditional attire of Laya.", overnight: "Laya" },
            { day: 14, title: "Laya - Rodophu", description: "Enter the remote Lunana region, a true wilderness experience.", overnight: "Rodophu (Camp)" },
            { day: 15, title: "Rodophu - Narethang", description: "High altitude trekking through glacial terrain.", overnight: "Narethang (Camp)" },
            { day: 16, title: "Narethang - Tarina", description: "Cross the Karakachhu La Pass (5,000m+) and descend to Tarina.", overnight: "Tarina (Camp)" },
            { day: 17, title: "Tarina - Woche", description: "Trek through green alpine valleys and past remote yak herder camps.", overnight: "Woche (Camp)" },
            { day: 18, title: "Woche - Lhedi", description: "Cross the Keche La Pass and reach the settlement of Lhedi.", overnight: "Lhedi (Camp)" },
            { day: 19, title: "Lhedi - Thanza", description: "Trek to Thanza, the main village of the Lunana region.", overnight: "Thanza (Camp)" },
            { day: 20, title: "Thanza - Danji", description: "Start the return leg of the trek, ascending towards the mountain passes.", overnight: "Danji (Camp)" },
            { day: 21, title: "Danji - Tsho Chena", description: "Cross the Jaze La Pass (5,150m) and camp near the pristine Tsho Chena lake.", overnight: "Tsho Chena (Camp)" },
            { day: 22, title: "Tsho Chena - Jichu Dramo", description: "Cross the Loju La Pass (5,140m) through a rugged landscape.", overnight: "Jichu Dramo (Camp)" },
            { day: 23, title: "Jichu Dramo - Chukarpo", description: "Cross the Rinchen Zoe La Pass (5,320m), the highest point of the trek.", overnight: "Chukarpo (Camp)" },
            { day: 24, title: "Chukarpo - Tampetsho", description: "Cross the Tampetsho La Pass and reach the beautiful lakes of Tamte Tsho.", overnight: "Tampetsho (Camp)" },
            { day: 25, title: "Descend to Sephu - Transfer", description: "End the trek at Nikachu. Drive to Trongsa or Wangdue for a hot shower.", overnight: "Wangdue" }
            // Note: Condensed for display, real itinerary is often 25-30 days
        ]
    },
    // --- Additional Festival Tours ---
    {
        id: "paro-tshechu-festival",
        title: "Paro Tshechu Festival Tour",
        duration: "7 Days / 6 Nights",
        category: "Festival",
        price: "$1,950",
        image: "/assets/festival/parotsechu.png",
        detailImage: "/assets/festival/parotsechu2.png",
        description: "Witness one of Bhutan's most popular festivals. The Paro Tshechu is a vibrant display of mask dances, religious art, and local fashion held in the spring. Enjoy local cuisine, cultural immersion, and breathtaking scenery throughout the day.",
        featured: true,
        highlights: [
            "Unfurling of the Thongdrel (Giant Scroll)",
            "Mask Dances at Paro Dzong",
            "Tiger's Nest Hike",
            "Farmhouse dinner experience"
        ],
        inclusions: [
            "Festival seating permits",
            "Standard tourist accommodation",
            "All meals & transport",
            "Professional cultural guide"
        ],
        itinerary: [
            { day: 1, title: "Arrival Paro", description: "Arrive in Paro. Afternoon visit to the ancient Kyichu Lhakhang and Paro Dzong.", overnight: "Paro" },
            { day: 2, title: "Paro Tshechu - Day 1", description: "Attend the opening festivities at Rinpung Dzong. Witness the first set of mask dances.", overnight: "Paro" },
            { day: 3, title: "Paro Tshechu - Day 2", description: "Full day at the festival gallery, mingling with locals in traditional attire.", overnight: "Paro" },
            { day: 4, title: "Thimphu Sightseeing", description: "Drive to Thimphu. Visit the Buddha Point and the National Memorial Chorten.", overnight: "Thimphu" },
            { day: 5, title: "Thimphu - Punakha - Paro", description: "Day trip to Punakha Dzong over Dochu La Pass. Return to Paro for the evening.", overnight: "Paro" },
            { day: 6, title: "Thongdrel Ceremony & Tiger's Nest", description: "Early morning viewing of the giant Thongdrel scroll, followed by a hike to the Tiger's Nest.", overnight: "Paro" },
            { day: 7, title: "Departure", description: "Transfer to Paro International Airport for your departure flight.", overnight: "Departure" }
        ]
    },
    // --- Additional Festival Tours ---
    {
        id: "thimphu-tsechu",
        title: "Thimphu Tsechu Festival",
        duration: "7 Days / 6 Nights",
        category: "Festival",
        price: "$1,750",
        image: "/assets/festival/thimphutsechu.png",
        detailImage: "/assets/festival/thiphu2.png",
        description: "One of the grandest festivals in Bhutan, held in the capital's Tashichho Dzong. Witness spectacular mask dances and the warmth of the Bhutanese people. Enjoy local cuisine, cultural immersion, and breathtaking scenery throughout the day.",
        featured: true,
        highlights: [
            "Thimphu Tsechu Festival",
            "Tashichho Dzong",
            "Folk Heritage Museum",
            "Dochula Pass"
        ],
        inclusions: [
            "All internal ground transport",
            "Certified English-speaking guide",
            "3-star accommodation",
            "All meals and fees"
        ],
        itinerary: [
            { day: 1, title: "Arrival Paro - Thimphu", description: "Arrive in Paro and drive to Thimphu. Visit the National Memorial Chorten in the evening.", overnight: "Thimphu" },
            { day: 2, title: "Thimphu Tsechu (Day 1)", description: "Join the locals at Tashichho Dzong to witness the spectacular opening mask dances.", overnight: "Thimphu" },
            { day: 3, title: "Thimphu Tsechu (Day 2) & Sightseeing", description: "A second day of festival immersion, followed by a visit to the Buddha Dordenma statue.", overnight: "Thimphu" },
            { day: 4, title: "Thimphu - Punakha", description: "Scenic drive over Dochu La Pass. Visit the fertility temple, Chimi Lhakhang, in Punakha.", overnight: "Punakha" },
            { day: 5, title: "Punakha - Paro", description: "Visit the magnificent Punakha Dzong, then begin the scenic return journey to Paro.", overnight: "Paro" },
            { day: 6, title: "Tiger's Nest Hike", description: "The ultimate hike to the legenday cliff-side Taktsang Goemba.", overnight: "Paro" },
            { day: 7, title: "Departure", description: "Transfer to Paro International Airport for your departure flight.", overnight: "Departure" }
        ]
    },
    {
        id: "punakha-tsechu",
        title: "Punakha Tsechu & Drubchen",
        duration: "8 Days / 7 Nights",
        category: "Festival",
        price: "$1,850",
        image: "/assets/festival/punakha2.png",
        detailImage: "/assets/festival/punakha.png",
        description: "Held in the magnificent Punakha Dzong, this festival commemorates the victory over Tibetan armies. It features unique dramatic recreations of the 17th-century battle. Enjoy local cuisine, cultural immersion, and breathtaking scenery throughout the day.",
        featured: true,
        highlights: [
            "Punakha Tsechu / Drubchen",
            "Punakha Dzong",
            "Fertility Temple (Chimi Lhakhang)",
            "Paro Taktsang"
        ],
        inclusions: [
            "All internal ground transport",
            "Certified English-speaking guide",
            "3-star accommodation",
            "All meals and fees"
        ],
        itinerary: [
            { day: 1, title: "Arrival Paro - Thimphu", description: "Transfer to Thimphu. Enjoy an evening stroll around the city center.", overnight: "Thimphu" },
            { day: 2, title: "Thimphu - Punakha", description: "Sightseeing in Thimphu, then drive to Punakha via the scenic Dochula Pass.", overnight: "Punakha" },
            { day: 3, title: "Punakha Drubchen/Tsechu", description: "Witness the unique historical reenactments of the 17th-century battle against Tibetan invaders.", overnight: "Punakha" },
            { day: 4, title: "Punakha Tsechu (Day 2)", description: "Morning at the festival. Afternoon hike to the Khamsum Yulley Namgyal Chorten.", overnight: "Punakha" },
            { day: 5, title: "Punakha - Phobjikha", description: "Drive to the glacial valley of Phobjikha, the winter home of Black-necked Cranes.", overnight: "Phobjikha" },
            { day: 6, title: "Phobjikha - Paro", description: "Visit Gangtey Monastery, then begin the return journey to Paro.", overnight: "Paro" },
            { day: 7, title: "Tiger's Nest Hike", description: "The ultimate hike to the cliff-side Taktsang (Tiger's Nest) Monastery.", overnight: "Paro" },
            { day: 8, title: "Departure", description: "Transfer to Paro International Airport for your departure flight.", overnight: "Departure" }
        ]
    },
    // --- Additional Luxury Tours ---

    {
        id: "amankora-bhutan",
        title: "Amankora Kingdom",
        duration: "10 Days / 9 Nights",
        category: "Luxury",
        price: "$12,000",
        image: "/assets/luxury/amankora1.png",
        detailImage: "/assets/luxury/amankora2.png",
        description: "Discover the peace of Bhutan with Amankora. Stay in lodges across Paro, Thimphu, Punakha, Gangtey, and Bumthang. Enjoy local cuisine, cultural immersion, and breathtaking scenery throughout the day.",
        featured: true,
        highlights: [
            "Amankora Lodges Circuit",
            "Private Prayer Flag Hoisting",
            "Hot Stone Baths",
            "Bush Dinners"
        ],
        inclusions: [
            "Suite usage at any Amankora lodge",
            "House beverages and meals",
            "Private guided excursions",
            "Laundry and Spa"
        ],
        itinerary: [
            { day: 1, title: "Arrival Paro", description: "VIP transfer to Amankora Paro. Relax and enjoy a traditional hot stone bath.", overnight: "Paro" },
            { day: 2, title: "Thimphu Lodge", description: "Drive to the Thimphu lodge, nestled in a pine forest. Visit the giant Buddha statue.", overnight: "Thimphu" },
            { day: 3, title: "Punakha Lodge", description: "Cross Dochula Pass to the Punakha lodge, set in a traditional farmhouse.", overnight: "Punakha" },
            { day: 4, title: "Gangtey Lodge", description: "Drive to the Gangtey lodge, overlooking the vast Phobjikha valley.", overnight: "Phobjikha" },
            { day: 5, title: "Bumthang Lodge", description: "Journey to the spiritual heartland lodge, adjacent to the First King's palace.", overnight: "Bumthang" },
            { day: 6, title: "Bumthang Exploration", description: "Visit ancient shrines and participate in a private prayer ceremony.", overnight: "Bumthang" },
            { day: 7, title: "Return West", description: "Scenic domestic flight or drive back to the Paro lodge.", overnight: "Paro" },
            { day: 8, title: "Haa Valley Excursion", description: "A private guided day trip to the pristine Haa valley.", overnight: "Paro" },
            { day: 9, title: "Tiger's Nest", description: "A private guided hike to the sacred Tiger's Nest Monastery.", overnight: "Paro" },
            { day: 10, title: "Departure", description: "Private transfer to Paro International Airport for your departure.", overnight: "Departure" }
        ]
    },
    {
        id: "six-senses-journey",
        title: "Six Senses Journey",
        duration: "8 Days / 7 Nights",
        category: "Luxury",
        price: "$9,500",
        image: "/assets/luxury/sixsenses.png",
        detailImage: "/assets/luxury/sixes.png",
        description: "A transformative journey through the Six Senses lodges in Thimphu, Punakha, and Paro. Unmatched luxury integrated with nature. Enjoy local cuisine, cultural immersion, and breathtaking scenery throughout the day.",
        featured: true,
        highlights: [
            "Circuit of Six Senses Lodges",
            "Sunrise Breakfast at Dochula",
            "Private Meditation Sessions",
            "Farm-to-Table Dining"
        ],
        inclusions: [
            "Accommodation at Six Senses Lodges",
            "Full Board Gourmet Meals",
            "Private SUV & Guide",
            "Helicopter Transfer (One Way)"
        ],
        itinerary: [
            { day: 1, title: "Arrival - Thimphu Sky Palace", description: "VIP arrival and check into Six Senses Thimphu, the 'Palace in the Sky'.", overnight: "Thimphu" },
            { day: 2, title: "Thimphu Discovery", description: "Guided hike to Talakha Monastery. Participate in a private astrology reading.", overnight: "Thimphu" },
            { day: 3, title: "Thimphu to Punakha", description: "Drive to the 'Flying Farmhouse' lodge in Punakha. Enjoy the subtropical valley views.", overnight: "Punakha" },
            { day: 4, title: "Punakha Valley", description: "Riverside meditation followed by a visit to the majestic Punakha Dzong.", overnight: "Punakha" },
            { day: 5, title: "Punakha to Paro", description: "Scenic return drive to the Paro lodge, set among ancient stone ruins.", overnight: "Paro" },
            { day: 6, title: "Paro Ruins", description: "Private archery lesson and exploration of the 15th-century Dzong ruins.", overnight: "Paro" },
            { day: 7, title: "Tiger's Nest", description: "A private, curated hike to the sacred Taktsang Goemba.", overnight: "Paro" },
            { day: 8, title: "Departure", description: "Private transfer to Paro International Airport for your departure flight.", overnight: "Departure" }
        ]
    },
    {
        id: "le-meridien-escape",
        title: "Le Meridien Escape",
        duration: "5 Days / 4 Nights",
        category: "Luxury",
        price: "$2,800",
        image: "/assets/luxury/lee.png",
        detailImage: "/assets/luxury/lee1.png",
        description: "Chic modern comfort in the heart of the Himalayas. Stay at Le Meridien Thimphu and Le Meridien Paro Riverfront. Enjoy local cuisine, cultural immersion, and breathtaking scenery throughout the day.",
        featured: true,
        highlights: [
            "Le Meridien Thimphu & Paro",
            "Riverfront Views",
            "Explore Local Markets",
            "Cultural Performances"
        ],
        inclusions: [
            "5-star Accommodation",
            "Buffet Breakfast & Dinner",
            "Private Transport",
            "Museum Fees"
        ],
        itinerary: [
            { day: 1, title: "Arrival Paro - Thimphu", description: "Arrive in Paro and transfer to Le Meridien Thimphu. Enjoy a fine dining welcome.", overnight: "Thimphu" },
            { day: 2, title: "Thimphu Culture", description: "Visit the Memorial Chorten and the Folk Heritage Museum. Evening leisure.", overnight: "Thimphu" },
            { day: 3, title: "Thimphu to Paro", description: "Drive to Paro and check into Le Meridien Riverfront. Enjoy tea by the river.", overnight: "Paro" },
            { day: 4, title: "Tiger's Nest & City", description: "Morning hike to the Tiger's Nest. Evening shopping in Paro's vibrant town center.", overnight: "Paro" },
            { day: 5, title: "Departure", description: "Final transfer to Paro International Airport for your departure flight.", overnight: "Departure" }
        ]
    },
    {
        id: "pemako-thimphu",
        title: "Pemako Thimphu Experience",
        duration: "5 Days / 4 Nights",
        category: "Luxury",
        price: "$3,200",
        image: "/assets/luxury/pemako1.png",
        detailImage: "/assets/luxury/pemako.png",
        description: "Experience the heart of Thimphu at the Pemako, a sanctuary of design and comfort. Enjoy curated cultural tours and exquisite dining. Enjoy local cuisine, cultural immersion, and breathtaking scenery throughout the day.",
        featured: true,
        highlights: [
            "Stay at Pemako Thimphu",
            "Private Thimphu City Tour",
            "Fine Dining Experiences",
            "Wellness & Spa",
        ],
        inclusions: [
            "Luxury Suite at Pemako",
            "Private Guide & Chauffeur",
            "All Meals & Beverages",
            "Spa Credit"
        ],
        itinerary: [
            { day: 1, title: "Arrival & Welcome", description: "VIP Transfer to Pemako Thimphu. Enjoy a gourmet welcome dinner featuring organic Bhutanese cuisine.", overnight: "Thimphu" },
            { day: 2, title: "Thimphu Immersion", description: "Private tour of the Textile Museum and Painting School. Afternoon tea with a local scholar.", overnight: "Thimphu" },
            { day: 3, title: "Scenic Excursion", description: "Day trip to the iconic Dochula Pass. Enjoy guided forest bathing in the Lamperi Botanical Park.", overnight: "Thimphu" },
            { day: 4, title: "Cultural Deep Dive", description: "Visit the serene Cheri Monastery. Participate in a traditional Bhutanese art session at the hotel.", overnight: "Thimphu" },
            { day: 5, title: "Departure", description: "Private, chauffeured transfer to Paro International Airport for your departure.", overnight: "Departure" }
        ]
    },
    {
        id: "gangtey-lodge-retreat",
        title: "Gangtey Lodge Retreat",
        duration: "6 Days / 5 Nights",
        category: "Luxury",
        price: "$4,950",
        image: "/assets/luxury/gantey.png", // Placeholder or use generic luxury image if not available
        detailImage: "/assets/luxury/gantey1.png",
        description: "Disconnect to reconnect at the award-winning Gangtey Lodge. Nestled in the Phobjikha Valley, experience farmhouse luxury, spiritual immersion, and the famous hot stone baths. Enjoy local cuisine, cultural immersion, and breathtaking scenery throughout the day.",
        highlights: [
            "Stay at the award-winning Gangtey Lodge",
            "Morning prayers at Gangtey Monastery",
            "Gangtey Nature Trail hike",
            "Signature Hot Stone Bath"
        ],
        inclusions: [
            "Luxury accommodation at Gangtey Lodge",
            "Farm-to-table gourmet meals",
            "Private guide and vehicle",
            "Arrival/Departure gifts"
        ],
        itinerary: [
            { day: 1, title: "Arrival Paro - Thimphu", description: "VIP arrival and transfer to Thimphu. Visit the Tashichho Dzong in the evening glow.", overnight: "Thimphu" },
            { day: 2, title: "Thimphu - Gangtey", description: "Scenic drive over Dochu La Pass. Arrive at Gangtey Lodge for a sunset valley view.", overnight: "Phobjikha" },
            { day: 3, title: "Phobjikha Valley Immersion", description: "Nature trail hike and visit to the Crane Center. Unwind with a signature hot stone bath.", overnight: "Phobjikha" },
            { day: 4, title: "Gangtey - Punakha", description: "Drive to the warm Punakha valley. Explore the majestic Punakha Dzong.", overnight: "Punakha" },
            { day: 5, title: "Punakha - Paro", description: "Return to Paro. Afternoon visit to the National Museum and evening leisure in town.", overnight: "Paro" },
            { day: 6, title: "Departure", description: "Private transfer to Paro International Airport for your flight.", overnight: "Departure" }
        ]
    },





    // --- Additional Trekking Tours ---
    {
        id: "dagala-thousand-lakes",
        title: "Dagala Thousand Lakes Trek",
        duration: "6 Days / 5 Nights",
        category: "Trekking",
        price: "$1,650",
        image: "/assets/trekking/dagala.png",
        detailImage: "/assets/trekking/dagala1.png",
        description: "A mesmerizing short trek near Thimphu, known for its shimmering alpine lakes and panoramic views of the high Himalayan peaks, including Mt. Everest and Kanchenjunga. Enjoy local cuisine, cultural immersion, and breathtaking scenery throughout the day.",
        featured: true,
        highlights: [
            "Pristine Alpine Lakes",
            "Views of Mt. Everest & Kanchenjunga",
            "Traditional Yak Herder Camps",
            "Beautiful Geneckha Village"
        ],
        inclusions: [
            "Trekking permit",
            "Camping equipment & sleeping tents",
            "Ponytails for luggage transport",
            "Experienced Trekking Cook & Guide",
            "All meals and camping fees"
        ],
        itinerary: [
            { day: 1, title: "Gynekha - Gur", description: "Start the trek from the scenic Gynekha village. Ascend through oak forests to Gur pasture.", overnight: "Gur Camp" },
            { day: 2, title: "Gur - Labatama", description: "Cross the Labatama Pass for your first view of Kanchenjunga. Camp by the turquoise Uthso Tsho.", overnight: "Labatama Camp" },
            { day: 3, title: "Labatama Halt", description: "Exploring the alpine lakes: Seto Tsho and Jaget Tsho. Enjoy spectacular Himalayan vistas.", overnight: "Labatama Camp" },
            { day: 4, title: "Labatama - Panka", description: "Trek along the western ridge overlooking Dala Tsho. Camp at the scenic Panka meadows.", overnight: "Panka Camp" },
            { day: 5, title: "Panka - Talakha", description: "Hike through mountain passes with views of the entire Dagala range. Camp near Talakha Monastery.", overnight: "Talakha Camp" },
            { day: 6, title: "Talakha - Thimphu", description: "Short descent to Chamgang village and drive to Thimphu for a farewell dinner.", overnight: "Thimphu" }
        ]
    },
    // --- Additional Adventure Tours ---
    {
        id: "trans-bhutan-trail-highlight",
        title: "Trans Bhutan Trail Highlight",
        duration: "11 Days / 10 Nights",
        category: "Trekking",
        price: "$2,900",
        image: "/assets/home/bridge.png",
        detailImage: "/assets/trekking/merak.png",
        description: "Walk a section of the historic Trans Bhutan Trail, reopened after 60 years. Connect with history, nature, and community on this unique trekking experience. Enjoy local cuisine, cultural immersion, and breathtaking scenery throughout the day.",
        highlights: [
            "Hike sections of the historic trail",
            "Camping and Homestays",
            "Chendebji Chorten",
            "Trongsa Dzong"
        ],
        inclusions: [
            "TBT Trail Permit",
            "Certified Trail Guide",
            "Mix of Camping/Hotels/Homestays",
            "Luggage transfer"
        ],
        itinerary: [
            { day: 1, title: "Arrival Paro - Thimphu", description: "Arrive in Paro and transfer to Thimphu. Briefing on the historic Trans Bhutan Trail.", overnight: "Thimphu" },
            { day: 2, title: "Thimphu - Dochula - Punakha", description: "Scenic drive to Punakha. Visit the Punakha Dzong, the trail's historic hub.", overnight: "Punakha" },
            { day: 3, title: "Punakha - Chendebji", description: "Drive to Chendebji. Begin your first section of the Trail highlight.", overnight: "Chendebji" },
            { day: 4, title: "Trek: Chendebji to Tshangkha", description: "Walk through deep temperate forests and remote villages on the reopened historic route.", overnight: "Tshangkha" },
            { day: 5, title: "Trek: Tshangkha to Trongsa", description: "A rewarding hike to the viewpoint above the massive Trongsa Dzong.", overnight: "Trongsa" },
            { day: 6, title: "Trongsa - Bumthang", description: "Drive to the spiritual heartland of Bumthang. Rest and recuperation.", overnight: "Bumthang" },
            { day: 7, title: "Bumthang Valley Hike", description: "Continuing on the trail through the beautiful Bumthang valley, visiting ancient temples.", overnight: "Bumthang" },
            { day: 8, title: "Bumthang - Phobjikha", description: "Drive to the pristine Phobjikha valley, a key waypoint on the ancient trail.", overnight: "Phobjikha" },
            { day: 9, title: "Phobjikha - Paro", description: "Completing the cross-country journey back to the Paro valley.", overnight: "Paro" },
            { day: 10, title: "Tiger's Nest Hike", description: "The spiritual finale: a hike to the legendary cliff-side Tiger's Nest Monastery.", overnight: "Paro" },
            { day: 11, title: "Departure", description: "Transfer to airport for your departure flight.", overnight: "Departure" }
        ]
    }
];
