import { TravelGuideDetail } from "@/components/TravelGuideDetail";

export default function VisaPage() {
  return (
    <TravelGuideDetail
      title="Bhutan Visa Requirements"
      subtitle="Simplifying the Entry Process"
      heroImage="/assets/home/travel.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           With the exception of Indian, Bangladeshi, and Maldivian nationals, all visitors to Bhutan require a visa. Under the new tourism policy (post-2022), the process has been streamlined but remains strictly regulated to ensure high-value tourism.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The e-Visa Process</h2>
            <p className="mb-4">
                Visas are processed online by the Department of Immigration. As your tour operator, <strong>OASIS Tours and Treks</strong> will handle the entire application process on your behalf.
            </p>
            <ol className="list-decimal pl-6 space-y-4">
                <li><strong>Booking:</strong> You confirm your tour itinerary and pay the full tour payment + SDF (Sustainable Development Fee) + Visa Fee to us.</li>
                <li><strong>Application:</strong> We submit your passport copy, digital photo, and proof of travel insurance to the immigration system.</li>
                <li><strong>Approval:</strong> The visa is usually processed within 5-7 working days.</li>
                <li><strong>Clearance:</strong> Once approved, we will email you a <strong>Visa Clearance Letter</strong> (e-Visa). You must print this and carry it with you. You will need it to check in for your flight and at the immigration counter in Bhutan.</li>
            </ol>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Visa Cost and Validity</h2>
             <ul className="list-disc pl-6 space-y-3">
                <li><strong>Visa Fee:</strong> USD 40 per person (one-time fee).</li>
                <li><strong>Validity:</strong> The visa is valid for the exact duration of your planned trip. If you decide to extend your stay while in Bhutan, an extension can be processed in Thimphu for an additional fee.</li>
            </ul>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Requirements Checklist</h2>
            <p className="mb-4">To ensure a rejection-free application, please provide:</p>
            <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl border border-zinc-200">
                 <ul className="space-y-3">
                    <li className="flex gap-2">
                        <span className="text-green-500">✔</span>
                        <span><strong>Passport Scan:</strong> Clear color scan of the bio-page. Must be valid for at least 6 months from the date of departure from Bhutan.</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-green-500">✔</span>
                        <span><strong>Digital Photo:</strong> A recent passport-sized photo (white background, no glasses).</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-green-500">✔</span>
                        <span><strong>Travel Insurance:</strong> Mandatory. Must cover medical expenses and unexpected medical evacuation (e.g., helicopter rescue if trekking).</span>
                    </li>
                 </ul>
            </div>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Regional Tourists (India, Bangladesh, Maldives)</h2>
            <p className="mb-4">
                Nationals from these three countries <strong>do not require a visa</strong>. Instead, they require an <strong>Entry Permit</strong>.
            </p>
            <p className="mb-4">
                <strong>Cost:</strong> The permit itself is free, but the SDF (Sustainable Development Fee) of 1,200 INR per night (for Indians) must be paid.
            </p>
            <p className="mb-4">
                Permits can be applied for online in advance (recommended) or obtained upon arrival at the port of entry.
            </p>
        </div>
      </div>
    </TravelGuideDetail>
  );
}
