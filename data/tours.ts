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
        duration: "8 Days / 7 Nights",
        category: "Cultural",
        price: "$2,100",
        detailImage: "/assets/home/punakha.png",
        image: "/assets/home/tigernest.png",
        description: "Experience the ultimate journey through Bhutan's cultural heartland. This expanded 8-day tour takes you beyond the basics, deep into the valleys of Thimphu, Punakha, and the pristine glacial valley of Phobjikha. From ancient fortresses to sacred monasteries and breathtaking Himalayan passes, immerse yourself in the Land of the Thunder Dragon.",
        featured: true,
        highlights: [
            "Hike to the legendary Tiger's Nest Monastery",
            "Explore the majestic Punakha Dzong",
            "Visit the Black-necked Crane valley in Phobjikha",
            "Panoramic views from Dochula Pass (108 Chortens)",
            "Cultural immersion in Thimphu & Paro"
        ],
        inclusions: [
            "All internal ground transport",
            "Certified English-speaking guide",
            "3-star accommodation (double occupancy)",
            "All meals and bottled water",
            "SDF (Sustainable Development Fee) & Visa fees",
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Paro & Journey to the Capital",
                description: "Your transformative journey begins with a flight into Paro International Airport, widely considered one of the most spectacular aerial approaches in the world. As the aircraft weaves through the towering peaks of the Himalayas, catch your first glimpse of the pristine landscape, terraced hillsides, and the emerald-green Paro valley. Upon landing, the crisp, clean mountain air immediately signals your arrival in the Last Shangri-La. After meeting your personal guide and driver, we embark on a scenic 1.5-hour drive to Thimphu, the kingdom's vibrant capital city. This journey winds along the confluence of the Pa Chhu and Wang Chhu rivers, passing through traditional Bhutanese villages where life moves at a serene pace. Along the way, we'll stop to admire the Chuzom, the meeting point of the two rivers, adorned with three distinct styles of chortens—Bhutanese, Tibetan, and Nepalese. Upon reaching Thimphu (2,334m), check into your hotel and enjoy a brief rest. In the late afternoon, we visit the National Memorial Chorten, a prominent landmark built in memory of the third King, Jigme Dorji Wangchuck. Here, you'll witness the heart of Thimphu's spiritual life as elderly locals circumambulate the stupa in a rhythmic, meditative flow, their prayers wheels spinning in constant devotion. We conclude the day with a visit to the Buddha Dordenma (Buddha Point), where one of the world's largest bronze Buddha statues gazes over the valley. As evening falls, the golden monument radiates a peaceful energy, offering panoramic views of the city lights below. Your first evening in Bhutan concludes with a welcome dinner featuring local delicacies, introducing you to the unique flavors that define this extraordinary culture.",
                overnight: "Thimphu"
            },
            {
                day: 2,
                title: "Thimphu: Cultural Immersion in the Heart of the Dragon",
                description: "Today is dedicated to exploring the rich tapestry of Thimphu's cultural and artistic heritage. We begin at the Institute for Zorig Chusum, commonly known as the Painting School, where students undergo years of rigorous training in Bhutan's thirteen traditional arts and crafts. Watching young artisans master woodcarving, embroidery, and thangka painting offers a deep appreciation for the kingdom's commitment to preserving its ancestral skills. Following this, we visit the National Textile Museum, a treasure trove of intricate weaves and royal robes that showcase the complexity and symbolism of Bhutanese textiles. Each pattern tells a story of identity, status, and spirituality. For a lighter touch, we visit the Motithang Takin Preserve to see the Takin, Bhutan's unique national animal that resembles a mix between a cow and a goat—a creature steeped in local mythology and the legends of the 'Divine Madman'. After lunch, we explore the Folk Heritage Museum, a restored 19th-century farmhouse that provides a fascinating glimpse into the traditional rural lifestyle, complete with authentic artifacts and household tools. The highlight of the late afternoon is the majestic Tashichho Dzong, 'The Fortress of the Glorious Religion'. This grand structure serves as the administrative center and the summer residence of the Je Khenpo (Chief Abbot). As we walk through its whitewashed courtyards and admire the intricate woodwork, you'll feel the harmonious blend of secular and sacred power that defines Bhutanese governance. The evening is yours to explore the streets of Thimphu, perhaps visiting local craft bazaars or a cozy cafe to soak in the atmosphere of the world's only capital without traffic lights.",
                overnight: "Thimphu"
            },
            {
                day: 3,
                title: "Over the Clouds: Thimphu to Punakha via Dochula",
                description: "Leaving the capital behind, we ascend towards the Dochula Pass (3,100m). This mountain crossing is one of the most beautiful in Bhutan, marked by 108 memorial chortens built by the Queen Mother. On a clear day, the pass offers a breathtaking, unobstructed 360-degree panorama of the snow-capped Himalayan peaks, including Masanggang, Tsendagang, and Gangkhar Puensum, the highest unclimbed mountain in the world. The sight of the fluttering prayer flags against the backdrop of the giants of the north is a profoundly spiritual moment. After spending time at the pass, we descend through lush forests of rhododendron, fir, and hemlock into the subtropical Punakha Valley. The change in vegetation and temperature is remarkable as we drop nearly 1,500 meters. Before reaching our destination, we take a leisurely walk through terraced rice fields to Chimi Lhakhang, the 'Fertility Temple'. This sacred site is dedicated to Lama Drukpa Kunley, the 15th-century saint known for his unorthodox teaching methods and playful spirit. The temple is a focal point for couples seeking blessings, and the surrounding village is famous for its unique phallic art. After lunch, we enter the majestic Punakha Dzong, often described as the most beautiful fortress in the kingdom. Built at the confluence of the Pho Chhu (Father) and Mo Chhu (Mother) rivers, the Dzong resembles a giant ship anchored in the water. It was here that the first King of Bhutan was crowned, and it remains a site of immense historical and religious importance. In the evening, relax by the riverside and enjoy the tranquility of this warmer, fertile valley, reflecting on the day's journey from the high mountain passes to the river's edge.",
                overnight: "Punakha"
            },
            {
                day: 4,
                title: "Into the Glacial Valley: Punakha to Phobjikha",
                description: "Today's journey takes us further east, climbing once again towards the Lawala Pass. As we leave the balmy valley of Punakha, the landscape transforms into rugged mountain terrain before opening up into the wide, breathtaking Phobjikha Valley. This u-shaped glacial valley is a stunning contrast to the narrow, deep valleys seen so far. Phobjikha is part of a large conservation area and serves as the winter home for the rare and endangered Black-necked Cranes, which migrate here from the Tibetan plateau every November. The sight of these majestic birds (in season) dancing in the marshlands is a highlight of Bhutan's natural wonders. We start our exploration at the high-altitude Gangtey Goempa, a 17th-century monastery perched on a hill overlooking the entire valley. As the only Nyingma monastery in western Bhutan, it holds a unique spiritual position. The intricate paintings and the serene atmosphere within the temple walls provide a perfect setting for quiet reflection. After visiting the monastery, we embark on the Gangtey Nature Trail, a gentle 1.5-hour hike that winds through pine forests, past traditional farmhouses, and across the valley floor. This walk offers an intimate look at the local way of life and the pristine environment that makes Phobjikha so special. We'll also visit the Black-necked Crane Information Centre to learn more about the ecology of the valley and the conservation efforts to protect these sacred 'heavenly birds'. The evening in Phobjikha is quiet and magical; with no overhead power lines (to protect the cranes), the starlit sky is extraordinarily clear. Enjoy the warmth of a traditional bukhari (wood-burning stove) as you settle into your farmhouse or lodge for the night.",
                overnight: "Phobjikha"
            },
            {
                day: 5,
                title: "Quiet Mornings and the Return to the Warm Valley",
                description: "We begin our morning in Phobjikha with the sound of distant temple bells and the crisp mountain air. After breakfast, you might choose to take another short walk to observe the morning rituals of the local farmers or simply soak in the silent majesty of the glacial landscape. The valley's marshlands, covered in frost in the early hours, offer a painterly scene of light and shadow. Before we depart, we visit a local farmhouse to experience authentic Bhutanese hospitality. Here, you can learn about the daily routines of a rural family, perhaps trying your hand at churning butter tea or tasting locally grown potatoes, for which this region is famous. In the late morning, we begin our return journey towards Punakha. The drive back over the Lawala Pass offers a different perspective on the mountain ridges and the deep gorges of central Bhutan. Upon arriving back in the Punakha valley, we visit the Khamsum Yulley Namgyal Chorten. To reach this magnificent stupa, we take a 45-minute hike through emerald-green rice paddies and up a gentle slope. Built by the Queen Mother for the protection of the kingdom and the well-being of all sentient beings, the Chorten is an architectural masterpiece of modern Bhutanese design. The view from the top, looking down the valley with the river winding through the fields, is arguably the best in the region. The rest of the afternoon is yours to relax. You might choose to cross the Punakha Suspension Bridge, one of the longest and oldest in the country, draped in colorful prayer flags and offering a bit of an adrenaline rush as it sways over the rushing Pho Chhu river. Dinner is served overlooking the valley, celebrating another day of discovery in the heart of the kingdom.",
                overnight: "Punakha"
            },
            {
                day: 6,
                title: "Journey Back to the Sacred Valley of Paro",
                description: "After breakfast, we bid farewell to the beautiful Punakha valley and begin our drive back towards Paro. This journey gives us a final chance to cross the Dochula Pass, where we might stop for a tea break and one last look at the Himalayan range. Descending back into the Paro valley (2,200m), you'll notice the change back to the cooler, dryer air of Western Bhutan. Paro is a valley of immense sacred significance, home to many of Bhutan's oldest temples and monasteries. Upon arrival, we visit the Rinpung Dzong, the 'Fortress on a Heap of Jewels'. This massive structure, built by the unifier of Bhutan, Zhabdrung Ngawang Namgyal, is a classic example of Bhutanese architecture and serves as both a monastery and the administrative hub of the district. A scenes from the film 'Little Buddha' were shot here, and the walk across the traditional wooden cantilever bridge, Nyamai Zam, below the Dzong is a perfect photo opportunity. Adjacent to the Dzong, we explore the National Museum, housed in a traditional watchtower known as Ta Dzong. The museum's collections include ancient armor, biological exhibits, and an extraordinary gallery of thangkas and stamps. This visit provides a comprehensive overview of the history and natural environment you've seen during your trip. In the evening, we stroll through the charming streets of Paro town. The main street is lined with beautifully painted shopfronts, offering everything from local handicrafts and antiques to handmade paper and textiles. It's a wonderful place to pick up souvenirs and soak in the local vibe before your final full day in the kingdom.",
                overnight: "Paro"
            },
            {
                day: 7,
                title: "The Ultimate Pilgrimage: Hike to the Tiger's Nest",
                description: "No visit to Bhutan is complete without the iconic hike to Taktsang Goemba, the legendary Tiger's Nest Monastery. Perched precariously on a sheer granite cliff 900 meters above the valley floor, it is one of the most venerated sites in the Buddhist world. Legend has it that Guru Rinpoche, the second Buddha, flew here on the back of a tigress to meditate in the caves and subdue local demons. We start early to avoid the midday sun, beginning our ascent through beautiful forests of pine and oak, draped with Spanish moss. The trail is well-maintained and as you climb, you'll be encouraged by the sight of the monastery appearing and disappearing through the trees. After about 1.5 to 2 hours, we reach a cafeteria that offers the first stunning close-up view of the monastery across the gorge—a perfect spot for a rest and some photographs. For those who wish to continue, the final climb involves a series of steep stone steps that lead down to a waterfall and then back up to the entrance of the Tiger's Nest. Once inside, the atmosphere is electric with spiritual energy. You'll visit various temples and caves where Guru Rinpoche and other great masters meditated. The view looking back down into the Paro valley is awe-inspiring. The descent takes about 2 hours, and back at the base, you'll feel a profound sense of achievement. To celebrate your final night, we arrange a traditional hot stone bath (optional), where river stones are heated in a fire and added to a wooden tub filled with medicinal herbs—the perfect way to soothe tired muscles. We conclude with a special farewell dinner, sharing stories and reflections on your 8-day odyssey through the Land of the Thunder Dragon.",
                overnight: "Paro"
            },
            {
                day: 8,
                title: "Farewell to the Last Shangri-La",
                description: "On your final morning in the Kingdom mentioned in ancient texts as 'The Southern Land of Medicinal Herbs', enjoy a final breakfast at your hotel. Depending on your flight schedule, there might be time for one last stroll through Paro town or a quick visit to Kyichu Lhakhang, one of the oldest and most sacred temples in Bhutan, built in the 7th century by the Tibetan King Songtsen Gampo. It is a peaceful place to offer a final prayer and say goodbye to the spiritual heart of the country. Your guide and driver will then escort you to Paro International Airport. As you check in and prepare for departure, you'll find that while you are leaving the physical landscape of Bhutan, the kingdom's unique philosophy of Gross National Happiness and the serenity of the Himalayas stay with you. The flight out offers one last spectacular look at the peaks of the high Himalayas, including Mount Everest and Kanchenjunga on a clear day. Watching the valleys fade into the distance, you'll carry with you memories of ancient fortresses, vibrant festivals, untouched nature, and the warm smiles of the Bhutanese people. We bid you Tashi Delek (Good Luck and Prosperity) and hope that the peace of the Dragon Kingdom follows you on your onward journey and throughout your life. Until we meet again!",
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
            { day: 1, title: "Arrival in Paro", description: "Welcome to Bhutan! Your high-altitude trekking adventure begins with arrival at Paro International Airport (2,235m). After immigration and customs, meet your trekking guide and support team who will be your companions for the next 10 days. Transfer to your hotel in Paro town, where you'll spend the day acclimatizing to the altitude—crucial for your upcoming trek. Take a gentle walk around Paro town to stretch your legs and get your first taste of Bhutanese culture. Visit the local market where farmers sell fresh produce, and observe daily life in this charming valley town. In the afternoon, visit Rinpung Dzong, a massive fortress-monastery that dominates the Paro valley. Your guide will brief you on the trek ahead, check your gear, and ensure you have everything needed for the journey. Enjoy a welcome dinner at your hotel where you'll meet your fellow trekkers (if in a group). Rest well tonight—your adventure into the high Himalayas begins tomorrow.", overnight: "Paro" },
            { day: 2, title: "Paro - Shana", description: "After an early breakfast, drive north up the Paro valley for about 45 minutes to reach the ruins of Drukgyel Dzong, the historic fortress built in 1649 to commemorate victory over Tibetan invaders. On clear days, the sacred Mt. Jomolhari (7,326m) towers magnificently in the background—a preview of what lies ahead. This is where your trek officially begins. The trail follows the Paro Chhu (river) upstream through pristine forests of pine, oak, and rhododendron. The path is relatively gentle today, allowing your body to adjust to trekking with a pack. Cross several wooden bridges adorned with prayer flags, and pass through small army checkpoints near the Tibetan border. The forest is alive with bird calls, and you might spot Himalayan langurs in the trees. After about 5-6 hours of trekking, covering approximately 17 kilometers, arrive at Shana camp (2,850m). Your camp crew will have already set up your tents, and hot tea awaits. Enjoy your first dinner under the stars in the Bhutanese wilderness. The sound of the rushing river will lull you to sleep tonight.", overnight: "Shana (Camp)" },
            { day: 3, title: "Shana - Thangthangkha", description: "Wake to the crisp mountain air and the aroma of freshly brewed tea delivered to your tent. After a hearty breakfast, continue your trek deeper into the valley. Today's trail continues alongside the Paro Chhu, gradually gaining elevation as the valley narrows. The landscape begins to change as you climb higher—the dense forests give way to more open terrain with scattered junipers and alpine shrubs. Cross several side streams on log bridges, and navigate through areas of loose rocks. The trail can be muddy in places, especially after rain. As you gain altitude, the air becomes thinner, so maintain a steady, comfortable pace. After about 6-7 hours of trekking (covering roughly 22 kilometers), reach Thangthangkha camp (3,610m). If the weather is clear, you'll be rewarded with your first proper views of Mt. Jomolhari's snow-covered peak glowing in the afternoon sun. The temperature drops significantly at this altitude, so layer up. Spend the evening around the campfire, sharing stories with your fellow trekkers while your cook prepares a delicious hot meal. The night sky at this altitude is spectacular, with countless stars visible in the unpolluted air.", overnight: "Thangthangkha (Camp)" },
            { day: 4, title: "Thangthangkha - Jangothang", description: "Today is one of the most spectacular days of the trek. After breakfast, the trail opens up dramatically into a wide, U-shaped glacial valley. The landscape transforms into high alpine terrain with short grasses, wildflowers (in season), and the occasional grazing yak. The path is relatively gentle today, following the valley floor with the majestic Mt. Jomolhari dominating the skyline ahead. To your right, the equally impressive Jichu Drake (6,989m) rises like a sentinel. After about 4-5 hours of trekking (approximately 19 kilometers), arrive at Jangothang Base Camp (4,040m), considered one of the most beautiful campsites in the entire Himalayas. The setting is absolutely breathtaking—you're surrounded by towering peaks, with Jomolhari's massive south face directly in front of you. The camp is situated near the ruins of an old fortress and a small stone shelter used by yak herders. In the afternoon, take a short acclimatization walk around the area, perhaps visiting the nearby stream or exploring the old fortress ruins. You might spot blue sheep (bharal) on the surrounding slopes or the rare Himalayan marmot. The sunset on Jomolhari is magical, with the peak turning shades of pink and gold. Tonight, sleep beneath one of the world's most sacred mountains.", overnight: "Jangothang (Camp)" },
            { day: 5, title: "Rest Day at Jangothang", description: "This crucial acclimatization day allows your body to adjust to the high altitude before crossing the challenging passes ahead. However, 'rest day' doesn't mean staying in your tent all day! After a leisurely breakfast, you have several options for exploration. The most popular is a hike toward the base of Mt. Jomolhari or Jichu Drake. Follow yak trails up the valley, gaining altitude gradually while enjoying spectacular mountain views. You might reach small glacial lakes fed by meltwater from the peaks above. Alternatively, hike to the nearby Tshophu lakes, a cluster of pristine alpine lakes about 2-3 hours away. The area is rich in wildlife—keep your eyes peeled for blue sheep grazing on impossibly steep slopes, Himalayan griffon vultures soaring overhead, and perhaps even the elusive snow leopard's tracks (though sightings are extremely rare). If you're feeling adventurous, climb the ridge behind camp for panoramic views of the entire Jomolhari massif. Photography enthusiasts will find endless opportunities to capture the dramatic landscape. Return to camp by afternoon to rest and hydrate. Your guide will check everyone's condition and discuss the challenging day ahead. Enjoy another spectacular sunset and prepare mentally for tomorrow's high pass crossing.", overnight: "Jangothang (Camp)" },
            { day: 6, title: "Jangothang - Lingshi", description: "Today is the most challenging day so far, crossing the high Nyeli La pass at 4,870 meters. Start early after a hearty breakfast, as this will be a long day of 6-7 hours trekking. The trail initially climbs steadily from Jangothang, switchbacking up the mountainside. The air is thin at this altitude, so pace yourself and take frequent breaks. As you ascend, look back for stunning views of Jomolhari and Jichu Drake. The final approach to the pass can be steep and may have snow even in summer. Prayer flags mark the summit of Nyeli La, where trekkers traditionally add stones to the cairn and offer prayers. On clear days, the 360-degree panorama from the pass is absolutely spectacular, with peaks stretching endlessly in all directions. After photos and a rest, begin the long descent into the Lingshi valley. The trail drops steeply at first, then gradually eases as you enter a beautiful valley dotted with yak herder camps. In the distance, you'll spot the impressive Lingshi Dzong perched on a ridge. This remote fortress was built in the 17th century to defend against Tibetan invasions. Arrive at Lingshi camp (4,010m) in the late afternoon. The village of Lingshi is one of the highest permanently inhabited settlements in Bhutan. If time and energy permit, take a short walk to visit the dzong or interact with local villagers. The people here maintain a traditional lifestyle, herding yaks and living in stone houses. Tonight, rest well after your challenging day.", overnight: "Lingshi (Camp)" },
            { day: 7, title: "Lingshi - Shodu", description: "Another spectacular high-altitude day awaits as you cross the Yeli La pass at 4,930 meters—the highest point of the entire trek. Wake early to crisp mountain air and prepare for another challenging but rewarding day. The trail climbs gradually from Lingshi, following a side valley upstream. You'll pass through areas of alpine meadow where yaks graze in summer, and cross several small streams. The final ascent to Yeli La is steep and can be exhausting in the thin air, but the reward is immense. From the prayer flag-draped summit, you're treated to one of the most spectacular panoramas in the Himalayas. To the west, Jomolhari and Jichu Drake dominate the skyline. To the north, the massive Tserim Kang (6,789m) rises like a white pyramid. To the east, Masang Gang (7,194m) towers over the landscape—one of Bhutan's highest unclimbed peaks. Spend time at the pass soaking in these incredible views and catching your breath. The descent from Yeli La is long but gradual, dropping into a different valley system. The landscape changes as you lose altitude, with more vegetation appearing. After about 7-8 hours of trekking, reach Shodu camp (4,100m), situated in a beautiful high valley. Tonight, you're truly in the heart of the Himalayas, surrounded by some of the world's highest peaks. The sense of remoteness and wilderness here is profound.", overnight: "Shodu (Camp)" },
            { day: 8, title: "Shodu - Barshong", description: "Today marks a transition as you begin descending from the high alpine zone back toward the tree line. The trail follows the Thimphu Chhu (river) downstream, gradually losing altitude. After days above 4,000 meters, you'll notice the air becoming richer in oxygen, and breathing becomes easier. The landscape transforms dramatically as you descend—the barren alpine terrain gives way to rhododendron bushes, then juniper, and finally dense forests of fir, hemlock, and birch. The trail can be muddy and slippery in places, especially after rain, so watch your footing. Cross several side streams on log bridges, and navigate through sections of forest where moss hangs from the trees, creating an almost mystical atmosphere. After about 6 hours of trekking, reach the ruins of Barshong Dzong (3,600m). This ancient fortress, now in ruins, once guarded the route to Thimphu. Explore the atmospheric ruins and imagine the monks and soldiers who once lived here. Your camp is set up near the dzong, beside the rushing river. The sound of water and the shelter of the forest create a very different atmosphere from the high mountain camps. Tonight, enjoy the relative warmth of the lower altitude and perhaps spot some of the forest birds that inhabit this zone. You're now only one day away from completing your incredible Himalayan trek.", overnight: "Barshong (Camp)" },
            { day: 9, title: "Barshong - Dolam Kencho - Thimphu", description: "Your final trekking day begins with mixed emotions—excitement to complete this incredible journey, but also sadness that it's ending. After breakfast, continue descending through beautiful mixed forests. The trail follows the Thimphu Chhu closely, crossing it several times on sturdy bridges. You'll pass through small clearings where yak herders have their summer camps, and might encounter locals collecting medicinal herbs or mushrooms from the forest. The vegetation becomes lusher as you descend, with ferns, wildflowers, and even some agricultural terraces appearing. After about 4-5 hours of trekking, reach the road head at Dolam Kencho (2,600m). Here, your support vehicle awaits to drive you to Thimphu. As you load into the vehicle, take a moment to thank your trekking crew—the guides, cook, and horsemen who made this adventure possible. The drive to Thimphu takes about 1.5 hours, winding through beautiful valleys and offering your first glimpses of modern Bhutan after days in the wilderness. Check into your hotel in Thimphu and enjoy the luxury of a hot shower, clean clothes, and a soft bed. In the evening, celebrate your achievement with a special dinner, perhaps at one of Thimphu's fine restaurants. Share stories and photos with your fellow trekkers, reliving the highlights of your Jomolhari adventure. You've just completed one of the classic treks of the Himalayas!", overnight: "Thimphu" },
            { day: 10, title: "Departure", description: "Your final morning in Bhutan begins with a leisurely breakfast at your Thimphu hotel. If your flight is in the afternoon, you might have time for some last-minute shopping in Thimphu's craft markets, where you can find traditional textiles, handicrafts, and souvenirs to remember your journey. Your guide will help you find authentic items and navigate the bargaining process. When it's time, drive to Paro International Airport (about 1.5 hours). The road winds through the valleys you've come to know, offering final views of terraced fields, traditional farmhouses, and the ever-present prayer flags. At the airport, bid farewell to your guide and support team. As your aircraft takes off, enjoy one last aerial view of the Himalayan peaks you've trekked among—Jomolhari, Jichu Drake, and the countless other mountains that have been your companions. You depart Bhutan not just with photos and souvenirs, but with memories of an extraordinary adventure, the warmth of Bhutanese hospitality, and perhaps a changed perspective on life. The mountains will call you back. Tashi Delek!", overnight: "Departure" }
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
            { day: 1, title: "Arrival in Paro", description: "Welcome to the Land of the Thunder Dragon! Your cultural festival adventure begins with arrival at Paro International Airport. After clearing immigration, meet your guide who will accompany you throughout this unique journey. Transfer to your hotel in Paro and take time to rest and acclimatize. In the afternoon, visit the ancient Kyichu Lhakhang, one of Bhutan's oldest and most sacred temples, built in the 7th century by Tibetan King Songtsen Gampo. The temple's serene atmosphere and beautiful gardens provide a perfect introduction to Bhutanese spirituality. Continue to Paro Rinpung Dzong, meaning 'Fortress on a Heap of Jewels.' This massive fortress-monastery dominates the Paro valley and serves as both the administrative center and monastic body. Walk through its courtyards, admire the intricate woodwork and paintings, and learn about its role in Bhutanese history. Cross the traditional covered bridge (cantilever bridge) that spans the Paro Chhu river. In the evening, your guide will brief you on the upcoming Royal Highland Festival and what to expect in the remote Laya region. Enjoy a welcome dinner featuring Bhutanese cuisine. Rest well tonight as tomorrow begins your journey to one of Bhutan's most remote regions.", overnight: "Paro" },
            { day: 2, title: "Paro - Gasa", description: "After an early breakfast, embark on a scenic drive to Gasa, one of Bhutan's most remote districts. The journey takes you first to Punakha, crossing the spectacular Dochula Pass (3,100m) adorned with 108 memorial chortens. On clear days, the pass offers panoramic views of the eastern Himalayan range, including several peaks over 7,000 meters. Stop at the beautiful Dochula cafeteria for tea and photos. Descend into the subtropical Punakha valley, where the climate becomes noticeably warmer. Visit the magnificent Punakha Dzong, strategically positioned at the confluence of the Pho Chhu (father river) and Mo Chhu (mother river). This architectural masterpiece served as Bhutan's capital until 1955 and remains the winter residence of the central monastic body. After lunch in Punakha, continue the drive north to Gasa, following the Mo Chhu upstream. The road becomes narrower and more winding as you enter the mountains. The landscape changes dramatically, with terraced rice fields giving way to pine forests and eventually alpine vegetation. Arrive in Gasa in the late afternoon. The highlight of the evening is a therapeutic soak in Gasa's natural hot springs (Gasa Tshachu), famous throughout Bhutan for their healing properties. The hot springs are believed to cure various ailments, and locals travel from across the country to bathe here. Relax in the mineral-rich waters while surrounded by mountain scenery. Overnight in Gasa, preparing for tomorrow's trek to Laya.", overnight: "Gasa" },
            { day: 3, title: "Trek to Laya", description: "Today begins your trek to Laya, one of Bhutan's highest and most isolated villages. After breakfast, start the trek from Gasa, initially following a well-maintained trail that climbs steadily through pristine blue pine and rhododendron forests. The path follows the Mo Chhu river upstream, crossing it several times on sturdy bridges. As you gain altitude, the forest composition changes, with fir and hemlock trees becoming more common. You'll pass through small clearings where yak herders have their summer camps, and might encounter herders moving their animals to higher pastures. The trail can be steep in sections, so maintain a steady pace. After about 6-7 hours of trekking, covering approximately 18 kilometers and gaining over 1,000 meters in elevation, arrive at Laya village (3,800m). Laya is unlike anywhere else in Bhutan. The village is home to the Layap people, who maintain a distinct culture, language, and traditional dress. The women wear unique conical bamboo hats with a bamboo spike on top, black yak-hair jackets, and silver jewelry. The village consists of traditional stone houses with wooden shingle roofs, surrounded by potato and turnip fields. Check into your tent camp or basic homestay. The facilities are simple but the cultural experience is authentic and unforgettable. In the evening, interact with local villagers and learn about their nomadic lifestyle. The Layaps are primarily yak herders and cordyceps collectors. Rest well tonight at this high altitude, preparing for the festival tomorrow.", overnight: "Laya" },
            { day: 4, title: "Royal Highland Festival - Day 1", description: "Wake to the crisp mountain air and the sounds of the village coming to life. Today is the opening day of the Royal Highland Festival, a unique celebration of highland culture established to preserve and promote the traditions of Bhutan's nomadic communities. After breakfast, walk to the festival grounds, usually a large open field near the village. The festival atmosphere is electric, with villagers dressed in their finest traditional attire. Layap women wear their distinctive conical hats, heavy silver jewelry, and colorful striped aprons. Men sport their best ghos and traditional felt boots. The opening ceremony typically features speeches by local officials and sometimes members of the royal family, who are patrons of this event. Throughout the day, witness a variety of traditional competitions and performances. The yak-related events are particularly fascinating—watch as herders compete in yak racing, where these massive animals thunder across the field. There's also yak riding, which is as challenging as it looks! Other competitions include traditional Layap wrestling, archery (Bhutan's national sport), and khuru (dart throwing). Between competitions, enjoy performances of traditional highland dances and songs, many of which tell stories of the nomadic lifestyle, yak herding, and the harsh mountain environment. Local artisans display and sell traditional handicrafts including woven textiles, yak wool products, and cordyceps (the valuable medicinal fungus). Sample local food including yak cheese, butter tea, and ara (local alcohol). The festival is also a social gathering where Layaps from different villages meet, exchange news, and arrange marriages. Spend the entire day immersed in this unique cultural celebration. Return to your camp in the evening, filled with unforgettable experiences.", overnight: "Laya" },
            { day: 5, title: "Royal Highland Festival - Day 2", description: "The second day of the Royal Highland Festival brings even more exciting events and deeper cultural immersion. After breakfast, return to the festival grounds for another full day of celebrations. Today's highlights include traditional Layap wrestling, where competitors grapple in a style unique to the highlands. The wrestling matches are intense and draw large, enthusiastic crowds. Watch as skilled wrestlers demonstrate techniques passed down through generations. Another major attraction is the nomadic sports competitions, which test skills essential for highland life. These might include stone throwing for distance, rope making competitions, and yak loading races where teams compete to load pack animals the fastest. The festival also features beauty pageants where young Layap women compete, judged not just on appearance but on their knowledge of traditional culture, weaving skills, and ability to perform traditional songs. Throughout the day, various cultural performances continue—masked dances, folk songs, and storytelling sessions where elders share legends of the highlands. Take time to explore the handicraft stalls more thoroughly. You might find unique items like hand-woven yak wool blankets, traditional bamboo hats, or locally made cheese. Engage with the Layap people, who are generally friendly and curious about visitors. Your guide can help translate and facilitate meaningful interactions. Learn about the challenges of highland life, the importance of yaks to their economy, and how climate change is affecting their traditional lifestyle. As the sun sets over the mountains, the festival atmosphere becomes more relaxed and social. Join in traditional circle dances if you're invited. This is your last night in Laya, so savor every moment of this extraordinary cultural experience.", overnight: "Laya" },
            { day: 6, title: "Laya - Gasa - Punakha", description: "Bid farewell to Laya and the warm Layap people who have shared their culture with you. After breakfast, begin the trek back down to Gasa. The descent is easier than the ascent, taking about 5-6 hours. Enjoy different perspectives of the landscape as you descend through the forests. The trail that seemed so challenging on the way up now feels more manageable. Reach Gasa by early afternoon, where your vehicle awaits. If time permits and you're not too tired, enjoy one more soak in the hot springs to soothe your trekking muscles. Begin the drive to Punakha valley, retracing your route from a few days ago. The descent from the mountains back to the subtropical valley is dramatic, with the temperature rising noticeably. Arrive in Punakha in the evening and check into your hotel. After days of basic camping in Laya, the comfort of a proper hotel feels luxurious. Enjoy a hot shower and a comfortable bed. Dinner at your hotel features a variety of Bhutanese and international dishes. Reflect on the incredible festival experience you've just had—few travelers get to witness such authentic cultural celebrations in such remote locations. Rest well tonight as tomorrow brings more cultural exploration in Punakha.", overnight: "Punakha" },
            { day: 7, title: "Punakha - Thimphu - Paro", description: "After a leisurely breakfast, spend the morning exploring Punakha valley. Visit the magnificent Punakha Dzong if you haven't already, or return for a more detailed tour. This dzong is considered the most beautiful in Bhutan, with its strategic location, stunning architecture, and historical significance. Walk across the suspension bridge to Punakha village and experience rural Bhutanese life. The bridge, one of the longest in Bhutan, sways gently as you cross, offering views of the dzong and the confluence of the two rivers. After lunch, drive to Thimphu, Bhutan's capital city. The drive takes about 2.5 hours, crossing back over Dochula Pass. In Thimphu, visit some of the capital's highlights. The National Memorial Chorten is a must-see, where elderly Bhutanese circumambulate the stupa throughout the day, spinning prayer wheels and murmuring mantras. If time permits, visit the Buddha Dordenma statue, a massive 169-foot bronze and gold Buddha that overlooks the valley. The views from here are spectacular. You might also visit the Takin Preserve, home to Bhutan's national animal, the takin—a strange-looking creature that's part goat, part antelope. In the late afternoon, continue the drive to Paro (about 1.5 hours). Check into your hotel in Paro. Enjoy a farewell dinner at a traditional Bhutanese restaurant, perhaps with cultural performances. Share stories and photos from your festival experience with your fellow travelers. Tomorrow brings one final adventure before departure.", overnight: "Paro" },
            { day: 8, title: "Departure", description: "Your final day in Bhutan. Depending on your flight time, you may have a few hours for last-minute activities. If your flight is in the afternoon, consider a morning visit to a local farmhouse for a traditional Bhutanese breakfast, or do some souvenir shopping in Paro town. The main street has several handicraft shops selling authentic Bhutanese textiles, thangka paintings, prayer flags, and other traditional items. Your guide can help you find quality products and navigate the bargaining process. When it's time, drive to Paro International Airport. The check-in process is relaxed and friendly, reflecting Bhutan's unhurried pace of life. As you wait for your flight, reflect on the extraordinary journey you've had—from the remote highlands of Laya to the cultural richness of the Royal Highland Festival, from ancient dzongs to natural hot springs. Bhutan has a way of touching visitors' hearts and changing perspectives. As your aircraft takes off, enjoy final aerial views of the Paro valley, the terraced fields, traditional farmhouses, and the Himalayan peaks beyond. You leave Bhutan with memories of a unique festival, warm encounters with the Layap people, and a deeper understanding of highland culture. The mountains and the smiling faces of Bhutan will call you back. Tashi Delek!", overnight: "Departure" }
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
            { day: 1, title: "Arrival Paro - Thimphu", description: "Your adventure begins with arrival at Paro International Airport. After meeting your adventure guide and support team, transfer to Thimphu (1.5 hours). Check into your hotel and get fitted for your mountain bikes—high-quality hardtail or full-suspension bikes suitable for Himalayan terrain. Your guide will brief you on the upcoming adventures, safety protocols, and what to expect. In the late afternoon, take a short acclimatization ride around Thimphu city. Cycle through the main streets, getting a feel for your bike and the altitude (2,350m). Visit the National Memorial Chorten where you'll see elderly Bhutanese circumambulating the stupa. The gentle evening ride helps your body adjust to the altitude while giving you a taste of Bhutanese urban life. Return to your hotel for a welcome dinner where you'll meet your fellow adventure seekers. Your guide will go over the detailed itinerary, answer questions, and ensure everyone is prepared for the exciting days ahead. Rest well tonight—tomorrow brings your first real cycling challenge.", overnight: "Thimphu" },
            { day: 2, title: "Thimphu Trails", description: "After a hearty breakfast, gear up for your first full day of mountain biking. Today's adventure takes you to two of Thimphu's most scenic monasteries. Start with a warm-up ride through Thimphu's northern suburbs, gradually climbing on paved roads before transitioning to dirt trails. The route to Tango Monastery follows a beautiful valley, with the trail winding through blue pine forests. The climb is challenging but rewarding, gaining about 400 meters in elevation. Arrive at Tango Monastery (3,100m), a beautiful complex perched on a hillside. This monastery is an important center for Buddhist studies. Park your bikes and hike the final section to the monastery (bikes aren't allowed on the monastery grounds). After exploring Tango and enjoying the views, continue on a connecting trail to Cheri Monastery, Bhutan's first monastery established in 1620. The trail between the two monasteries is technical in places, with rocky sections and stream crossings that will test your mountain biking skills. After visiting Cheri Monastery and having lunch, enjoy an exhilarating downhill ride back to Thimphu. The descent is fast and fun, with sweeping switchbacks and forest singletrack. Total distance: approximately 35 kilometers with 600 meters of climbing. Return to your hotel in the afternoon, tired but exhilarated. Evening at leisure to explore Thimphu's restaurants and shops.", overnight: "Thimphu" },
            { day: 3, title: "Thimphu - Punakha (Ride)", description: "Today brings one of the most spectacular rides in Bhutan—the epic downhill from Dochula Pass to Punakha valley. After breakfast, load your bikes onto the support vehicle and drive to Dochula Pass (3,100m). The pass is marked by 108 memorial chortens and offers stunning panoramic views of the Himalayan range on clear days. Take time for photos and tea at the beautiful Dochula cafeteria. Then, gear up for the ride of a lifetime. The descent from Dochula to Punakha drops nearly 1,500 meters over approximately 40 kilometers. Start on paved road with sweeping switchbacks offering incredible valley views. As you descend, the temperature rises noticeably and the vegetation changes from alpine to subtropical. The road winds through pristine forests, past waterfalls, and through small villages. About halfway down, the paved road transitions to a dirt track that follows the Punakha valley. This section is more technical, with loose gravel, water crossings, and some steep sections requiring good bike handling skills. The support vehicle follows at a safe distance, ready to assist if needed. After about 2-3 hours of riding (depending on your pace and photo stops), arrive in Punakha valley. The sense of achievement is immense—you've just descended from high alpine pass to subtropical valley on two wheels! Check into your hotel and celebrate with a well-deserved lunch. Afternoon at leisure to relax or explore Punakha town. Your legs will thank you for the rest!", overnight: "Punakha" },
            { day: 4, title: "River Rafting", description: "Today trades two wheels for paddles as you experience Bhutan's best white-water rafting. After breakfast, start with a morning hike to Khamsum Yulley Namgyal Chorten, a beautiful temple perched on a ridge overlooking the Punakha valley. The hike takes about 45 minutes each way through rice terraces and offers spectacular views of the valley and the confluence of the Pho Chhu and Mo Chhu rivers. After returning from the hike and having lunch, it's time for rafting! Meet your rafting guide and safety kayaker at the put-in point. After a thorough safety briefing and equipment check (helmets, life jackets, paddles), launch onto either the Mo Chhu or Pho Chhu river, depending on water levels and your group's experience. The rafting section covers approximately 16 kilometers and takes 2-3 hours. The rivers offer Class II-III rapids—exciting but suitable for beginners with good instruction. Rapids have colorful names like 'Washing Machine' and 'Big Dipper.' Between rapids, enjoy calmer sections where you can admire the stunning scenery—the Punakha Dzong comes into view at one point, looking magnificent from the river. You might spot white-bellied herons, Bhutan's rarest bird, along the riverbanks. The rafting ends near Punakha town. Return to your hotel, exhilarated and probably wet! Evening at leisure. Many guests enjoy visiting Punakha Dzong in the late afternoon when the light is beautiful.", overnight: "Punakha" },
            { day: 5, title: "Punakha - Phobjikha", description: "After breakfast, drive to the beautiful Phobjikha valley (about 2.5 hours), one of Bhutan's most scenic glacial valleys. The drive crosses Lawala Pass (3,360m) and offers spectacular mountain views. Arrive in Phobjikha and check into your accommodation. After lunch, it's time to explore this stunning valley by bike. The Gangtey Nature Trail is perfect for cycling—a relatively flat, well-maintained path that winds through the valley floor. The trail offers incredible views of the wide, U-shaped valley surrounded by mountains. Phobjikha is the winter home of the endangered Black-necked Cranes, which migrate here from Tibet (November to March). Even if the cranes aren't present, the valley is spectacularly beautiful with its marshlands, traditional villages, and grazing yaks. Cycle to Gangtey Monastery, perched on a hilltop overlooking the valley. This is the only Nyingmapa monastery in western Bhutan and dates back to the 17th century. Park your bikes and hike up to explore the monastery complex. The views from the monastery are breathtaking, especially in late afternoon light. Continue cycling through the valley, perhaps visiting the Black-necked Crane Information Centre to learn about these magnificent birds and conservation efforts. Total cycling distance: approximately 20-25 kilometers on mostly flat terrain. Return to your hotel as the sun sets over the valley. The evening in Phobjikha is magical, with clear skies often revealing countless stars.", overnight: "Phobjikha" },
            { day: 6, title: "Phobjikha Exploration", description: "A full day to explore the magnificent Phobjikha valley by bike. After breakfast, set out on a comprehensive cycling tour of the valley. The terrain is perfect for cycling—mostly flat with gentle rolling hills, allowing you to cover good distances while enjoying the scenery. Cycle through traditional villages where life continues much as it has for centuries. Watch farmers working in their fields, yaks grazing on the hillsides, and children playing outside traditional farmhouses. The valley is dotted with prayer flags, chortens, and mani walls (stone walls carved with Buddhist prayers). Stop at various viewpoints to take in the panoramic vistas of this glacial valley. If visiting in winter (November-March), you'll see the elegant Black-necked Cranes feeding in the marshlands—a truly special sight. These birds are revered in Bhutanese culture and their arrival is celebrated with an annual festival. Visit some of the valley's smaller temples and monasteries that aren't on the main tourist route. Your guide can arrange visits to local farmhouses where you can experience traditional Bhutanese hospitality, try butter tea, and learn about rural life. For the more adventurous, there are trails leading up the surrounding ridges that offer even better views (these sections involve some hiking with your bike or leaving bikes at the base). Total cycling distance: 30-40 kilometers depending on your chosen routes. Pack a picnic lunch to enjoy in the valley. Return to your hotel in the late afternoon. Tonight might be your last chance to stargaze in this pristine environment—the lack of light pollution makes for spectacular night skies.", overnight: "Phobjikha" },
            { day: 7, title: "Phobjikha - Paro", description: "After breakfast, bid farewell to the beautiful Phobjikha valley and begin the drive back to Paro (approximately 4-5 hours). The journey retraces your route over Lawala Pass and through Wangdue, then continues to Paro via Thimphu or the more direct route depending on road conditions. Arrive in Paro by early afternoon. Check into your hotel and freshen up. The afternoon brings a wonderful cultural experience—a visit to a traditional Bhutanese farmhouse. These working farms give you authentic insight into rural Bhutanese life. Your hosts, dressed in traditional attire, will welcome you with ara (local alcohol) and butter tea. Tour the farmhouse, which typically has three floors: the ground floor for animals, the middle floor for living quarters, and the top floor for storage and drying crops. Learn about traditional architecture, farming practices, and daily life. The highlight is a traditional Bhutanese meal prepared by your hosts. Sit on cushions around the bukhari (wood stove) and enjoy dishes like ema datshi (chili cheese), red rice, and various vegetable curries. After lunch, try your hand at Bhutan's national sport—archery. Your hosts will provide traditional bamboo bows and arrows, and teach you the basics. Bhutanese archery is unique, with targets placed 140 meters apart! Don't expect to hit the target on your first try, but it's great fun trying. Return to your hotel in the evening. Rest well tonight—tomorrow brings the ultimate Bhutanese adventure: the Tiger's Nest hike.", overnight: "Paro" },
            { day: 8, title: "Hike to Tiger's Nest", description: "The grand finale of your adventure tour—hiking to the legendary Taktsang Goemba (Tiger's Nest Monastery). Start early after a good breakfast, as this is a challenging hike that takes 5-6 hours round trip. The monastery clings impossibly to a cliff face 900 meters above the Paro valley. According to legend, Guru Rinpoche flew here on the back of a tigress in the 8th century and meditated in a cave for three months. The hike begins through beautiful pine forests adorned with Spanish moss and prayer flags. The trail is well-maintained but steep, switchbacking up the mountainside. After about 1.5-2 hours, reach the cafeteria viewpoint where you can rest, enjoy refreshments, and capture stunning photos of the monastery across the gorge. The view from here is already spectacular, but those who continue are rewarded with an even more incredible experience. The final section involves steep stairs and narrow passages carved into the cliff face. Inside the monastery complex, explore various temples and meditation caves. The main temple houses statues of Guru Rinpoche in his eight manifestations. The spiritual atmosphere is palpable, enhanced by the dramatic setting. Monks chant prayers, butter lamps flicker, and the scent of incense fills the air. The views from the monastery are breathtaking—the entire Paro valley spreads below. Descend back to the base by mid-afternoon. Return to your hotel to rest and freshen up. In the evening, celebrate the completion of your adventure tour with a special farewell dinner. Share stories, photos, and memories with your fellow adventurers and guides. You've cycled down mountain passes, rafted wild rivers, explored remote valleys, and climbed to sacred monasteries—an unforgettable Bhutanese adventure!", overnight: "Paro" },
            { day: 9, title: "Departure", description: "Your adventure in Bhutan concludes today. Depending on your flight time, you may have a few hours for last-minute activities. If departing in the afternoon, consider a morning stroll through Paro town for some final souvenir shopping. Look for authentic Bhutanese handicrafts, textiles, or traditional archery equipment to remember your adventure. When it's time, transfer to Paro International Airport. As you check in and wait for your flight, reflect on the incredible journey you've had—from mountain biking down Himalayan passes to rafting wild rivers, from cycling through pristine valleys to hiking to sacred monasteries. You've experienced Bhutan not just as a tourist, but as an adventurer, pushing your limits while immersing yourself in this unique culture. As your aircraft takes off and climbs through the mountain valleys, enjoy final aerial views of the peaks, valleys, and dzongs that have been your playground. You depart with sore muscles, incredible memories, and perhaps a new appreciation for both adventure and mindfulness—the perfect Bhutanese combination. The mountains will call you back. Tashi Delek!", overnight: "Departure" }
        ]
    },
    {
        id: "motorcycle-expedition",
        title: "Motorcycle Expedition",
        duration: "12 Days / 11 Nights",
        category: "Adventure",
        price: "$3,500",
        image: "/assets/home/moto.jpg",
        detailImage: "/assets/home/mott.jpg",
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
            { day: 1, title: "Arrival in Paro", description: "Touch down at Paro International Airport, one of the most scenic approaches in the world. You'll be greeted by your road captain and support team. Transfer to your hotel to settle in. Then, head to the garage to meet your machines—classic Royal Enfield Classics or Himalayans. After a comprehensive safety briefing and gear check, take a short acclimatization test ride around the Paro valley to get a feel for the bikes and the Bhutanese roads. Evening welcome dinner to meet the fellow riders.", overnight: "Paro" },
            { day: 2, title: "Ride to Thimphu", description: "Kickstart your engines for the first leg of the journey: a short but beautiful ride to Thimphu (55km). The road follows the Pa Chhu and Thimphu Chhu rivers with sweeping curves. Ride past the confluence at Chuzom. Arrive in Thimphu and ride up to the massive Buddha Dordenma statue for a blessing and panoramic city views. Cruise through the city streets, observing the unique blend of traffic (no traffic lights!) and tradition. Park up at your hotel and explore the city's nightlife.", overnight: "Thimphu" },
            { day: 3, title: "Thimphu to Punakha", description: "The real adventure begins. Ascend from Thimphu to the Dochula Pass (3,100m). The climb involves a series of switchbacks offering thrilling riding. Stop at the pass to admire the 108 chortens and the Himalayan range. Then, start the long, winding descent into the subtropical Punakha valley (1,200m). The vegetation changes from pine to banana trees and cacti. Ride to the Punakha Dzong, the most majestic fortress in Bhutan. Overnight in a hotel overlooking the paddy fields.", overnight: "Punakha" },
            { day: 4, title: "Punakha to Trongsa", description: "Ride deeper into the heart of Bhutan. Use the East-West highway, which is locally known as the 'dancing road' due to its endless curves. Cross the Pele La Pass (3,420m), traditionally the boundary between western and central Bhutan. Watch out for yaks on the road! Descend through dwarf bamboo forests to Chendebji Chorten. Continue to Trongsa, where the massive dzong seems to float above the gorge. The ride is demanding but rewarding.", overnight: "Trongsa" },
            { day: 5, title: "Trongsa to Bumthang", description: "A shorter ride today but full of altitude changes. Climb out of Trongsa to cross the Yotong La Pass (3,425m). The air gets cooler as you descend into the Chumey valley, known for its wool weavers. Continue to Jakar in Bumthang, the spiritual heartland. The wide, open valleys of Bumthang are perfect for cruising. Check into your lodge and enjoy a locally brewed Red Panda Weiss beer.", overnight: "Bumthang" },
            { day: 6, title: "Bumthang Exploration", description: "Leave the luggage at the hotel and enjoy a day ride exploring the four valleys of Bumthang: Chokhor, Tang, Ura, and Chumey. Visit the grand Kurjey Lhakhang and the ancient Jambay Lhakhang. The roads here are quieter and offer opportunities to ride on some paved farm roads depending on your skill level. Visit the Swiss Farm area or ride further up to the Burning Lake (Mebar Tsho).", overnight: "Bumthang" },
            { day: 7, title: "Bumthang to Punakha", description: "Begin the return leg of the journey westwards. Retracing your route allows you to experience the curves from a different angle. The ride back to Punakha is a long day in the saddle (approx. 7-8 hours), testing your endurance. Stops will be made for tea and photos at scenic viewpoints. The familiarity of the road allows for a more rhythmic and confident ride.", overnight: "Punakha" },
            { day: 8, title: "Punakha to Paro", description: "Climb back up to Dochula Pass for a final view of the high peaks. Then, enjoy the long descent back to Thimphu and the cruising run along the river back to Paro. This riding day brings a sense of accomplishment as you complete the circuit. Drop off the bikes at the garage and share stories of the road with the mechanics. Transfer to your hotel for a well-earned rest.", overnight: "Paro" },
            { day: 9, title: "Tiger's Nest Hike", description: "Trade riding boots for hiking boots. Today, you hike to the iconic Tiger's Nest Monastery (Taktsang Goemba). It's a great way to stretch the legs after days on the bike. The hike takes 4-5 hours round trip. Visiting this sacred site, clinging to the cliffside, is the spiritual highlight of the trip. Return to Paro for a relaxing afternoon.", overnight: "Paro" },
            { day: 10, title: "Haa Valley Ride", description: "One final day on the bikes (optional) or a drive. Head to the Haa Valley via the Chele La Pass (3,988m), the highest motorable road in Bhutan. The road to the pass is steep with hairpin bends, offering an exhilarating ride. The view from the top includes Mt. Jomolhari. Glide down into the pristine Haa valley for lunch before riding back to Paro. This is often voted the best riding day.", overnight: "Paro" },
            { day: 11, title: "Leisure & Hot Stone Bath", description: "A free day to relax. Explore Paro town for souvenirs. In the late afternoon, indulge in a traditional hot stone bath. River stones are heated in a fire until red hot and then dropped into a wooden tub of water with medicinal herbs—the perfect cure for rider's fatigue. Farewell dinner with traditional music and dance.", overnight: "Paro" },
            { day: 12, title: "Departure", description: "Your motorcycle expedition wraps up. Transfer to Paro International Airport for your flight. You leave with memories of the wind, the mountains, and the open road.", overnight: "Departure" }
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
            "3-star accommodation & meals"
        ],
        itinerary: [
            { day: 1, title: "Arrival In Paro", description: "Welcome to Bhutan! Your specialist birding guide will meet you at Paro Airport. Even the drive to the hotel can yield sightings. After check-in, head to the banks of the Paro Chhu river. The rocky riverbed is the prime habitat for the unique Ibisbill, Brown Dipper, and White-capped Water Redstart. Scan the bushes for Black-tailed Crake. It's an easy start to acclimatize.", overnight: "Paro" },
            { day: 2, title: "Birding In Paro (Chele La)", description: "An early start for a drive to Chele La Pass (3,988m), the highest point of the tour. The alpine meadows and fir forests here are home to high-altitude specialties. The main target is the stunning Himalayan Monal, often seen at dawn. Also look for Blood Pheasant, Kalij Pheasant, and the rare Satyr Tragopan. Other species include Spotted Laughingthrush and White-browed Rosefinch. Picnic breakfast on the mountain.", overnight: "Paro" },
            { day: 3, title: "Paro - Thimphu", description: "Drive to Thimphu (1.5 hrs). Stop at the dramatic sheer cliffs en route to scan for Wallcreepers. In Thimphu, visit the sewage ponds (an surprisingly excellent birding spot!) to see Ruddy Shelduck, River Lapwing, and various migratory waders. Later, bird in the Motithang forests for Spotted Nutcracker, Rufous-bellied Woodpecker, and various Tits and Warblers.", overnight: "Thimphu" },
            { day: 4, title: "Thimphu - Punakha", description: "Drive up to Dochula Pass (3,100m). The mixed forests on the east side are incredibly rich. Look for the colorful Fire-tailed Myzornis, Rufous-gorgeted Flycatcher, and Ward's Trogon. Descend into the warm, subtropical Punakha region. The change in altitude brings different species like the Great Barbet and Blue-throated Barbet. Search the Mo Chhu river for the critically endangered White-bellied Heron.", overnight: "Punakha" },
            { day: 5, title: "Punakha - Phobjikha", description: "Morning birding along the Pho Chhu river. Then drive to Phobjikha Valley via the Pele La Pass. This pass is good for Himalayan Griffon and Brown Parrotbill. Arrive in the marshy Phobjikha valley. In winter (Nov-Mar), this is the roosting ground for hundreds of Black-necked Cranes. Even in other seasons, the valley hosts Hen Harrier, Oriental Skylark, and various finches.", overnight: "Phobjikha" },
            { day: 6, title: "Phobjikha - Trongsa", description: "Morning walk to spot cranes (in season) or forest birds on the valley flakes. Drive to Trongsa. The dense forests around Trongsa are excellent for Spotted Forktail and Crested Kingfisher. Stop at Chendebji to look for Yellow-rumped Honeyguide near bee hives on cliffs.", overnight: "Trongsa" },
            { day: 7, title: "Trongsa - Zhemgang", description: "Drive south to Zhemgang and Tingtibi, entering the prime birding belt of Bhutan. The warm broadleaf forests here are teeming with life. This is the best place to find the majestic Rufous-necked Hornbill and the Beautiful Nuthatch. Look out for the Golden Langur monkey, endemic to this region, often seen in the same trees.", overnight: "Tingtibi" },
            { day: 8, title: "Birding Tingtibi & Manas", description: "Explore the road towards Royal Manas National Park. This low-altitude area (around 600m) offers species found nowhere else in Bhutan. key targets include the Great Hornbill, Wreathed Hornbill, and the rare White-bellied Heron on the Mangde Chhu rocks. Look for Pallas's Fish Eagle soaring above the river. The bird list here is extensive and includes bee-eaters, rollers, and drongos.", overnight: "Tingtibi" },
            { day: 9, title: "Tingtibi Exploration", description: "Another full day in this birding paradise. Focus on the bamboo patches to find shy species like the White-hooded Babbler, Greater Rufous-headed Parrotbill, and Pale-headed Woodpecker. The area is also known for varied flycatchers and warblers. Night birding might reveal owls like the Brown Wood Owl or Spot-bellied Eagle-owl.", overnight: "Tingtibi" },
            { day: 10, title: "Tingtibi - Trongsa", description: "Final morning birding in Tingtibi to pick up any missed species. Then begin the drive back up to the cooler highlands of Trongsa. The ascent offers a second chance to spot birds at intermediate altitudes. Stop at waterfalls to look for Little Forktail.", overnight: "Trongsa" },
            { day: 11, title: "Trongsa - Bumthang", description: "Drive over Yotong La Pass to Bumthang. The bamboo undergrowth at the pass is the habitat of the Great Parrotbill and Fulvous Parrotbill. Descend into the pine forests of Bumthang. Look for Ibisbill in the Chamkhar Chhu river and Red-billed Choughs in the fields.", overnight: "Bumthang" },
            { day: 12, title: "Bumthang (Tharpaling)", description: "Drive to Tharpaling Monastery for a special pheasant quest. The monks feed the birds here, making it one of the best places to see Himalayan Monal and Satyr Tragopan at close range. It's a photographer's dream. Spend the rest of the day exploring the valley's cultural sites and birding in the blue pine forests.", overnight: "Bumthang" },
            { day: 13, title: "Bumthang - Paro", description: "Take the domestic flight from Bumthang to Paro (25 mins) to save a long driving day, offering aerial views of the mountains (flight cost extra, otherwise long drive). If flying, arrive in Paro with time for afternoon shopping or a visit to the National Museum. If driving, it's a full day journey. Final celebratory dinner.", overnight: "Paro" },
            { day: 14, title: "Departure", description: "Transfer to Paro Airport. As you fly out, keep an eye on the window—you might just spot a Lammergeier soaring one last time. Tashi Delek!", overnight: "Departure" }
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
            { day: 1, title: "Arrival Paro", description: "Arrive in Paro. After checking in, visit the 7th-century Kyichu Lhakhang, one of the 108 temples built by Tibetan King Songtsen Gampo. It is a place of profound peace. Circumambulate the temple and spin the prayer wheels. In the evening, meet your guide for a briefing on Bhutanese Buddhism and the journey ahead.", overnight: "Paro" },
            { day: 2, title: "Thimphu Spirituality", description: "Drive to Thimphu. Visit Changangkha Lhakhang, a fortress-like temple perched on a ridge, where parents bring newborns for blessings. Participate in a private meditation session led by a monk at a quiet temple. Visit Pangri Zampa, the college of astrology, to learn about the role of astrology in daily Bhutanese life. Evening at leisure to reflect.", overnight: "Thimphu" },
            { day: 3, title: "Punakha - Chimi Lhakhang", description: "Travel to Punakha over the Dochula Pass. The 108 chortens here were built to atone for loss of life in conflict, a reminder of the value of peace. Descend to walk through rice fields to Chimi Lhakhang, the temple of the Divine Madman. His teaching methods were unorthodox (using humor and sexuality), and the temple is now a pilgrimage site for fertility and protection.", overnight: "Punakha" },
            { day: 4, title: "Gangtey Monastery", description: "Drive to the Phobjikha Valley. Visit the Gangtey Goemba, the largest Nyingma monastery in western Bhutan. It is a major center for Buddhist studies. Interact with the monks and perhaps witness a debate session. The valley itself is a conservation area for Black-necked Cranes, which the locals revere as heavenly birds.", overnight: "Phobjikha" },
            { day: 5, title: "Paro Return & Butter Lamps", description: "Return to Paro. In the evening, visit a local nunnery or temple to perform a butter lamp offering ceremony. Lighting a lamp symbolizes the dispelling of darkness (ignorance) and the cultivation of wisdom. It is a moving and visually beautiful ritual. Enjoy a final vegetarian dinner at a farmhouse.", overnight: "Paro" },
            { day: 6, title: "Departure", description: "Transfer to Paro International Airport. Depart with a lighter spirit and a peaceful mind.", overnight: "Departure" }
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
            { day: 1, title: "Arrival Paro - Thimphu", description: "Touch down in Paro and drive immediately to Thimphu (1 hr). Stop at Chuzom (river confluence) to see the three styles of stupas. In Thimphu, visit the National Memorial Chorten, constantly buzzing with devotees. Visit the glorious Tashichho Dzong in the late afternoon to see the flag lowering ceremony. Dinner at a traditional Bhutanese restaurant.", overnight: "Thimphu" },
            { day: 2, title: "Thimphu to Punakha", description: "Rise early for the drive to Dochula Pass. If clear, the mountain views are incredible. Continue to Punakha to visit the 'Palace of Great Happiness' (Punakha Dzong), located at the river confluence. Walk across the 160m suspension bridge nearby for photos and a thrill. On the way back or forth, take a short hike to Chimi Lhakhang. Overnight in the balmy Punakha valley.", overnight: "Punakha" },
            { day: 3, title: "Punakha to Paro", description: "Drive back to Paro. Visit the National Museum of Bhutan (Ta Dzong) to see a collection of thangkas, festival masks, and heritage items. Walk down to the Rinpung Dzong. In the evening, stroll through Paro's main street, lined with traditional wooden buildings housing shops and cafes.", overnight: "Paro" },
            { day: 4, title: "Tiger's Nest Excursion", description: "The highlight of the trip: hiking to Taktsang Goemba (Tiger's Nest). Start early to beat the heat. The trail goes through pine forests. Visit the monastery temples clinging to the rock. After the hike, treat yourself to a traditional hot stone bath (Dotsho) to soothe your muscles. Farewell dinner.", overnight: "Paro" },
            { day: 5, title: "Departure", description: "Transfer to Paro Airport. Even a short glimpse of Bhutan leaves a lasting impression.", overnight: "Departure" }
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
            { day: 1, title: "Arrival Paro - Thimphu", description: "Welcome back to the Himalayas! Drive to Thimphu. Depending on arrival time, stroll around the Clock Tower Square and observe the mix of monks, business people, and youth in the capital.", overnight: "Thimphu" },
            { day: 2, title: "Thimphu Sightseeing", description: "A full day of culture. Visit the Institute for Zorig Chusum to see students learning traditional arts. Explore the Folk Heritage Museum. Head up to the Motithang Takin Preserve to see the unique national animal. Visit the Centenary Farmers Market to see local produce like yak cheese and wild ferns.", overnight: "Thimphu" },
            { day: 3, title: "Thimphu - Punakha", description: "Drive over the Dochula Pass to Punakha. Visit the Punakha Dzong, the second oldest and second largest dzong in Bhutan. It houses the sacred relics of the southern Drukpa Lineage. Walk the suspension bridge. Evening at leisure.", overnight: "Punakha" },
            { day: 4, title: "Punakha - Phobjikha", description: "Drive east to the Phobjikha Valley. Visit Wangdue Phodrang Dzong (under reconstruction/restoration) en route. Arrive in Gangtey. Visit the Gangtey Monastery and walk the nature trail. The valley is known for its scenic beauty and silence.", overnight: "Phobjikha" },
            { day: 5, title: "Phobjikha - Bumthang", description: "A long but spectacular drive (5-6 hours) to Bumthang. Cross the Pele La Pass and stop at Chendebji Chorten. Stop in Trongsa to view the massive Trongsa Dzong, the ancestral home of the Royal Family. Continue over Yotong La Pass to Jakar in Bumthang.", overnight: "Bumthang" },
            { day: 6, title: "Bumthang Cultural Tour", description: "Explore the Choekhor valley. Visit Jambay Lhakhang (7th century). Visit Kurjey Lhakhang, where Guru Rinpoche meditated. Cross the bridge to Tamshing Lhakhang, known for its ancient religious paintings. Visit the Swiss Farm and Red Panda Brewery.", overnight: "Bumthang" },
            { day: 7, title: "Tang Valley Excursion", description: "Drive to the remote Tang Valley. Hike down to Mebar Tsho (Burning Lake), a sacred pool in the river. Visit Ogyen Choling Palace Museum, which offers one of the best insights into the lifestyle of Bhutanese nobility. Picnic lunch by the river.", overnight: "Bumthang" },
            { day: 8, title: "Bumthang - Wangdue", description: "Begin the return journey. Drive back across the passes to Wangdue Phodrang. The changing light on the mountains offers new photo opportunities. Overnight in a hotel in Wangdue.", overnight: "Wangdue" },
            { day: 9, title: "Wangdue - Paro (Tiger's Nest)", description: "Start early to drive back to Paro (3.5 hours). Upon arrival, proceed directly to the base of Tiger's Nest for the hike. (Note: This makes for a busy day, but the site is unmissable). Hike up to the monastery and back. Relax in the evening with a farewell dinner.", overnight: "Paro" },
            { day: 10, title: "Departure", description: "Transfer to Paro International Airport. Depart with deep memories of the hidden kingdom.", overnight: "Departure" }
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
            { day: 1, title: "Arrival Paro", description: "Arrive in Paro. Drive to your hotel. Visit the National Museum (Ta Dzong) to orient yourself with Bhutan's history and flora/fauna, which you will see on the trek. Time permitting, visit the ruined Drukgyel Dzong. Evening equipment check with your guide.", overnight: "Paro" },
            { day: 2, title: "Tiger's Nest Hike", description: "Acclimatization hike to Taktsang Goemba (Tiger's Nest). This hike to 3,120m is essential for preparing your body for the trek. Walk at a steady pace. Enjoy the spiritual atmosphere and the stunning views. Return to Paro for a relaxed evening.", overnight: "Paro" },
            { day: 3, title: "Trek Day 1: Paro - Jele Dzong", description: "The trek begins! Drive to Ta Dzong and start hiking. It's a gradual climb through blue pine forests and apple orchards. You will pass traditional farmhouses. The camp is near Jele Dzong (3,400m), an ancient fortress sitting on a ridge. If the caretaker is there, you can visit the lhakhang inside.", overnight: "Jele Dzong (Camp)" },
            { day: 4, title: "Trek Day 2: Jele Dzong - Jangchulakha", description: "Begin with a climb and then walk along a ridge with views of Paro valley on one side and Thimphu valley on the other. On a clear day, Mt. Jomolhari is visible. The trail takes you through thick alpine forests and rhododendron trees. Camp at Jangchulakha (3,780m), often used by yak herders.", overnight: "Jangchulakha (Camp)" },
            { day: 5, title: "Trek Day 3: Jangchulakha - Jimilang Tsho", description: "Follow the trail along the ridge, enjoying spectacular mountain views. Descend slightly before climbing to Jimilang Tsho (3,880m), a large isolated lake known for its giant trout. The campsite is right by the lake, offering a serene and beautiful setting. Enjoy a peaceful evening by the water.", overnight: "Jimilang Tsho (Camp)" },
            { day: 6, title: "Trek Day 4: Jimilang Tsho - Simkotra Tsho", description: "Walk through dwarf rhododendron forests and pass another lake, Janetsho. You may encounter yak reducer camps. Climb steadily to Simkotra Tsho (4,110m), another stunning high-altitude lake. This is the highest camp on the trek. The views of the Bhutan Himalayas are magnificent from here.", overnight: "Simkotra Tsho (Camp)" },
            { day: 7, title: "Trek Day 5: Simkotra - Phajoding - Thimphu", description: "The final day of trekking. Ascend a small pass (4,210m) for the best views of Mt. Gangkar Puensum (7,570m), the highest unclimbed peak in the world. Descend steeply to Phajoding Monastery, overlooking the Thimphu valley. Continue the descent through blue pine forests to Motithang (Thimphu). Your vehicle will meet you to drive to the hotel. Hot shower time!", overnight: "Thimphu" },
            { day: 8, title: "Thimphu Sightseeing - Paro", description: "Morning exploration of Thimphu's highlights, such as the Takin Preserve or the Buddha Dordenma. After lunch, drive back to Paro (1.5 hours). Enjoy a farewell celebration dinner, reflecting on the ridge trek you just completed.", overnight: "Paro" },
            { day: 9, title: "Departure", description: "Transfer to Paro Airport. Depart with fresh mountain air in your lungs and memories of the lakes.", overnight: "Departure" }
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
            { day: 1, title: "Arrival Paro", description: "A warm welcome to Bhutan! Meet your experienced trekking crew for a thorough briefing and equipment check. This is crucial for the Snowman Trek.", overnight: "Paro" },
            { day: 2, title: "Tiger's Nest Hike", description: "Acclimatization is key. Hike to Taktsang Goemba (3,120m). Walk steadily and breathe deeply. Offer prayers for a safe journey.", overnight: "Paro" },
            { day: 3, title: "Paro - Shana", description: "Drive to Drugyel Dzong. Begin trekking, following the Paro river upstream through farmland and forests to Shana (2,850m).", overnight: "Shana (Camp)" },
            { day: 4, title: "Shana - Thangthangkha", description: "A long day walking through Jigme Dorji National Park. Cross bridges and ascend through oak and rhododendron forests to Thangthangkha (3,610m).", overnight: "Thangthangkha (Camp)" },
            { day: 5, title: "Thangthangkha - Jangothang", description: "Trek above the tree line. The valley opens up, revealing the magnificent Mt. Jomolhari (7,314m). Camp at Jangothang (4,080m) beneath the mountain walls.", overnight: "Jangothang (Camp)" },
            { day: 6, title: "Rest at Jangothang", description: "Active rest day for acclimatization. Hike to the twin lakes of Tshophu or towards the Jomolhari glacier. The views are unmatched.", overnight: "Jangothang (Camp)" },
            { day: 7, title: "Jangothang - Lingshi", description: "Cross the first major pass, Nyeli La (4,870m). Descend to Lingshi basin with views of the hilltop Lingshi Dzong. Camp at 4,010m.", overnight: "Lingshi (Camp)" },
            { day: 8, title: "Lingshi - Chebisa", description: "A pleasant walking day. Pass Lingshi Dzong and villages. Arrive at Chebisa (3,880m), a charming village with a large waterfall behind it.", overnight: "Chebisa (Camp)" },
            { day: 9, title: "Chebisa - Shomuthang", description: "Climb steeply to Gombu La pass (4,440m). Descend through rhododendrons where you might spot Blue Sheep. Camp at Shomuthang (4,220m).", overnight: "Shomuthang (Camp)" },
            { day: 10, title: "Shomuthang - Robluthang", description: "Cross Jhari La (4,750m). Views of the Great Tiger Mountain (Gangchenta). Camp at Robluthang (4,160m), a rocky meadow.", overnight: "Robluthang (Camp)" },
            { day: 11, title: "Robluthang - Limithang", description: "A challenging day. Cross Shinje La (5,005m), your first 5000er! Descend to Limithang (4,140m), with Gangchenta dominating the valley.", overnight: "Limithang (Camp)" },
            { day: 12, title: "Limithang - Laya", description: "Walk down the valley to Laya village (3,840m). The women here wear distinct conical bamboo hats. It's the largest village in the highlands.", overnight: "Laya" },
            { day: 13, title: "Rest at Laya", description: "Explore the village, visit the school, and interact with the friendly Layaps. Prepare supplies for the remote Lunana section.", overnight: "Laya" },
            { day: 14, title: "Laya - Rodophu", description: "Leave civilization behind. Descend to the river and then climb steeply to Rodophu (4,160m). You are entering the realm of the Snowman.", overnight: "Rodophu (Camp)" },
            { day: 15, title: "Rodophu - Narethang", description: "Cross Tsemo La (4,910m). The terrain becomes rugged and barren. Camp at Narethang (4,900m) under the shadow of Gangla Karchung.", overnight: "Narethang (Camp)" },
            { day: 16, title: "Narethang - Tarina", description: "Cross Karakachhu La (5,020m). The descent is steep into the Tarina valley (3,970m). Looking back, the wall of mountains is awe-inspiring.", overnight: "Tarina (Camp)" },
            { day: 17, title: "Tarina - Woche", description: "Follow the river downstream. Climb to Woche (3,910m), the first village of the Lunana region. It's a small, isolated settlement.", overnight: "Woche (Camp)" },
            { day: 18, title: "Woche - Lhedi", description: "Cross Keche La (4,650m). Views of Jejekangphu Gang. Descend to Lhedi village (3,700m), located by the Pho Chhu river.", overnight: "Lhedi (Camp)" },
            { day: 19, title: "Lhedi - Thanza", description: "Walk along the river to Thanza (4,150m), the 'capital' of Lunana underneath the Table Mountain (Zongophu Gang). Swap yaks here.", overnight: "Thanza (Camp)" },
            { day: 20, title: "Thanza - Danji", description: "Climb towards the high ridges again. Views of the massive Thanza valley glaciers. Camp at Danji (4,230m) with views of high peaks.", overnight: "Danji (Camp)" },
            { day: 21, title: "Danji - Tsho Chena", description: "Cross Jaze La (5,150m). It's a high alpine crossing. Descend to camp beside Tsho Chena lake (4,960m). A stunningly cold and beautiful spot.", overnight: "Tsho Chena (Camp)" },
            { day: 22, title: "Tsho Chena - Jichu Dramo", description: "Cross Loju La (5,140m). Trek across a series of small ridges to Jichu Dramo (5,050m) camp, surrounded by jagged peaks.", overnight: "Jichu Dramo (Camp)" },
            { day: 23, title: "Jichu Dramo - Chukarpo", description: "The highest pass! Cross Rinchen Zoe La (5,320m). It feels like the roof of the world. Descend into a new valley system to Chukarpo (4,600m).", overnight: "Chukarpo (Camp)" },
            { day: 24, title: "Chukarpo - Tampetsho", description: "Descend further and then climb Tampetsho La (4,500m). Camp near the stunning Tampetsho Lake (4,300m), believed to be the home of a deity.", overnight: "Tampetsho (Camp)" },
            { day: 25, title: "Descend to Sephu - Transfer", description: "The final push. Descend steeply to the Nikachu Chhu and the roadhead at Sephu. Your vehicle awaits! Drive to Trongsa for a hot shower and celebration.", overnight: "Wangdue" }
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
            { day: 1, title: "Arrival Paro", description: "Welcome to Bhutan during one of its most vibrant festival periods! Arrive at Paro International Airport and meet your cultural guide who specializes in Bhutanese festivals and traditions. Transfer to your hotel in Paro town, ideally located near the festival venue. After settling in and having lunch, begin your cultural orientation with a visit to Kyichu Lhakhang, one of Bhutan's oldest and most sacred temples dating back to the 7th century. This ancient temple, with its beautiful orange trees and peaceful atmosphere, provides the perfect introduction to Bhutanese Buddhism. Continue to Paro Rinpung Dzong, the magnificent fortress-monastery where the Tshechu will take place. Walk through its massive courtyards and corridors, admiring the intricate woodwork, colorful murals, and traditional architecture. Your guide will explain the dzong's history and its significance as both an administrative center and religious institution. Cross the traditional cantilever bridge spanning the Paro Chhu river. In the evening, your guide will brief you on the Paro Tshechu—its history, significance, the mask dances you'll witness, and festival etiquette. Learn about the religious and social importance of tshechus in Bhutanese culture. Enjoy a welcome dinner at your hotel. Rest well tonight—tomorrow the festival begins, and you'll want to arrive early to secure good viewing spots!", overnight: "Paro" },
            { day: 2, title: "Paro Tshechu - Day 1", description: "Rise early for the first day of the Paro Tshechu, one of Bhutan's most popular and colorful festivals. After breakfast, walk to Rinpung Dzong where the festival takes place. Arrive early (around 8 AM) to secure good seats in the viewing galleries. The atmosphere is electric—thousands of Bhutanese from across the country gather, dressed in their finest traditional attire. Women wear beautiful kiras (traditional dresses) in vibrant colors and intricate patterns, adorned with coral and turquoise jewelry. Men sport their best ghos with colorful kabney (ceremonial scarves) indicating their rank. The opening ceremony begins with monks blowing ceremonial horns and beating drums. Throughout the day, witness a spectacular series of cham (mask dances) performed by monks and laypeople. Each dance has deep religious significance, depicting Buddhist teachings, historical events, or moral lessons. Watch the Dance of the Four Stags, the Dance of the Noblemen and Ladies, and the terrifying Dance of the Judgement of the Dead, where dancers in elaborate costumes and masks portray the Lord of Death judging souls. Your guide will explain the meaning and symbolism of each dance—the colors, movements, and masks all carry specific significance. Between dances, explore the festival grounds. Local vendors sell traditional snacks, ara (local alcohol), and handicrafts. Mingle with locals who are happy to share their festival experience. The social aspect of tshechus is as important as the religious—families reunite, young people meet potential partners, and communities strengthen bonds. Return to your hotel in the late afternoon, overwhelmed by the colors, sounds, and spiritual energy of the festival.", overnight: "Paro" },
            { day: 3, title: "Paro Tshechu - Day 2", description: "Another full day immersed in the Paro Tshechu festival. Return to Rinpung Dzong for the second day of celebrations. Today brings different mask dances and performances. Witness the Dance of the Black Hats, one of the most powerful and dramatic dances, where monks in elaborate black hats and costumes perform a ritual dance to subdue evil spirits. The Dance of the Drummers from Dramitse is particularly spectacular, with dancers in animal masks performing intricate choreography while playing drums. Watch the Dance of the Stag and the Hounds, a folk dance that tells the story of a hunter's conversion to Buddhism. Each performance is accompanied by traditional music—cymbals, drums, horns, and oboes creating a hypnotic soundscape. Take time to observe the crowd as much as the performances. Notice how elderly Bhutanese watch with deep devotion, often murmuring prayers. Young people take selfies in their traditional dress. Children run around playing, occasionally stopping to watch the dances. The festival is a complete sensory experience—the vibrant colors of costumes and masks, the rhythmic music, the scent of incense and juniper smoke, the taste of traditional snacks. During breaks, your guide can introduce you to local families, facilitating cultural exchange. Many Bhutanese are curious about foreign visitors and happy to explain their traditions. You might be invited to share ara or butter tea. If you're lucky, you might witness a traditional courtship ritual—young people exchange glances and sometimes phone numbers during festivals! Spend the entire day at the festival, soaking in this unique cultural celebration. Return to your hotel in the evening, perhaps joining other travelers to share experiences over dinner.", overnight: "Paro" },
            { day: 4, title: "Thimphu Sightseeing", description: "After two intensive festival days, today offers a change of pace with a drive to Thimphu, Bhutan's capital (about 1.5 hours). The drive follows the Paro and Thimphu rivers through beautiful valleys. Arrive in Thimphu and check into your hotel. After lunch, begin exploring the capital. Start with a visit to Buddha Dordenma, a massive 169-foot bronze and gold statue of Buddha Shakyamuni overlooking the Thimphu valley. The statue houses over 100,000 smaller Buddha statues, creating an impressive display of Buddhist devotion. The panoramic views from this hilltop location are spectacular—the entire Thimphu valley spreads below, with traditional and modern buildings interspersed. Continue to the National Memorial Chorten, built in 1974 in memory of the third King. This is one of Thimphu's most iconic landmarks and a focal point of daily worship. Watch as elderly Bhutanese circumambulate the chorten throughout the day, spinning prayer wheels, murmuring mantras, and prostrating. The devotion is moving to witness. If time permits, visit the Takin Preserve to see Bhutan's national animal, the takin—a unique creature that looks like a cross between a goat and an antelope. According to legend, the takin was created by the Divine Madman (Drukpa Kunley) from the bones of a goat and a cow. Spend the evening exploring Thimphu's main street, browsing handicraft shops, bookstores, and cafes. Thimphu offers a fascinating blend of traditional and modern Bhutan. Enjoy dinner at one of the capital's restaurants, perhaps trying some dishes you haven't had yet.", overnight: "Thimphu" },
            { day: 5, title: "Thimphu - Punakha - Paro", description: "Today brings a full-day excursion to Punakha, one of Bhutan's most beautiful valleys. After an early breakfast, drive over the spectacular Dochula Pass (3,100m), marked by 108 memorial chortens and offering panoramic Himalayan views on clear days. Stop for tea and photos at the beautiful Dochula cafeteria, enjoying the mountain vistas. Descend into the warm, subtropical Punakha valley—the change in climate and vegetation is dramatic. Visit the magnificent Punakha Dzong, strategically positioned at the confluence of the Pho Chhu (father river) and Mo Chhu (mother river). This is considered Bhutan's most beautiful dzong, and it's easy to see why. The massive structure with its golden roofs, whitewashed walls, and intricate woodwork is stunning, especially when viewed from the suspension bridge. The dzong served as Bhutan's capital until 1955 and remains the winter residence of the central monastic body. Walk through its courtyards, temples, and administrative halls. Your guide will explain its historical significance, including its role in Bhutan's unification. If visiting in spring, the dzong is surrounded by blooming jacaranda trees, adding purple blossoms to the scenery. After lunch in Punakha, visit Chimi Lhakhang, the fertility temple dedicated to the Divine Madman. A short walk through rice fields brings you to this charming temple where couples pray for children. The temple is decorated with phallus symbols, reflecting the Divine Madman's unconventional teaching methods. Begin the return journey to Paro in the late afternoon, arriving in the evening. Rest well tonight—tomorrow brings the festival's grand finale and the Tiger's Nest hike!", overnight: "Paro" },
            { day: 6, title: "Thongdrel Ceremony & Tiger's Nest", description: "Today is the grand finale of the Paro Tshechu and also includes the iconic Tiger's Nest hike—a full, unforgettable day! Wake before dawn (around 3:30-4:00 AM) and walk to Rinpung Dzong in the darkness. Join thousands of Bhutanese gathering for the Thongdrel ceremony, the festival's most sacred event. Around 4:30-5:00 AM, as the first light appears, monks unfurl the massive Thongdrel—a giant silk appliqué thangka (religious scroll) depicting Guru Rinpoche and other Buddhist deities. The Thongdrel is so large it covers the entire wall of the dzong. According to belief, simply viewing the Thongdrel cleanses one of sins and brings blessings. The atmosphere is deeply spiritual—thousands of people press forward to receive blessings, butter lamps flicker, incense smoke rises, and prayers fill the air. The Thongdrel remains displayed for only a few hours before being carefully rolled up and stored for another year. After witnessing this powerful ceremony and having breakfast, prepare for the Tiger's Nest hike. Drive to the trailhead and begin the ascent to Taktsang Goemba, the monastery clinging impossibly to a cliff 900 meters above the valley. The hike takes 5-6 hours round trip. The trail winds through pine forests adorned with prayer flags, gradually ascending with increasingly spectacular views. Reach the cafeteria viewpoint after about 1.5-2 hours for rest and photos. The final section involves steep stairs carved into the cliff. Inside the monastery, explore temples and meditation caves where Guru Rinpoche meditated in the 8th century. The spiritual energy is palpable. Descend in the afternoon, tired but fulfilled. Celebrate with a farewell dinner, reflecting on an incredible festival and cultural experience.", overnight: "Paro" },
            { day: 7, title: "Departure", description: "Your final morning in Bhutan. Depending on your flight time, you may have a few hours for last-minute activities. If departing in the afternoon, consider a morning visit to a local market or handicraft shops for final souvenir shopping. Look for traditional textiles, thangka paintings, prayer flags, or masks similar to those you saw at the festival. Your guide can help you find authentic items and navigate pricing. When it's time, transfer to Paro International Airport. The check-in process is relaxed and friendly. As you wait for your flight, reflect on the extraordinary week you've had—witnessing one of Bhutan's most important festivals, seeing sacred mask dances, experiencing the Thongdrel ceremony, hiking to Tiger's Nest, and immersing yourself in Bhutanese culture. The Paro Tshechu is more than just a festival; it's a window into Bhutan's living Buddhist culture, a celebration of community, and a spiritual experience. As your aircraft takes off and climbs through the mountain valleys, enjoy final views of the Paro valley, the dzong where you witnessed the festival, and the cliff where Tiger's Nest clings. You depart with memories of vibrant colors, sacred dances, warm smiles, and a deeper understanding of Bhutanese culture and spirituality. The festival's energy and Bhutan's magic will stay with you long after you leave. Tashi Delek!", overnight: "Departure" }
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
            { day: 1, title: "Arrival Paro - Thimphu", description: "Arrive at Paro International Airport, where you'll be greeted by your guide and driver. The drive to Thimphu, the capital city, takes about 1.5 hours and offers your first glimpse of Bhutan's stunning landscapes—winding roads flanked by mountains and rushing rivers. Upon arrival in Thimphu (2,320m), check into your hotel. In the evening, visit the National Memorial Chorten, a prominent landmark built in 1974 to honor the third King, Jigme Dorji Wangchuck. It is a hive of spiritual activity where you'll see hundreds of locals circumambulating the stupa and spinning prayer wheels. This introduction to Bhutanese devotion sets the tone for your festival experience. Dinner at a local restaurant to taste traditional Bhutanese dishes like Ema Datshi (chili and cheese stew).", overnight: "Thimphu" },
            { day: 2, title: "Thimphu Tsechu (Day 1)", description: "Today, immerse yourself in the opening festivities of the Thimphu Tsechu, held in the courtyard of the majestic Tashichho Dzong. This festival is one of the biggest in the country, drawing people from all over Bhutan dressed in their finest traditional kiras and ghos. Witness the spectacular cham (mask dances) performed by monks and lay practitioners. Each dance is a sacred ritual believed to invoke deities and subdue evil spirits. Your guide will explain the significance of dances like the 'Dance of the Lords of the Cremation Grounds' or the 'Dance of the Terrifying Deities.' The atmosphere is vibrant with the sounds of trumpets, cymbals, and drums. It's not just a religious event but a social gathering—a perfect opportunity to observe local culture and interactions.", overnight: "Thimphu" },
            { day: 3, title: "Thimphu Tsechu (Day 2) & Sightseeing", description: "Return to the festival grounds in the morning to witness different sets of dances and perhaps the Atsaras (clowns) who entertain the crowd with their antics while imparting religious messages. In the afternoon, take a break from the festival to explore more of Thimphu. Visit the massive Buddha Dordenma statue at Kuensel Phodrang, which offers panoramic views of the entire valley. Then, visit the Folk Heritage Museum to understand traditional Bhutanese lifestyles, or the Institute for Zorig Chusum (School of Arts and Crafts) where students learn the 13 traditional arts of Bhutan. Evening free to stroll through Thimphu's craft bazaar to shop for authentic souvenirs.", overnight: "Thimphu" },
            { day: 4, title: "Thimphu - Punakha", description: "Leave the capital and drive east towards Punakha. The route takes you over the Dochula Pass (3,100m), adorned with 108 stupas. On a clear day, enjoy breathtaking views of the Eastern Himalayas. Descend into the subtropical valley of Punakha (1,200m). Before reaching your hotel, take a pleasant 20-minute walk across rice paddies to Chimi Lhakhang, the 'Temple of Fertility' dedicated to the Divine Madman, Drukpa Kunley. This temple is famous for its phallus paintings and is visited by couples seeking blessings for children. The stories of the Divine Madman are humorous and fascinating, offering a unique insight into Bhutanese folklore.", overnight: "Punakha" },
            { day: 5, title: "Punakha - Paro", description: "Visit the magnificent Punakha Dzong, the 'Palace of Great Happiness,' situated at the confluence of the Pho Chhu and Mo Chhu rivers. It is widely considered the most beautiful dzong in Bhutan and is the winter residence of the Central Monastic Body. After exploring the dzong's intricate architecture and courtyards, begin the scenic drive back to Paro via Wangdue and Dochula. En route, stop at Simtokha Dzong, the oldest fortress in the kingdom. Arrive in Paro in the evening and check into your hotel. Prepare for tomorrow's hike to the Tiger's Nest.", overnight: "Paro" },
            { day: 6, title: "Tiger's Nest Hike", description: "The grand finale of your trip is the hike to Taktsang Goemba, iconic Tiger's Nest Monastery. Perched precariously on a sheer cliff 900 meters above the Paro Valley, it is the most sacred site in Bhutan. The hike takes about 4-5 hours round trip through pine forests draped with Spanish moss. Legend has it that Guru Rinpoche flew here on a tigress in the 8th century. Visiting the monastery is a spiritual journey. After the hike, enjoy a traditional hot stone bath at a farmhouse to soothe your tired muscles, followed by a farewell dinner with your guide.", overnight: "Paro" },
            { day: 7, title: "Departure", description: "After breakfast, transfer to Paro International Airport for your flight. Your guide will assist you with departure formalities. As you fly out, enjoy one last view of the Himalayan peaks, taking with you memories of the colorful festivals and the peaceful Kingdom of Bhutan.", overnight: "Departure" }
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
            { day: 1, title: "Arrival Paro - Thimphu", description: "Upon arrival at Paro International Airport, you will be met by your guide. Drive immediately to Thimphu (1.5 hours), following the Pa Chhu and Thimphu Chhu rivers. Thimphu is the modern capital of Bhutan but retains its cultural charm with no traffic lights and traditional architecture. In the evening, explore Thimphu's main street and visit the Local Crafts Bazaar to see fine bamboo weaving and jewelry. Overnight at your hotel in Thimphu.", overnight: "Thimphu" },
            { day: 2, title: "Thimphu - Punakha", description: "Start the day with a visit to the Kuensel Phodrang (Buddha Point) to see the massive 51-meter lush bronze Buddha statue. Then, depart for Punakha, crossing the Dochula Pass (3,100m). Stop to admire the 108 Druk Wangyal Chortens and the panoramic mountain views. Continue descending into the lush, green valley of Punakha. Visit Chimi Lhakhang, the fertility temple, accessible via a short walk through a local village and rice fields. Arrive in Punakha and prepare for the festival experience starting tomorrow.", overnight: "Punakha" },
            { day: 3, title: "Punakha Drubchen/Tsechu", description: "Today requires an early start to witness the Punakha Drubchen or Tsechu. The Drubchen is a unique festival hosting a dramatic recreation of the 17th-century battle against Tibetan forces. 'Pazaps' (local militia men) dressed in traditional battle gear perform glorious reenactments. If visiting during the Tsechu (festival days), you will see monks performing sacred mask dances in the courtyard of the majestic Punakha Dzong. The energy is electric, with locals celebrating their history and faith. Spend the full day immersing yourself in the festivities, photography, and cultural observation.", overnight: "Punakha" },
            { day: 4, title: "Punakha Tsechu (Day 2)", description: "Return to the Dzong for the morning session of the festival. Watch the unfolding of more mask dances and religious dramas. In the afternoon, escape the crowds for a scenic hike to Khamsum Yulley Namgyal Chorten. This hike takes about 1 hour uphill through pine forests and paddy fields. The chorten is a stunning example of Bhutanese architecture and offers commanding views of the Punakha valley and the winding Mo Chhu river below. It's a peaceful contrast to the bustling festival.", overnight: "Punakha" },
            { day: 5, title: "Punakha - Phobjikha", description: "Leave the subtropical warmth of Punakha and drive towards the Phobjikha Valley (3,000m), a vast U-shaped glacial valley. The drive is incredibly scenic. Phobjikha is a designated conservation area and the winter home of the rare and endangered Black-necked Cranes (November to March). Upon arrival, walk along the Gangtey Nature Trail (1.5 hours), a gentle path skirting the forest edge and offering beautiful views of the valley floor. Visit the Black-necked Crane Information Centre to learn about these wetlands.", overnight: "Phobjikha" },
            { day: 6, title: "Phobjikha - Paro", description: "Visit the 17th-century Gangtey Monastery (Gangtey Goemba) that overlooks the valley. It is the largest Nyingma monastery in western Bhutan. Then, settle in for the drive back to Paro (approx. 5 hours). You will cross the Lawala and Dochula passes again, offering a different perspective of the landscape. Arrive in Paro in the evening. If time permits, stroll through Paro town's old wooden shopfronts.", overnight: "Paro" },
            { day: 7, title: "Tiger's Nest Hike", description: "No trip to Bhutan is complete without the hike to Taktsang (Tiger's Nest). Start early to beat the heat and crowds. The trail is steep but rewarding, climbing through blue pine forests. The monastery clings to the side of a granite cliff 3,000 feet above the valley floor. Visit the sacred shrines where Guru Rinpoche meditated. The view from the top is spiritual and breathtaking. Descend for a late lunch at the cafeteria. In the evening, enjoy a traditional farewell dinner, perhaps accompanied by a cultural performance.", overnight: "Paro" },
            { day: 8, title: "Departure", description: "Your Bhutanese adventure concludes today. After breakfast, transfer to Paro International Airport. Bid farewell to your guide and driver who have become friends over the last week. Tashi Delek and safe travels!", overnight: "Departure" }
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
            { day: 1, title: "Arrival Paro", description: "Arrive at Paro International Airport where you will be met by your Amankora driver and guide. You will be whisked away to Amankora Paro, tucked into the pine forests of the Balakha village. The lodge architecture contrasts rustic elements with contemporary design. Upon arrival, enjoy a welcome tea and settling into your suite. In the evening, unwind with a traditional Bhutanese hot stone bath infused with artemisia herbs to relax your muscles and mind, followed by a personalized dinner menu specializing in local or western cuisine.", overnight: "Paro" },
            { day: 2, title: "Thimphu Lodge", description: "After breakfast, drive to Thimphu (1.5 hours) to the Amankora Thimphu lodge, modeled after a traditional Dzong fortress. Situated in a blue pine forest in the Motithang area, it offers a serene retreat. In the afternoon, visit the Buddha Dordenma, one of the largest Buddha statues in the world. Enjoy a private tour of the Textile Museum or simply disconnect in the lodge's peaceful library and living room, observing the monk prayers if scheduled.", overnight: "Thimphu" },
            { day: 3, title: "Punakha Lodge", description: "Depart for Punakha, crossing the Dochula Pass with its 108 chortens. Descend into the lush Punakha valley to reach Amankora Punakha. The lodge is unique, built around a traditional Bhutanese farmhouse belonging to the Queen Mother. Cross a suspension bridge to reach the lodge. In the afternoon, visit the majestic Punakha Dzong, the winter residence of the Je Khenpo (Chief Abbot). In the evening, learn the art of Bhutanese archery or cooking with the lodge chefs.", overnight: "Punakha" },
            { day: 4, title: "Gangtey Lodge", description: "Journey east to the Phobjikha Valley (Gangtey). The Amankora Gangtey lodge overlooks the valley floor and the 17th-century Gangtey Goemba. This valley is a protected nature reserve. Upon arrival, enjoy a walk through the village or visit the Black-necked Crane Centre. The lodge offers breathtaking views from the floor-to-ceiling windows, perfect for spotting wildlife or simply admiring the changing light over the valley.", overnight: "Phobjikha" },
            { day: 5, title: "Bumthang Lodge", description: "Drive further east to Bumthang, the spiritual heart of Bhutan. The journey is visually stunning, passing through ever-changing vegetation and landscapes. Amankora Bumthang is located adjacent to the Wandichholing Palace, the birthplace of Bhutan's monarchy. The lodge is surrounded by an apple orchard and pear trees. In the evening, participate in a butter lamp lighting ceremony at a local temple arranged exclusively for you.", overnight: "Bumthang" },
            { day: 6, title: "Bumthang Exploration", description: "Explore the sacred valley of Bumthang. Visit Jambay Lhakhang, one of the oldest temples in Bhutan, and Kurjey Lhakhang, where Guru Rinpoche left his body imprint. Walk across the suspension bridge to Tamshing Lhakhang. Enjoy a special bush lunch organized by the lodge in a scenic location. In the evening, visit the Red Panda Brewery and Swiss Cheese Factory for a taste of local produce.", overnight: "Bumthang" },
            { day: 7, title: "Return West", description: "Take a short domestic flight from Bathpalathang Airport back to Paro (weather permitting) to maximize your time, or enjoy the scenic drive back. Return to the comfort of Amankora Paro. Spend the afternoon exploring the National Museum of Bhutan or simply relaxing in the lodge's courtyard with a view of Drugyel Dzong.", overnight: "Paro" },
            { day: 8, title: "Haa Valley Excursion", description: "Embark on a day excursion to the remote Haa Valley via the Chele La Pass (3,988m), the highest motorable road in Bhutan. The pass offers unparalleled views of Mt. Jomolhari and Jichu Drake. Descend into Haa to visit Lhakhang Karpo (White Temple) and Lhakhang Nagpo (Black Temple). Enjoy a picnic lunch amidst the alpine scenery before returning to Paro.", overnight: "Paro" },
            { day: 9, title: "Tiger's Nest", description: "Your journey culminates with a private guided hike to the Tiger's Nest (Taktsang Goemba). Start early to enjoy the trail in solitude. Amankora arranges a special breakfast or lunch at the cafeteria or a picnic spot. Reaching the monastery is a deeply moving experience. Celebrate your last night with a private dining experience, perhaps in the lodge's potato shed or by a bonfire, reflecting on your journey across the Kingdom.", overnight: "Paro" },
            { day: 10, title: "Departure", description: "Your Amankora journey concludes. A private transfer takes you to Paro International Airport. Your team will ensure a smooth check-in for your flight home.", overnight: "Departure" }
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
            { day: 1, title: "Arrival - Thimphu Sky Palace", description: "Welcome to Bhutan. Upon arrival, you are driven to Six Senses Thimphu (1.5 hours). Called 'Palace in the Sky,' the lodge is perched high above the valley floor with commanding views of the Buddha Dordenma. The architecture emphasizes vertical lines and spaciousness. After check-in, enjoy a wellness screening at the spa or a gentle walk in the surrounding apple orchards. Dinner features organic ingredients sourced from the lodge gardens.", overnight: "Thimphu" },
            { day: 2, title: "Thimphu Discovery", description: "Start the day with yoga in the prayer pavilion. Then, hike to Talakha Monastery, a spectacular ridge-top goemba with 360-degree views of the Thimphu and Paro valleys. It's a peaceful spot often missed by tourists. Return for a late lunch. In the afternoon, visit the Pangri Zampa Lhakhang, a 16th-century monastic school for astrology. Schedule a private reading with an astrologer to learn what the stars hold for you.", overnight: "Thimphu" },
            { day: 3, title: "Thimphu to Punakha", description: "Depart for Punakha, crossing the Dochula Pass. Your destination is Six Senses Punakha, lovingly nicknamed the 'Flying Farmhouse.' The lodge cantilever over rice terraces, creating a sensation of floating. The warmer climate here allows for a swimming pool—take a dip upon arrival. In the evening, enjoy drinks by the campfire while looking out over the valley lights.", overnight: "Punakha" },
            { day: 4, title: "Punakha Valley", description: "Morning meditation by the riverside. Then, visit the architectural masterpiece, Punakha Dzong, and cross the suspension bridge. In the afternoon, you can opt for white water rafting or a gentle hike to Khamsum Yulley Namgyal Chorten. Dinner is a farm-to-table experience, showcasing the rich agricultural produce of the Punakha valley.", overnight: "Punakha" },
            { day: 5, title: "Punakha to Paro", description: "Drive back west to Paro. Six Senses Paro is known as 'Stone Ruins,' located directly next to the ruins of a 15th-century fortress, Chudrab Goemba. The lodge views are directly of the Paro valley and the ruins. It's an atmospheric setting that connects you deeply with Bhutan's history. Check in and enjoy a treatment at the spa, which uses local stones and herbs.", overnight: "Paro" },
            { day: 6, title: "Paro Ruins & Culture", description: "Explore the ruins next to the lodge with a private guide. Then, try your hand at archery, Bhutan's national sport, on the lodge's own range. Visit the National Museum of Bhutan (Ta Dzong) to see ancient thangkas and artifacts. In the evening, the lodge can arrange a private butter lamp lighting ceremony at the nearby temple, a spiritual moment of reflection.", overnight: "Paro" },
            { day: 7, title: "Tiger's Nest", description: "Embark on the hike to Tiger's Nest (Taktsang). Six Senses provides a supportive guide and a delicious packed lunch. You can take your time ascending, enjoying the pine forests. Upon reaching the top, visit the main temples. On your return, stop at Kyichu Lhakhang, one of the oldest temples. Tonight, enjoy a Royal Bhutanese Menu feast to celebrate the end of your journey.", overnight: "Paro" },
            { day: 8, title: "Departure", description: "Transfer to Paro terminal. The Six Senses team bids you farewell as you board your flight, leaving with a renewed sense of well-being and happiness.", overnight: "Departure" }
        ]
    },

    {
        id: "le-meridien-escape",
        title: "Le Meridien Escape",
        duration: "8 Days / 7 Nights",
        category: "Luxury",
        price: "$4,500",
        image: "/assets/luxury/lee.png",
        detailImage: "/assets/luxury/lee1.png",
        description: "Experience chic modern comfort in the heart of the Himalayas with this expanded 8-day journey. Split your stay between the sophisticated Le Méridien Thimphu and the serene Le Méridien Paro Riverfront. This itinerary blends contemporary luxury with deep cultural immersion, featuring exclusive excursions to Haa Valley, private museum visits, and gourmet culinary experiences.",
        featured: true,
        highlights: [
            "Stay at Le Méridien Thimphu & Paro",
            "Day excursion to the remote Haa Valley",
            "Riverfront dining at Paro",
            "Private cultural performances",
            "Explore hidden city gems in Thimphu",
            "Relaxing spa treatments at Explore Spa"
        ],
        inclusions: [
            "Luxury accommodation at Le Méridien",
            "Daily buffet breakfast & dinner",
            "Private SUV transportation",
            "English-speaking licensed guide",
            "All museum and permit fees",
            "One complimentary spa treatment"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival Paro - Transfer to Thimphu",
                description: "Your Himalayan escape begins as you land at Paro International Airport, navigating one of the world's most dramatic approaches. Upon clearing immigration, you will be warmly welcomed by your private guide and chauffeur. Enjoy a comfortable 1-hour drive to Thimphu, the bustling capital city, passing the confluence of the Pa Chhu and Wang Chhu rivers. Arrive at Le Méridien Thimphu, located in the heart of the city near the main shopping district. This chic 5-star property blends Bhutanese architecture with modern design. After a smooth check-in, take some time to refresh in your spacious room or enjoy a swim in the indoor heated pool. In the evening, step out to explore the nearby craft bazaar where local artisans display their wares. Dinner is served at 'Latest Recipe,' the hotel's signature restaurant, offering a global buffet with a Bhutanese twist. Wrap up your first day with a cocktail at the latitude bar, acclimatizing to the mountain air.",
                overnight: "Thimphu"
            },
            {
                day: 2,
                title: "Thimphu: Culture & Heritage",
                description: "After a lavish breakfast, embark on a full day of cultural discovery in Thimphu. Start at the National Memorial Chorten, a daily place of worship for locals. Join the elderly devotees as they circumambulate the stupa, spinning prayer wheels and chanting mantras. Next, visit the massive Buddha Dordenma statue at Kuensel Phodrang. Standing at 51.5 meters, it offers panoramic views of the entire valley. Proceed to the Folk Heritage Museum, a restored traditional house that offers a glimpse into rural Bhutanese life from a century ago. For lunch, try an authentic Bhutanese set menu at a local heritage restaurant. In the afternoon, visit the sanctuary of the Takin, Bhutan's national animal, nestled in the pine forests of Motithang. End the day with a visit to the Tashichho Dzong, the seat of government, witnessing the traditional flag-lowering ceremony at sunset. Return to Le Méridien for a relaxing evening.",
                overnight: "Thimphu"
            },
            {
                day: 3,
                title: "Thimphu: Arts, Crafts & panoramic Hikes",
                description: "Dive deeper into Bhutan's artistic traditions today. Visit the Institute for Zorig Chusum, where students learn the 13 traditional arts and crafts of Bhutan. Watch them master painting, woodcarving, and embroidery. Then, head to the National Textile Museum to appreciate the intricate royal garments and weaving techniques. In the afternoon, drive north to the base of the Cheri Monastery. A scenic 45-minute hike through a forest filled with prayer flags leads you to this significant meditation center founded in 1620. It's a serene spot often frequented by mountain goats. Alternatively, you can opt for a lighter walk at the Royal Botanical Garden if you prefer. Return to Thimphu for some leisure time. You might want to indulge in a treatment at the hotel's Explore Spa or browse the boutique shops in the city center for high-quality cashmere and jewelry. Dinner at the hotel or a recommended restaurant in town.",
                overnight: "Thimphu"
            },
            {
                day: 4,
                title: "Thimphu to Paro: Scenic Drive & Riverfront Luxury",
                description: "Bid farewell to the capital and enjoy a scenic drive back towards Paro. Along the way, stop at the Tachog Lhakhang Bridge, an iron chain bridge built in the 15th century. It’s a perfect photo opportunity. Proceed to Paro and check into Le Méridien Paro, Riverfront. This stunning property sits right on the banks of the Paro River, offering breathtaking views of the Eastern Himalayas. The architecture is a modern interpretation of a Bhutanese Dzong. After settling in, enjoy a 'Sparkling' afternoon tea on the terrace overlooking the river. In the afternoon, visit the Rinpung Dzong (Fortress on a Heap of Jewels), famous for its beautiful wooden galleries and the scene of the 'Little Buddha' film. Walk down to the traditional wooden cantilever bridge. Return to the hotel to enjoy the sunset by the river warmth of the outdoor fire pits.",
                overnight: "Paro"
            },
            {
                day: 5,
                title: "Excursion to Haa Valley & Chele La Pass",
                description: "Prepare for a spectacular day trip to the Haa Valley. Drive up to the Chele La Pass, which at 3,988 meters is the highest motorable road in Bhutan. On a clear day, the views of Mt. Jomolhari and Jichu Drake are magnificent. Thousands of prayer flags flutter in the wind here, sending blessings across the land. Descend into the Haa Valley, a region only opened to tourism in 2002. It is known for its ancestral traditions and shamanistic rituals. Visit Lhakhang Karpo (White Temple) and Lhakhang Nagpo (Black Temple), nestled at the foothills of the three brother mountains. Enjoy a picnic lunch in the pristine alpine setting. This valley offers a quieter, more rustic experience compared to Paro and Thimphu. Drive back to Paro in the late afternoon, arriving in time for a relaxing soak in the hotel's pool or a massage at the spa.",
                overnight: "Paro"
            },
            {
                day: 6,
                title: "Paro Valley: Museums & Local Life",
                description: "Start your day with a visit to the National Museum of Bhutan, housed in the ancient Ta Dzong watchtower. The museum holds a fascinating collection of thangkas, festival masks, stamps, and natural history exhibits. It provides a comprehensive overview of Bhutanese culture. Afterward, visit the 7th-century Kyichu Lhakhang, one of the oldest and most sacred temples in the country. The temple complex is a haven of peace, with orange trees and elderly pilgrims spinning prayer wheels. For lunch, explore Paro town and try a local eatery. In the afternoon, you have the option to try your hand at archery, Bhutan's national sport, or visit a traditional farmhouse to see how locals live. You can even enjoy a traditional hot stone bath at the farmhouse (at an additional cost) for an authentic wellness experience. Return to Le Méridien Paro for a themed dinner at 'Bamboo Chic,' their Pan-Asian restaurant.",
                overnight: "Paro"
            },
            {
                day: 7,
                title: "The Ultimate Hike: Tiger's Nest Monastery",
                description: "Today is the highlight of your trip: the hike to Taktsang Goemba, widely known as the Tiger's Nest. Start early to beat the heat and crowds. The monastery clings to a cliff 900 meters above the valley floor. The hike takes about 2 to 3 hours uphill through beautiful pine forests. Legend says Guru Rinpoche flew here on a tigress to meditate. Halfway up, take a break at the cafeteria for tea and a stunning view of the monastery. Upon reaching the top, explore the sacred temples and caves. The spiritual energy and the views are unparalleled. After descending, your driver will take you back to the hotel to rest your weary legs. Treat yourself to a final spa treatment or simply relax by the river. For your farewell dinner, enjoy a special setup by the riverfront (weather permitting) or a private dining experience to celebrate the end of a memorable journey through the Kingdom of Happiness.",
                overnight: "Paro"
            },
            {
                day: 8,
                title: "Departure",
                description: "Enjoy a leisurely breakfast at the hotel, taking in the final views of the river and mountains. Depending on your flight time, you might have a few moments for last-minute souvenir shopping in Paro town. Your guide and driver will transfer you to Paro International Airport. As you board your flight, look back at the majestic peaks and carry with you the memories of the warm hospitality and the peaceful landscapes of Bhutan. Tashi Delek!",
                overnight: "Departure"
            }
        ]
    },
    {
        id: "pemako-thimphu",
        title: "Pemako Experience",
        duration: "8 Days / 7 Nights",
        category: "Luxury",
        price: "$5,200",
        image: "/assets/luxury/pemako1.png",
        detailImage: "/assets/luxury/pemako.png",
        description: "Immerse yourself in Bhutanese elegance with this 8-day luxury journey centered around the magnificent Pemako Thimphu. Known for its fusion of traditional dzong architecture and contemporary comfort, Pemako serves as your sanctuary while you explore the western valleys. This expanded itinerary includes an immersive stay in Thimphu, a cultural deep-dive in Punakha, and a spiritual finale in Paro, all while enjoying world-class hospitality, curated artistic experiences, and rejuvenating wellness therapies.",
        featured: true,
        highlights: [
            "Stay at the iconic Pemako Thimphu",
            "Private audience with a monk or historian",
            "Luxury camping or resort stay in Punakha",
            "Exclusive art and textile workshops",
            "Helicopter sightseeing option (add-on)",
            "Seven-course tasting menus"
        ],
        inclusions: [
            "Luxury Suite at Pemako Thimphu & Partner Hotels",
            "Private Guide & Luxury Chauffeur Service",
            "All Gourmet Meals & Non-alcoholic Beverages",
            "Spa Credit & Welcome Amenities",
            "Daily Housekeeping & Turndown Service"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival & Welcome to the 'Hidden Capital'",
                description: "Touch down at Paro International Airport where the cool Himalayan breeze welcomes you. Your private chauffeur will be waiting on the tarmac (VIP service dependent) or at the arrival gate to whisk you away in a luxury SUV. Enjoy a scenic 1-hour drive following the river valley to Thimphu. As you enter the city, the imposing architecture of Pemako Thimphu rises to greet you. This architectural marvel looks like a fortress but feels like a palace. Upon arrival, receive a grand traditional welcome with horns and cymbals, followed by a refreshing welcome drink in the stunning atrium. Check into your luxury suite, featuring hand-painted murals and views of the city skyline. Spend the afternoon acclimatizing in comfort. You might choose to explore the hotel's beautifully manicured gardens or relax in the heated indoor pool. In the evening, enjoy a curated multi-course welcome dinner at the hotel's signature restaurant, highlighting organic ingredients sourced from the Himalayas, paired with fine wines.",
                overnight: "Thimphu"
            },
            {
                day: 2,
                title: "Thimphu: Arts, Astrology & Spirituality",
                description: "After a leisurely breakfast, immerse yourself in Bhutan's living culture. Start with a visit to the National Textile Museum to witness the intricate art of weaving—a skill highly revered in Bhutanese society. Continue to the Institute for Zorig Chusum (Painting School) to watch students master the 13 traditional arts, from clay sculpting to wood carving. Your guide can arrange a private interaction with a master instructor. For lunch, enjoy a private dining experience at a heritage restaurant in town. In the afternoon, return to Pemako for a unique 'Tea and Talk' session. We invite a local historian or a senior monk to join you for high tea, sharing insights into Buddhism, the concept of Gross National Happiness, and the changing face of Bhutan. This intimate conversation offers a depth of understanding that goes beyond standard sightseeing. Spend the evening at leisure, perhaps trying a signature treatment at The Lotus Spa, renowned for its holistic therapies.",
                overnight: "Thimphu"
            },
            {
                day: 3,
                title: "Thimphu: Nature & The Divine Madman's Trail",
                description: "Wake up early for a revitalizing drive to the northern end of the Thimphu valley. Hike to Cheri Monastery (Chagri Dorjeden), established in 1620 by Zhabdrung Ngawang Namgyal, the unifier of Bhutan. The trail crosses a traditional cantilever bridge and climbs steeply through a forest of oak and rhododendron, often filled with playing langur monkeys and mountain goats. The monastery is a major meditation center for retreat monks. Feel the profound silence and spiritual energy of this sacred space. After descending, enjoy a luxury riverside picnic lunch prepared by the hotel chefs. On your way back, stop at the Pangri Zampa School of Astrology to have your fortune read by a monk (optional). In the evening, verify out the local craft bazaar for high-quality souvenirs such as hand-woven textiles, thangkas, and brass statues. Dinner is at your leisure, with recommendations for the best local spots provided by your concierge.",
                overnight: "Thimphu"
            },
            {
                day: 4,
                title: "Journey to Punakha: The Alpine Pass",
                description: "Depart Thimphu for the warmer, subtropical valley of Punakha. The drive takes you up to the Dochula Pass (3,100m). On a clear day, the 360-degree panoramic view of the snow-capped Eastern Himalayas is breathtaking. Visit the 108 Druk Wangyal Chortens, built to honor the fourth King. Descend through changing vegetation zones—from alpine pine forests to cactus and banana plants—into the lush Punakha valley. Check into your luxury accommodation in Punakha (Partner Hotel similar to Pemako standards). After refreshing, take a pleasant walk through the rice paddies to Chimi Lhakhang, the 'Temple of Fertility' dedicated to the Divine Madman (Lama Drukpa Kunley). The walk takes you through the charming village of Sopsokha, known for its phallus paintings. The temple is a pilgrimage site for childless couples. In the evening, relax by the riverside or enjoy a campfire dinner under the stars.",
                overnight: "Punakha"
            },
            {
                day: 5,
                title: "Punakha: Fortress of Great Happiness",
                description: "Begin your day with the sounds of the river. Visit the magnificent Punakha Dzong, the 'Palace of Great Happiness.' Built in 1637 at the confluence of the Pho Chhu and Mo Chhu rivers, it is considered the most beautiful dzong in Bhutan. It serves as the winter residence of the central monastic body. Explore the intricate courtyards and the Kuenrey (assembly hall) with its massive statues. Afterward, walk across the longest suspension bridge in Bhutan, adorned with prayer flags, for a bit of adventure and stunning views. For lunch, enjoy a farmhouse experience where you can taste local delicacies like 'Ema Datshi' (chili cheese) geared to your spice tolerance. In the afternoon, hike to the Khamsum Yulley Namgyal Chorten, a spectacular temple on a ridge overlooking the valley. The view from the top is one of the best in the country. Return to your hotel for a relaxing evening.",
                overnight: "Punakha"
            },
            {
                day: 6,
                title: "Punakha to Paro: The Return Journey",
                description: "Drive back west to Paro, crossing the Dochula Pass once more. This second crossing gives you another chance to spot the high peaks if the weather was cloudy before. Stop at the Royal Botanical Park at Lamperi for a short nature walk if interested. Proceed to Paro and check into your luxury hotel (Partner Luxury Hotel). Paro valley is home to many of Bhutan's oldest temples and monasteries. In the afternoon, visit the 7th-century Kyichu Lhakhang, one of the 108 temples built by the Tibetan King Songtsen Gampo. It is a place of deep peace and history. You might also visit the Dungtse Lhakhang, a unique temple built in the shape of a chorten to subdue a demoness. In the evening, stroll through Paro town's main street, lined with traditional wooden buildings housing shops and cafes. Enjoy a dinner featuring international cuisine at your hotel.",
                overnight: "Paro"
            },
            {
                day: 7,
                title: "Paro: Tiger's Nest Pilgrimage",
                description: "Your journey culminates with the hike to Taktsang Goemba, the legendary Tiger's Nest Monastery. This is Bhutan's most iconic landmark, clinging to a sheer cliff face 900 meters above the valley. Start early to enjoy the cool morning air. The trail winds through pine forests draped in Spanish moss. Stop at the cafeteria for tea and a view of the monastery. Continue climbing to the viewpoint and then descend the steps to the waterfall before the final ascent to the entrance. Inside, visit the sacred shrines where Guru Rinpoche meditated. The sense of achievement and spiritual energy is profound. After the hike, treat yourself to a traditional hot stone bath at a local farmhouse or your hotel spa to soothe your muscles. The heated river stones release minerals that are excellent for relaxation. Enjoy a farewell gala dinner with cultural performances to celebrate your journey.",
                overnight: "Paro"
            },
            {
                day: 8,
                title: "Departure",
                description: "Wake up to your final morning in the Kingdom of Bhutan. Enjoy a leisurely breakfast with views of the mountains. Your guide and chauffeur will transfer you to Paro International Airport for your flight. As the plane takes off and banks over the valley, you'll have one last view of the Dzong and the Tiger's Nest. You leave with memories of a hidden kingdom, warm smiles, and a sense of inner peace. Tashi Delek and safe travels!",
                overnight: "Departure"
            }
        ]
    },
    {
        id: "gangtey-lodge-retreat",
        title: "Gangtey Lodge Retreat",
        duration: "8 Days / 7 Nights",
        category: "Luxury",
        price: "$6,800",
        image: "/assets/luxury/gantey.png", // Placeholder or use generic luxury image if not available
        detailImage: "/assets/luxury/gantey1.png",
        description: "Disconnect to reconnect with this exclusive 8-day retreat centered around the award-winning Gangtey Lodge. Nestled in the Phobjikha Valley, this tour offers a profound sense of peace and isolation. Combine the rustic luxury of Gangtey with stays in Thimphu and Paro for a complete Bhutanese experience, featuring spiritual immersions, nature hikes, farm-to-table dining, and the famous traditional hot stone baths.",
        featured: true,
        highlights: [
            "3-night immersive stay at Gangtey Lodge",
            "Morning prayers with monks at Gangtey Monastery",
            "Private nature trails and bird watching",
            "Signature Hot Stone Bath experience",
            "Traditional farmhouse dinner",
            "Private hike to Tiger's Nest"
        ],
        inclusions: [
            "Luxury accommodation (Gangtey Lodge & 5-star hotels)",
            "All gourmet meals and beverages",
            "Private 4WD Land Cruiser",
            "Senior licensed guide",
            "One complimentary spa treatment",
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival Paro & Transfer to Thimphu",
                description: "Upon arrival at Paro International Airport, you will be greeted by your personal guide and chauffeur with a traditional khada welcome. Drive to Thimphu, the capital city (1.5 hours), following the winding Pa Chhu and Wang Chhu rivers. Check into your luxury hotel (e.g., Le Meridien Thimphu or Taj Tashi). In the afternoon, visit the National Memorial Chorten, a focal point of daily worship for the locals. Later, drive to the Buddha Dordenma, a massive statue overlooking the valley. As the sun sets, the statue glows golden, offering a peaceful start to your trip. Dinner will be a welcome feast at the hotel, introducing you to the flavors of Bhutanese cuisine.",
                overnight: "Thimphu"
            },
            {
                day: 2,
                title: "Thimphu to Gangtey: Into the Clouds",
                description: "After breakfast, embark on a scenic 5-hour drive to the Phobjikha Valley. Stop at the Dochula Pass (3,100m) to admire the 108 memorial chortens and, weather permitting, the panoramic Himalayan range. Descend into the Wangdue valley and then climb up into the Black Mountains. You will arrive at Gangtey Lodge, a member of Small Luxury Hotels of the World. This lodge is designed to blend seamlessly with the traditional farmhouse architecture of the valley. From the main lodge, the view of the valley floor below is nothing short of spectacular. Enjoy a welcome drink by the massive stone fireplace. Settle into your suite, which features a freestanding bath with valley views. Dinner is served at the lodge's communal table or privately, featuring organic ingredients from the valley.",
                overnight: "Phobjikha"
            },
            {
                day: 3,
                title: "Phobjikha: Monasteries & Nature Trails",
                description: "Wake up to the mist rising from the valley floor. After a gourmet breakfast, walk up to the Gangtey Goemba, a 17th-century monastery that overlooks the entire valley. It is the largest Nyingmapa monastery in western Bhutan. Participate in a private prayer ceremony with the monks to receive blessings for your stay. Afterward, hike the Gangtey Nature Trail (1.5 hours), a gentle path that takes you through pine forests draped with lichen (Old Man's Beard) and past semitropical vegetation. The trail ends near the Black-necked Crane Information Centre. Visit the center to learn about these endangered majestic birds that migrate here from Tibet in winter (late Oct - Feb). Return to the lodge for lunch on the terrace. In the afternoon, try your hand at archery or darts in the lodge courtyard. Dinner at the lodge.",
                overnight: "Phobjikha"
            },
            {
                day: 4,
                title: "Phobjikha: Village Life & Wellness",
                description: "Today is dedicated to deeper immersion in the slow pace of valley life. Visit a local family in their traditional farmhouse to see how they live, cook, and farm. You can help churn butter or milk a cow if you wish. Enjoy a simple, authentic lunch with the family. In the afternoon, return to the lodge for their signature Dotsho (Hot Stone Bath). River stones are heated in a fire until red hot and then plunged into a wooden tub of water mixed with artemisia herbs. The sizzling stones release minerals that soothe aching muscles and relax the mind. Sip on a glass of wine or herbal tea as you soak with views of the valley. It is the ultimate wellness experience. Spend the evening stargazing from the terrace, as the lack of light pollution makes the night sky incredibly clear.",
                overnight: "Phobjikha"
            },
            {
                day: 5,
                title: "Gangtey to Punakha: The Warm Valley",
                description: "Bid farewell to the alpine highlands and descend to the subtropical valley of Punakha (3 hours). The change in climate and vegetation is dramatic. Check into your luxury resort in Punakha (e.g., Dhensa or Six Senses). Visit the majestic Punakha Dzong, the 'Palace of Great Happiness,' standing at the confluence of the Pho Chhu and Mo Chhu rivers. It is one of the most photogenic buildings in Bhutan, especially in spring when the jacaranda trees are in bloom. Walk across the longest suspension bridge nearby for thrills and views. Being at a lower altitude (1,200m), Punakha is warm and lush. Enjoy a walk through the rice paddies in the late afternoon. Dinner will be served al fresco at your hotel, taking advantage of the pleasant evening temperature.",
                overnight: "Punakha"
            },
            {
                day: 6,
                title: "Punakha to Paro: Chortens & Museums",
                description: "Drive back to Paro via the Dochula Pass. Stop for tea at the cafeteria on the pass to break the journey. Proceed to Paro and check into your hotel. In the afternoon, visit the National Museum of Bhutan (Ta Dzong). The cylindrical building houses a rare collection of Bhutanese art, masterworks, and bronze statues. It gives you a great context for the culture you have experienced. Walk down to Rinpung Dzong and cross the traditional cantilever bridge. Wander through Paro town's main street to pick up some unique souvenirs—handwoven kiras, prayer wheels, or cordialceps. In the evening, your guide can arrange a cultural show with masked dances and folk songs to celebrate your last nights in Bhutan. Dinner at a recommended local restaurant or your hotel.",
                overnight: "Paro"
            },
            {
                day: 7,
                title: "Paro: The Tiger's Nest Hike",
                description: "The finale of your journey is the hike to Taktsang Goemba (Tiger's Nest). Start early to avoid the midday sun. The trail climbs steadily through pine forests, offering glimpses of the monastery clinging to the cliffside. It takes about 2-3 hours to reach the top. The monastery is a sacred site where Guru Rinpoche is said to have meditated in the 8th century. The complex consists of four main temples and residential shelters designed by adapting to the rock fermentations. The view of the Paro valley from here is breathtaking. After visiting the temples, descend for a well-deserved lunch at the cafeteria or a picnic spot. Return to your hotel to rest. In the evening, enjoy a farewell dinner, reflecting on the memories of the mountains, the monasteries, and the kindness of the Bhutanese people.",
                overnight: "Paro"
            },
            {
                day: 8,
                title: "Departure",
                description: "After a final breakfast, transfer to Paro International Airport. Your guide and driver will assist you with checking in for your flight. As you depart, you take with you not just photos, but the spirit of 'Gross National Happiness' that permeates this unique Himalayan kingdom. Tashi Delek!",
                overnight: "Departure"
            }
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
            { day: 1, title: "Gynekha - Gur", description: "Your trek begins at the picturesque village of Gynekha (2,950m). The trail starts with a descent to the river before a gradual climb through a forest of massive oak trees and rhododendrons. The walk is a beautiful introduction to Bhutan's alpine flora. As you ascend, the vegetation changes to spruce and fir. Arrive at Gur pasture (3,290m), a yak herder's camp where wildflowers bloom in abundance in spring (April/May) and post-monsoon (Sep/Oct). Camp overnight under the starry Himalayan sky.", overnight: "Gur Camp" },
            { day: 2, title: "Gur - Labatama", description: "Today offers your first spectacular mountain views. Ascend a ridge to cross a pass at 4,240m. From here, weather permitting, you can see the majestic Kanchenjunga (8,586m) in Sikkim and potentially Mt. Everest. The trail then descends into the Labatama valley, dotted with yak herder huts. You will camp near Uthso Tsho (4,300m), a stunning turquoise alpine lake. This area is known for its many lakes, hence the name 'Thousand Lakes Trek.'", overnight: "Labatama Camp" },
            { day: 3, title: "Labatama Halt", description: "A dedicated day to explore the stunning lakes surrounding your campsite. Hike to Seto Tsho, Jaget Tsho, and other smaller lakes hidden in the ridges. It's a photographer's paradise and a perfect spot for trout fishing (permit required). You can also hike to a nearby peak for better panoramic views of the entire Bhutanese Himalayan range, including Jomolhari, Jichu Drake, and Masang Gang. Return to Labatama for a hearty camp dinner.", overnight: "Labatama Camp" },
            { day: 4, title: "Labatama - Panka", description: "The trail climbs along the western side of Dala Tsho lake to a saddle at 4,520m, the highest point of your trek. From the summit, the view of the Himalayan peaks is unparalleled. On a clear day, up to major peaks can be visible. Descend towards Panka (4,000m), passing more lakes and likely encountering yak herds grazing in the high meadows. Panka is a beautiful campsite with open views towards the Dagala range.", overnight: "Panka Camp" },
            { day: 5, title: "Panka - Talakha", description: "A day of scenic ridge walking. You will cross several passes, each offering a different perspective of the Thimphu valley far below and the mountains above. The trail leads through blue pine forests filled with birdsong. You will camp near Talakha Goemba (3,080m), a monastery perched on a ridge with a commanding view of Thimphu city twinkling at night. Visit the monastery in the evening to interact with the resident monks.", overnight: "Talakha Camp" },
            { day: 6, title: "Talakha - Thimphu", description: "Wake up to sunrise views over Thimphu. The final descent is steep but short, leading down to Chamgang village through apple orchards. Your vehicle awaits to drive you to Thimphu. Check into your hotel and enjoy a hot shower—a welcome luxury after five days of camping! In the evening, celebrate the completion of your trek with a traditional Bhutanese farewell dinner featuring cultural performances.", overnight: "Thimphu" }
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
            { day: 1, title: "Arrival Paro - Thimphu", description: "Arrive in Paro and transfer to Thimphu. In the evening, attend a special briefing on the Trans Bhutan Trail. This historic trail was used for centuries by pilgrims, messengers, and armies, connecting the east and west of Bhutan. Walking it is walking through history. Overnight at a hotel in Thimphu.", overnight: "Thimphu" },
            { day: 2, title: "Thimphu - Dochula - Punakha", description: "Drive to Punakha via the Dochula Pass. Visit Punakha Dzong, a key location in the trail's history as the old capital. Receive your 'Trail Passport' which you can stamp at various points. Enjoy a relaxed evening by the river preparing for the journey east.", overnight: "Punakha" },
            { day: 3, title: "Punakha - Chendebji", description: "Drive further east to Chendebji (4-5 hours), passing through Wangdue Phodrang. Stop at the Pele La Pass (3,420m) which traditionally divided western and central Bhutan. Arrive at Chendebji Chorten, a Nepalese-style stupa built in the 18th century. Camp overnight near the Chorten, soaking in the historical atmosphere.", overnight: "Chendebji" },
            { day: 4, title: "Trek: Chendebji to Tshangkha", description: "Begin your first section of the Trans Bhutan Trail walk. The trail meanders through lush temperate forests of hemlock and fir. Pass through the small village of Chendebji and interact with locals who have lived along this trade route for generations. The walk is moderate (approx 4-5 hours). Arrive at Tshangkha village for a homestay or camp experience, offering authentic insight into rural life.", overnight: "Tshangkha" },
            { day: 5, title: "Trek: Tshangkha to Trongsa", description: "A spectacular day of hiking. The trail climbs to a viewpoint that offers your first sighting of the massive Trongsa Dzong, the 'Fortress of the Vanguard of the Warriors.' The view of the Dzong stretching along the ridge is iconic. Descend to the Mangde Chhu river and cross the old cantilever bridge before the final climb to the Dzong. Visit the Royal Heritage Museum in the Watchtower (Ta Dzong) to learn about the Wangchuck dynasty. Overnight in a hotel in Trongsa.", overnight: "Trongsa" },
            { day: 6, title: "Trongsa - Bumthang", description: "Drive to Bumthang (2.5 hours), crossing the Yotong La Pass. Stop at the Chumey valley to see the famous 'Yathra' weavers. Arrive in Jakar, Bumthang. visit the Jambay Lhakhang and Kurjey Lhakhang. Bumthang is a valley of myths and legends, and the trail here connects many sacred sites.", overnight: "Bumthang" },
            { day: 7, title: "Bumthang Valley Hike", description: "Walk a section of the trail within the Bumthang valley (Babadishong to Pema Choling). This pleasant walk takes you through pine forests and past the Swiss Farm area. Visit Mebar Tsho (The Burning Lake), a sacred pilgrimage site. Enjoy a traditional Bumthang buckwheat lunch at a local farmhouse.", overnight: "Bumthang" },
            { day: 8, title: "Bumthang - Phobjikha", description: "Begin the return journey west. Drive to the Phobjikha Valley. Visit the Gangtey Monastery. walk along the Gangtey Nature Trail, which overlaps with local feeder trails used by monks and villagers. Spend a peaceful night in this glacial valley.", overnight: "Phobjikha" },
            { day: 9, title: "Phobjikha - Paro", description: "Drive back to Paro (5-6 hours). En route, stop for lunch at Nobding or Wangdue. Arrive in Paro and check into your hotel. Use the evening to verify your gear for the Tiger's Nest hike tomorrow.", overnight: "Paro" },
            { day: 10, title: "Tiger's Nest Hike", description: "Conclude your Trans Bhutan Trail discovery with the ultimate pilgrimage: the hike to Taktsang (Tiger's Nest). Just as ancient pilgrims did, ascend the path to pay homage at this sacred site. Reflect on the kilometers you've covered and the history you've witnessed. Farewell dinner with traditional music and dance.", overnight: "Paro" },
            { day: 11, title: "Departure", description: "Transfer to Paro International Airport. Your trail journey ends here, but the connection to Bhutan's path will remain. Tashi Delek!", overnight: "Departure" }
        ]
    },
];
