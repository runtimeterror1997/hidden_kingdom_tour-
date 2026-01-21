import { TravelGuideDetail } from "@/components/TravelGuideDetail";

export default function HealthPage() {
  return (
    <TravelGuideDetail
      title="Health Precautions"
      subtitle="Ensuring a Safe and Healthy Highland Journey"
      heroImage="/assets/home/health1.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           Bhutan is generally a very safe and healthy country for travelers. There are no mandatory immunizations for entry (unless arriving from a yellow fever zone). However, the Kingdom's unique geography—specifically its high altitude and remote terrain—requires some common-sense precautions to ensure your adventure remains uninterrupted.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">1. Altitude Sickness (AMS)</h2>
            <p className="mb-4">
                The single most important health consideration in Bhutan is the altitude. Paro (2,200m) and Thimphu (2,300m) are high enough for some people to feel the effects, while passes like Dochula (3,100m) or trekking routes go much higher.
            </p>
            <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h4 className="font-bold mb-2">Symptoms & Management:</h4>
                <p className="text-sm mb-3">Symptoms include headache, nausea, dizziness, and fatigue. The best medicine is <strong>hydration</strong> and <strong>acclimatization</strong>.</p>
                <ul className="list-disc pl-6 text-sm space-y-2">
                    <li>Drink at least 3-4 liters of water daily.</li>
                    <li>Avoid alcohol for the first 48 hours.</li>
                    <li>Ascend slowly. Our itineraries are designed to help you acclimatize by spending the first few days at moderate altitudes.</li>
                    <li>Consult your doctor about bringing <em>Acetazolamide (Diamox)</em>.</li>
                </ul>
            </div>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">2. Food and Water Safety</h2>
            <p className="mb-4">
                While Bhutanese food is fresh and organic, your stomach may not be used to local bacteria or the abundance of chili!
            </p>
            <ul className="list-disc pl-6 space-y-3">
                <li><strong>Water:</strong> Never drink tap water. Bottled water is readily available everywhere and is provided for free by your guide. Use bottled water even for brushing teeth in remote areas.</li>
                <li><strong>Spiciness:</strong> Bhutanese love chili. If you have a sensitive stomach, always inform your guide or wait staff so they can prepare a milder version for you.</li>
                <li><strong>Hygiene:</strong> Use hand sanitizer regularly, especially before meals. Our partner restaurants are vetted for high hygiene standards.</li>
            </ul>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">3. Vaccinations & Pests</h2>
            <p className="mb-4">
                We recommend being up-to-date with routine vaccinations (Tetanus, Typhoid, Hepatitis A).
            </p>
            <p className="mb-4">
                <strong>Malaria:</strong> There is almost no risk of malaria in the tourist areas of Thimphu, Paro, or Bumthang. If you are traveling to the southern border towns (Gelephu or Samdrup Jongkhar), consult your doctor about prophylaxis.
            </p>
            <p className="mb-4">
                <strong>Dogs:</strong> Bhutan has many stray dogs (which are generally friendly and well-cared for). However, do not pet them as rabies is present in Asia. If bitten, seek medical attention immediately.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">4. Motion Sickness</h2>
            <p className="mb-4">
                Bhutanese roads are famously winding. Crossing a mountain pass involves hundreds of hairpin turns. If you are prone to motion sickness, bring your preferred medication. Sitting in the front of the car often helps.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Medical Facilities</h2>
            <p className="mb-4">
                The <strong>Jigme Dorji Wangchuck National Referral Hospital</strong> in Thimphu is the main tertiary hospital. Basic healthcare is available in all district towns. In case of emergency, tourists receive free healthcare, but specialized treatments or evacuations are costly.
            </p>
            <p className="mb-4 font-bold text-red-600">
                You MUST have comprehensive travel insurance that covers emergency medical evacuation by helicopter.
            </p>
        </div>
      </div>
    </TravelGuideDetail>
  );
}
