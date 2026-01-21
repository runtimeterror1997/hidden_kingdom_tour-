import { FlightDetail } from "@/components/FlightDetail";

export default function HeliBhutanPage() {
  return (
    <FlightDetail
      title="Heli Bhutan"
      subtitle="Exclusive Private Aviation"
      heroImage="/assets/home/heli_bhu.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           Heli Bhutan represents the new era of aviation in the Kingdom. Launched in 2025, it is Bhutan's first private helicopter company. Founded by visionary Bhutanese entrepreneurs in partnership with international investors from the US, Germany, and Canada, it brings a new level of luxury, flexibility, and availability to the skies of Bhutan.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">A New Choice for Travelers</h2>
            <p className="mb-4">
                Before the arrival of Heli Bhutan, helicopter services were the sole domain of the state. The entry of a private player has introduced competition, leading to better service options and availability for tourists.
            </p>
            <p className="mb-4">
                Heli Bhutan primarily focuses on high-end tourism. It understands that for the discerning traveler, time is the ultimate luxury. Their services are designed to whisk guests from the international airport directly to luxury lodges in remote valleys like Gangtey, Punakha, or Bumthang, bypassing the long and winding mountain roads.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Aircraft: Airbus H125</h2>
            <p className="mb-4">
                Heli Bhutan operates the <strong>Airbus H125</strong> (formerly AS350 B3e). This machine is legendary in the aviation world.
            </p>
            <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h4 className="font-bold text-lg mb-2">The King of the Mountains</h4>
                <p className="mb-2">The H125 holds the world record for the highest altitude landing and take-off, performed on Mount Everest at 8,848 meters. This makes it the undisputed leader for missions in the extreme high altitudes of the Bhutanese Himalayas.</p>
                <p>It is rugged, reliable, and versatile. While it can carry up to 5-6 passengers, it excels in carrying heavy loads, making it ideal for supporting high-altitude trekking expeditions or scientific research stations.</p>
            </div>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Services Offered</h2>
            <ul className="list-disc pl-6 space-y-3">
                <li><strong>Exclusive Scenic Tours:</strong> Customized flight paths that take you over hidden lakes and glaciers that are inaccessible by foot. Imagine having breakfast in Thimphu and lunch next to a glacial lake in Lunana.</li>
                <li><strong>Photography Charters:</strong> Pilots trained to fly specifically for photographers, finding the perfect angles and lighting for capturing the dramatic landscape.</li>
                <li><strong>Cultural Connections:</strong> Connecting the varied cultural festivals. One can witness the Paro Tshechu in the morning and fly to Bumthang for a local village festival in the afternoon.</li>
                <li><strong>Emergency Services:</strong> While primarily a tourism operator, Heli Bhutan also dedicates resources to search and rescue (SAR) operations, augmenting the national capacity to respond to emergencies.</li>
            </ul>
        </div>
        
        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Private Advantage</h2>
            <p className="mb-4">
                As a private company, Heli Bhutan prides itself on agility. Booking processes are streamlined, and requests for bespoke itineraries are handled with a "can-do" attitude. The pilots are often international veterans with thousands of hours of mountain flying experience, bringing global safety standards to local operations.
            </p>
             <p className="mb-4">
                The current tourist charter rate is competitively priced (approx. USD 3,000 per hour), making it an accessible indulgence for groups or families.
            </p>
        </div>
      </div>
    </FlightDetail>
  );
}
