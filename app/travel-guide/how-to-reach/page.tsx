import { TravelGuideDetail } from "@/components/TravelGuideDetail";

export default function HowToReachPage() {
  return (
    <TravelGuideDetail
      title="How to Reach Bhutan"
      subtitle="Your Journey to the Land of the Thunder Dragon"
      heroImage="/assets/home/footer.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           Bhutan, the Hidden Kingdom of the Himalayas, was once one of the most isolated nations on Earth. Today, while it remains an exclusive destination, reaching it is easier than ever. Whether you choose the breathtaking flight over the world’s highest peaks or an adventurous road trip through the lush southern foothills, the journey to Bhutan is an experience in itself.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">By Air: The Most Popular Route</h2>
            <p className="mb-4">
                Flying is the most convenient way to enter Bhutan. The country has only one international airport, located in <strong>Paro (PBH)</strong>, situated in a deep valley at an elevation of 2,200m (7,300ft).
            </p>
            <p className="mb-4">
                The flight into Paro is widely regarded as one of the most spectacular aviation experiences in the world. As you descend, you are treated to close-up views of Mount Everest, Kanchenjunga, Makalu, and other Himalayan giants.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">The Carriers</h3>
            <p className="mb-4">
                Only two airlines are permitted to fly into Bhutan:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Drukair (Royal Bhutan Airlines):</strong> The national flag carrier.</li>
                <li><strong>Bhutan Airlines (Tashi Air):</strong> The private airline of Bhutan.</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Connecting Hubs</h3>
            <p className="mb-4">
                You cannot fly directly to Bhutan from Europe, the Americas, or Australia. You must transit through one of the following Asian hubs:
            </p>
             <ul className="grid md:grid-cols-2 gap-4 mt-4">
                <li className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                    <span className="font-bold text-primary block text-lg">Bangkok (BKK)</span>
                    <span className="text-sm">Thailand - Daily flights (Most popular hub)</span>
                </li>
                <li className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                    <span className="font-bold text-primary block text-lg">Delhi (DEL)</span>
                    <span className="text-sm">India - Daily flights</span>
                </li>
                <li className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                    <span className="font-bold text-primary block text-lg">Kolkata (CCU)</span>
                    <span className="text-sm">India - Daily/Regular flights</span>
                </li>
                <li className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                    <span className="font-bold text-primary block text-lg">Kathmandu (KTM)</span>
                    <span className="text-sm">Nepal - Regular flights</span>
                </li>
                 <li className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                    <span className="font-bold text-primary block text-lg">Singapore (SIN)</span>
                    <span className="text-sm">Singapore - Twice weekly</span>
                </li>
                 <li className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                    <span className="font-bold text-primary block text-lg">Dhaka (DAC)</span>
                    <span className="text-sm">Bangladesh - Regular flights</span>
                </li>
            </ul>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">By Land: For the Adventurous</h2>
            <p className="mb-4">
                Entering Bhutan by land is a popular option for those touring the Indian states of West Bengal, Sikkim, or Assam. There are three official land border crossings open to tourists.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">1. Phuntsholing (West)</h3>
            <p className="mb-4">
                <strong>Connects with:</strong> Jaigaon, West Bengal, India.
                <br/>
                This is the main entry point for most overland travelers. It is approximately a 170km (6-hour) drive to Thimphu. The nearest Indian airport is Bagdogra (IXB), which is about a 4-hour drive away.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">2. Gelephu (Central)</h3>
            <p className="mb-4">
                 <strong>Connects with:</strong> Assam, India.
                 <br/>
                 Located in central-southern Bhutan, this is a quieter entry point. It connects to the Indian state of Assam (bongaigaon/Guwahati). It is ideal if you plan to explore the Zhemgang or Trongsa regions.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">3. Samdrup Jongkhar (East)</h3>
            <p className="mb-4">
                <strong>Connects with:</strong> Darranga, Assam, India.
                <br/>
                This is the gateway to Eastern Bhutan. It is approximately a 3-hour drive from Guwahati International Airport (GAU) in India. This route is perfect for travelers who want to traverse Bhutan from East to West, exiting at Paro.
            </p>
        </div>

        <div className="bg-zinc-100 dark:bg-zinc-800 p-8 rounded-2xl mt-12">
            <h2 className="text-2xl font-bold mb-4">Important Travel Tips</h2>
            <ul className="list-disc pl-6 space-y-3">
                <li><strong>Baggage:</strong> If you are flying via India on separate tickets (e.g., British Airways to Delhi, then Drukair to Paro), your baggage will NOT be checked through. You must clear immigration in India, collect bags, and check in again. An Indian Visa is required for this. Bangkok is more seamless for baggage transfers.</li>
                <li><strong>Scheduling:</strong> Flights into Paro are visual flight rules (VFR) only, meaning they depend on good visibility. Delays are possible during the monsoon. Always keep a buffer day.</li>
                <li><strong>Indian Travelers:</strong> Indian nationals can fly directly or enter via road with a Permit. A passport or Voter ID is required.</li>
            </ul>
        </div>
      </div>
    </TravelGuideDetail>
  );
}
