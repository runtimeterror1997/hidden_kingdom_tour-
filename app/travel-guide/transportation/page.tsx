import { TravelGuideDetail } from "@/components/TravelGuideDetail";

export default function TransportationPage() {
  return (
    <TravelGuideDetail
      title="Transportation in Bhutan"
      subtitle="Navigating the Dragon's Landscape"
      heroImage="/assets/home/transpo.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           There are no railways or metro systems in Bhutan. The rugged topography of the Himalayas means that the pulse of the country beats along its winding roads. Traveling through Bhutan is a lesson in patience and perspective—the journey between valleys is often as breathtaking as the destinations themselves.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Road Conditions</h2>
            <p className="mb-4">
                Bhutan has only one main highway, the <strong>East-West Highway</strong> (widely known as the Lateral Road). It connects Phuntsholing in the west to Samdrup Jongkhar in the east. 
            </p>
            <p className="mb-4">
                The roads are narrow and feature frequent hairpin turns as they climb and descend mountain passes. While the main highway is paved, construction and landslides (especially during the monsoon) can lead to unpaved sections and delays. 
            </p>
            <p className="mb-4 font-bold">
                Expect an average speed of 30-40 km/h. Distance in Bhutan is measured in hours, not kilometers.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Your Private Vehicle</h2>
            <p className="mb-4">
                As part of your tour package with <strong>OASIS Tours and Treks</strong>, you will have a private vehicle and professional driver for the duration of your stay.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-xl text-center">
                    <h4 className="font-bold text-primary">SUVs (2-3 Pax)</h4>
                    <p className="text-xs mt-2 text-zinc-500">Typically Toyota Land Cruisers or Prados. Best for comfort on winding roads.</p>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-xl text-center">
                    <h4 className="font-bold text-primary">Minivans (4-8 Pax)</h4>
                    <p className="text-xs mt-2 text-zinc-500">Toyota Hiace/Highlife. Spacious and reliable for small groups.</p>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-xl text-center">
                    <h4 className="font-bold text-primary">Coaster Bus (10+ Pax)</h4>
                    <p className="text-xs mt-2 text-zinc-500">Toyota Coaster buses for larger groups, with dedicated luggage space.</p>
                </div>
            </div>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Bhutanese Driver</h2>
            <p className="mb-4">
                Bhutanese drivers are a special breed. Driving in the Himalayas requires immense focus, steady hands, and deep patience. Our drivers are highly experienced in navigating mountain passes in all weather conditions. They are also your companions, often doubling as extra pairs of eyes for spotting wildlife or finding the best coffee stop.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Air Travel (Domestic)</h2>
            <p className="mb-4">
                If you wish to save time, Druk Air operates domestic flights to two airports:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Bumthang (Bathyapalathang):</strong> In central Bhutan. This 35-minute flight from Paro saves you two days of driving.</li>
                <li><strong>Yonphula:</strong> In Eastern Bhutan (Tashigang). This 45-minute flight is spectacular but often subject to weather cancellations.</li>
            </ul>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Biking and Walking</h2>
            <p className="mb-4">
                <strong>Mountain Biking:</strong> Gaining popularity for the fit. We can arrange high-quality bikes for specific sections of your journey.
            </p>
            <p className="mb-4">
                <strong>Walking:</strong> Most city centers like Thimphu are very walkable. However, moving between towns is only feasible by vehicle.
            </p>
        </div>
      </div>
    </TravelGuideDetail>
  );
}
