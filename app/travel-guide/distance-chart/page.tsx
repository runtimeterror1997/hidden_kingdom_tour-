import { TravelGuideDetail } from "@/components/TravelGuideDetail";

export default function DistanceChartPage() {
  const distances = [
    { from: "Paro", to: "Thimphu", distance: "55", time: "1 hr 30 mins" },
    { from: "Thimphu", to: "Punakha", distance: "77", time: "3 hrs" },
    { from: "Punakha", to: "Wangdue", distance: "21", time: "45 mins" },
    { from: "Punakha", to: "Gangtey/Phobjikha", distance: "78", time: "3 hrs" },
    { from: "Thimphu", to: "Phuntsholing", distance: "176", time: "6 hrs" },
    { from: "Gangtey", to: "Trongsa", distance: "80", time: "3 hrs 30 mins" },
    { from: "Trongsa", to: "Bumthang", distance: "68", time: "2 hrs 30 mins" },
    { from: "Bumthang", to: "Mongar", distance: "193", time: "7-8 hrs" },
    { from: "Mongar", to: "Trashigang", distance: "91", time: "3 hrs 30 mins" },
    { from: "Trashigang", to: "Samdrup Jongkhar", distance: "180", time: "6 hrs 30 mins" },
  ];

  return (
    <TravelGuideDetail
      title="Bhutan Distance Chart"
      subtitle="Planning Your Travel Times Across the Kingdom"
      heroImage="/assets/home/punakha.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           In Bhutan, a distance of 100 kilometers is not the same as it is elsewhere. Due to the mountainous terrain and the winding nature of the roads, travel times are significantly longer than you might expect. This chart helps you plan your day-to-day journey and understand the pacing of your tour.
        </p>

        <div className="my-12 overflow-hidden rounded-2xl border border-zinc-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-zinc-50 dark:bg-zinc-800">
                        <th className="p-4 font-bold border-b border-zinc-200">From / To</th>
                        <th className="p-4 font-bold border-b border-zinc-200">Distance (KM)</th>
                        <th className="p-4 font-bold border-b border-zinc-200">Estimated Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {distances.map((item, index) => (
                        <tr key={index} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/50 transition-colors">
                            <td className="p-4 border-b border-zinc-100 dark:border-zinc-800">{item.from} — {item.to}</td>
                            <td className="p-4 border-b border-zinc-100 dark:border-zinc-800">{item.distance} km</td>
                            <td className="p-4 border-b border-zinc-100 dark:border-zinc-800 font-medium text-primary">{item.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <div className="bg-primary/5 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Important Notes on Travel Times:</h3>
            <ul className="list-disc pl-6 space-y-3 text-sm flex flex-col gap-2">
                <li><strong>Construction:</strong> The East-West highway is undergoing periodic widening/maintenance. Road blocks or one-way traffic can add 1-2 hours to the durations listed above.</li>
                <li><strong>Weather:</strong> During the monsoon (Jun-Aug) or heavy snow (Jan), travel times can increase due to fog or slippery surfaces.</li>
                <li><strong>Photography:</strong> The times listed are *net driving times*. Bhutan is too beautiful to drive through without stopping! Your tour will likely take longer as you stop for photos, tea, and local sights.</li>
                <li><strong>Motion Sickness:</strong> If you suffer from motion sickness, please inform your driver so they can drive slower and take more frequent breaks.</li>
            </ul>
        </div>
      </div>
    </TravelGuideDetail>
  );
}
