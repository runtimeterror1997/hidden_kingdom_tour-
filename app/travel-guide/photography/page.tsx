import { TravelGuideDetail } from "@/components/TravelGuideDetail";

export default function PhotographyPage() {
  return (
    <TravelGuideDetail
      title="Photography in Bhutan"
      subtitle="Capturing the Soul of the Hidden Kingdom"
      heroImage="/assets/home/scenic1.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           Bhutan is a photographer's dream. From the fluttering prayer flags against the snow-capped Himalayas to the intricate carvings on every window frame and the expressive faces of its people, every corner is a frame waiting to be captured. However, in Bhutan, photography is not just about aesthetics—it is about respect and ethics.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Golden Rules of Photography</h2>
            <div className="space-y-6">
                <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-100">
                    <h4 className="font-bold text-red-600 mb-2">1. Inside Temples and Dzongs</h4>
                    <p className="text-sm">Photography is strictly <strong>PROHIBITED</strong> inside the inner sanctum of any monastery, temple, or Dzong. This is to maintain the sanctity of these spiritual spaces. You are free to take photos in the courtyards and outside the buildings.</p>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl border border-zinc-200">
                    <h4 className="font-bold text-primary mb-2">2. Respecting People</h4>
                    <p className="text-sm">Bhutanese people are generally very welcoming. However, always ask for permission before taking a close-up portrait of an individual, especially monks or elders. A simple smile and a gesture with your camera are usually enough. If they say no, respect it with a bow.</p>
                </div>
                 <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl border border-zinc-200">
                    <h4 className="font-bold text-primary mb-2">3. Religious Ceremonies</h4>
                    <p className="text-sm">During festivals (Tshechus), photography is encouraged. However, do not block the view of the locals who have come for the spiritual blessing. Avoid using flash, as it can be distracting for the mask dancers.</p>
                </div>
            </div>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Drone Photography</h2>
            <p className="mb-4">
                The use of drones in Bhutan is strictly regulated. You cannot fly a drone in Bhutan without prior written permission from the <strong>Bhutan Civil Aviation Authority (BCAA)</strong>.
            </p>
            <p className="mb-4">
                Obtaining a permit is a long and difficult process, typically requiring the support of a government agency or a major media project. For the average tourist, drones are effectively banned to prevent noise pollution and privacy concerns.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Equipment Tips</h2>
            <ul className="list-disc pl-6 space-y-3">
                <li><strong>Wide Angle:</strong> Essential for capturing the massive scale of the Himalayan valleys and the towering walls of Dzongs.</li>
                <li><strong>Telephoto:</strong> Great for isolating architectural details from a distance and for capturing natural wildlife or birdlife.</li>
                <li><strong>Fast Primes:</strong> Useful for low-light conditions in courtyards or during early morning/late evening golden hours.</li>
                <li><strong>Storage:</strong> Bring more memory cards than you think you need. High-resolution photos of Bhutan's textures will fill up cards quickly!</li>
            </ul>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Best Locations for Photography</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dochula Pass:</strong> For the 108 Chortens and the panoramic view of the snow-capped peaks.</li>
                <li><strong>Tiger's Nest (Paro Taktsang):</strong> The iconic cliffside monastery (best light in the morning).</li>
                <li><strong>Phobjikha Valley:</strong> For the black-necked cranes and the vast, flat glacial valley.</li>
                <li><strong>Punakha Dzong:</strong> Arguably the most beautiful Dzong in Bhutan, especially in spring when the jacarandas are in bloom.</li>
            </ul>
        </div>
      </div>
    </TravelGuideDetail>
  );
}
