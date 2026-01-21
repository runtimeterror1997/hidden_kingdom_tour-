import { FlightDetail } from "@/components/FlightDetail";

export default function HelicopterServicesPage() {
  return (
    <FlightDetail
      title="Royal Bhutan Helicopter Services"
      subtitle="Wings over the Himalayas"
      heroImage="/assets/home/heli.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           Established in 2015 as a dedicated state-owned enterprise, Royal Bhutan Helicopter Services (RBHSL) was created with a mandate to save lives and connect the unconnected. In a country where roads are winding and travel is time-consuming, the helicopter service revolutionized transport. Although operational management was merged with Druk Air in 2022, it continues to serve as a vital lifeline for the nation.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">A Vital Lifeline</h2>
            <p className="mb-4">
                The primary purpose of the helicopter service is not tourism, but public service.
            </p>
            <ul className="list-disc pl-6 space-y-3">
                <li><strong>Medical Evacuation (Medevac):</strong> This is the most critical function. The helicopters regularly airlift critically ill patients from remote villages that are days away from the nearest road, delivering them to the National Referral Hospital in Thimphu within hours. This service has saved countless lives of mothers in labor, accident victims, and the elderly.</li>
                <li><strong>Fire Fighting:</strong> Equipped with "Bambi Buckets," the helicopters are deployed to fight forest fires, which are a recurring threat in the dry winters. They can drop thousands of liters of water on inaccessible ridges.</li>
                <li><strong>Disaster Relief:</strong> During floods or earthquakes, they deliver food and medicine to stranded communities.</li>
            </ul>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Tourism and Charter Services</h2>
            <p className="mb-4">
                For the visitor, Royal Bhutan Helicopter Services offers an unparalleled way to experience the sheer scale of the Himalayas. Scenic flights provide bird's-eye views that are simply impossible to get from the ground.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">Jomolhari Scenic Tour</h4>
                    <p className="text-sm">A breathtaking flight from Paro to the base of Mount Jomolhari (7,326m). You fly over the ruins of Drukgyel Dzong and hover near the "Bride of Kanchenjunga."</p>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">The Snowman Trek Helper</h4>
                    <p className="text-sm">The Snowman Trek is the hardest trek in the world. Helicopters are often used to drop supplies for trekkers or to evacuate those suffering from altitude sickness.</p>
                </div>
                 <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">Cultural Tour</h4>
                    <p className="text-sm">Fly over the iconic Tiger's Nest Monastery, Punakha Dzong, and the Phobjikha Valley. See the changing landscapes from sub-tropical jungle to alpine peaks in a single hour.</p>
                </div>
            </div>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Aircraft: Airbus H130</h2>
            <p className="mb-4">
                The service operates the <strong>Airbus H130</strong> (formerly EC130 T2). This light utility helicopter is part of the Ecureuil family.
            </p>
            <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h4 className="font-bold text-lg mb-2">Why the H130?</h4>
                <p className="mb-2"><strong>Panorama:</strong> The H130 features a spacious cabin with large wrap-around windows, ensuring that every passenger (up to 6) has a window view. This is perfect for scenic flights.</p>
                <p className="mb-2"><strong>Quiet:</strong> It uses a Fenestron tail rotor which makes it the quietest helicopter in its class. This is crucial for flying over sensitive national parks and wildlife sanctuaries without disturbing the animals.</p>
                <p><strong>Power:</strong> It is optimized for high-altitude performance and hot conditions, making it one of the few machines capable of landing in the thin air of the Bhutanese highlands.</p>
            </div>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Booking a Charter</h2>
            <p className="mb-4">
                Flights can be chartered for point-to-point transfers (e.g., Paro to Bumthang in 35 minutes instead of 9 hours driving). While costly, it maximizes time for visitors on a tight schedule.
            </p>
            <p className="mb-4 text-zinc-500 italic">
                Note: All flights are subject to weather conditions. Even the most advanced helicopter cannot fly in the dense clouds of the monsoon.
            </p>
        </div>
      </div>
    </FlightDetail>
  );
}
