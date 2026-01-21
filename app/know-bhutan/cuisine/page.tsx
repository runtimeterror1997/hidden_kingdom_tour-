import { KnowBhutanDetail } from "@/components/KnowBhutanDetail";

export default function CuisinePage() {
  return (
    <KnowBhutanDetail
      title="Cuisine of Bhutan"
      subtitle="A Fiery Affair: The Kingdom of Chili and Cheese"
      heroImage="/assets/home/cusine.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           If there is one thing that defines Bhutanese cuisine, it is heat. In Bhutan, chili is not a condiment or a spice; it is a vegetable. A meal without chili is considered unworthy of the name. Combined with the Bhutanese love for cheese (datshi), the food is rich, spicy, and incredibly warming—perfect for the cold Himalayan climate.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The National Dish: Ema Datshi</h2>
            <p className="mb-4">
                You cannot leave Bhutan without eating <strong>Ema Datshi</strong>. The name literally translates to "Chili" (Ema) and "Cheese" (Datshi).
            </p>
            <p className="mb-4">
                It is a spicy stew made by boiling chili peppers (which can be fresh green, dried red, or white) with local cheese, oil, and sometimes onions and tomatoes. The cheese is typically a farmhouse cheese made from cow or yak milk, which doesn't dissolve completely but forms a rich, curd-like sauce.
            </p>
            <p className="mb-4">
                <em><strong>Tip for travelers:</strong> If you are ordering this, be prepared! It is very spicy. You can ask for a "white" version which is milder, but still carries a kick.</em>
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Variations of Datshi</h3>
            <p className="mb-4">
                The Datshi (cheese sauce) is the base for many other popular dishes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Kewa Datshi:</strong> Potato (Kewa) and cheese. This is much milder than Ema Datshi and is a favorite among tourists.</li>
                <li><strong>Shamu Datshi:</strong> Mushroom (Shamu) and cheese. Bhutan has excellent local mushrooms, including the prized Matsutake.</li>
            </ul>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Staple: Red Rice</h2>
            <p className="mb-4">
                The foundation of every meal is <strong>Bhutanese Red Rice</strong>. Grown in the high-altitude paddies of Paro and Punakha, it is a semi-milled rice that retains its reddish-brown bran.
            </p>
            <p className="mb-4">
                It has a nutty flavor and a firm texture, somewhat similar to brown rice but softer. It is highly nutritious, rich in manganese and antioxidants. It pairs perfectly with the creamy cheese sauces of Bhutanese curries. In the east, where rice is harder to grow, maize (Kharang) is the staple.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Meat Dishes</h2>
            <p className="mb-4">
                Although many Bhutanese are observant Buddhists and avoid killing animals, meat is widely consumed (often imported or butchered by non-Buddhists). Dried meat is particularly popular as a way to preserve food for winter.
            </p>
            <ul className="list-disc pl-6 space-y-3">
                <li><strong>Phaksha Paa:</strong> Pork cooked with spicy red chilies and radishes or spinach. The pork is often dried first (Sikam) and has a distinct, smoky flavor.</li>
                <li><strong>Sikam Paa:</strong> Sun-dried pork belly, fried with dried chilies. It is a high-fat, high-energy dish loved by locals.</li>
                <li><strong>Jasha Maru:</strong> Spicy minced chicken stew with ginger, garlic, and tomato. It is lighter than the pork dishes and very flavorful.</li>
                <li><strong>Momos:</strong> Tibetal-style dumplings are ubiquitous. They are filled with minced pork, beef, or cheese and cabbage. They are always served with a fiery chili paste called <em>Ezay</em>.</li>
            </ul>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Beverages</h2>
            <p className="mb-4">
                <strong>Suja (Butter Tea):</strong> A savory tea made by churning tea leaves, water, and salt with yak butter (or cow butter). It looks like soup and tastes salty and creamy. It is an acquired taste for foreigners but essential for hydration in the high altitude.
            </p>
            <p className="mb-4">
                <strong>Ngaja (Sweet Tea):</strong> Milk tea with sugar, similar to Indian chai, is also very popular.
            </p>
            <p className="mb-4">
                <strong>Ara:</strong> The local moonshine. It is a traditional alcoholic beverage made from fermented rice, maize, millet, or wheat. It is often served warm, sometimes with a poached egg or butter fried in it (Ara Kay)!
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Doma (Areca Nut)</h2>
            <p className="mb-4">
                You will notice many Bhutanese with red-stained lips and teeth. This is from chewing <strong>Doma</strong>. It consists of an areca nut wrapped in a betel leaf with a smear of lime paste.
            </p>
            <p className="mb-4">
                Doma is a social lubricant, offered to guests and friends as a gesture of goodwill. It produces a mild buzz and a sensation of heat. However, it is strong and distinct—first-timers should proceed with caution!
            </p>
        </div>
      </div>
    </KnowBhutanDetail>
  );
}
