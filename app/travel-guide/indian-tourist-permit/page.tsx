import { TravelGuideDetail } from "@/components/TravelGuideDetail";

export default function IndianPermitPage() {
  return (
    <TravelGuideDetail
      title="Permits for Indian Travellers"
      subtitle="Guidelines for Regional Tourists"
      heroImage="/assets/home/punakhaa.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           Based on the long-standing friendship between Bhutan and India, Indian nationals enjoy a simplified entry process. You do not need a visa, but you do need an <strong>Entry Permit</strong> to visit Thimphu and Paro. To travel beyond these two districts to places like Punakha, Wangdue, or Bumthang, you will need a separate <strong>Route Permit</strong>.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Documents Required</h2>
            <p className="mb-4">
                To obtain an Entry Permit, you must produce ONE of the following valid documents:
            </p>
            <ul className="list-disc pl-6 space-y-3">
                <li><strong>Indian Passport:</strong> With minimum 6 months validity.</li>
                <li><strong>Voter Identity Card (VIC):</strong> Issued by the Election Commission of India.</li>
            </ul>
            <p className="mb-4 text-sm text-red-500 font-bold">
                Note: Aadhaar Cards and Pan Cards are NOT accepted for the Entry Permit.
            </p>
            <p className="mb-4">
                <strong>For Children (below 18):</strong> Birth Certificate or Passport is required. If traveling without parents, an affidavit from parents is needed.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">How to Apply</h2>
            <h3 className="text-xl font-bold mt-4 mb-2">Option 1: Online (Recommended)</h3>
            <p className="mb-4">
                We can apply for your permit online in advance. This saves you significant time at the immigration counter, especially during peak seasons when queues can last for hours.
            </p>
            
            <h3 className="text-xl font-bold mt-4 mb-2">Option 2: On Arrival</h3>
            <p className="mb-4">
                You can apply at the Immigration Office in Phuntsholing (for land entry) or at Paro International Airport.
                <br/>
                <em>Note: The immigration office in Phuntsholing is closed on weekends and Bhutanese government holidays. Plan your arrival accordingly.</em>
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Route Permits</h2>
            <p className="mb-4">
                The standard Entry Permit is valid only for <strong>Thimphu and Paro</strong>.
            </p>
            <p className="mb-4">
                If your itinerary includes Punakha, Phobjikha, Trongsa, or Bumthang, you need a "Special Area Permit" or "Route Permit". This is processed in Thimphu at the Department of Immigration on working days (Mon-Fri).
                <br/>
                <strong>Important:</strong> You must present your original Entry Permit to get the Route Permit.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">SDF for Indian Nationals</h2>
            <p className="mb-4">
                Indian nationals must pay a concessional Sustainable Development Fee (SDF) of <strong>INR 1,200 per person, per night</strong>. Children aged 6-12 years pay 50% (INR 600), and children under 5 are exempt.
            </p>
            <p className="mb-4">
                You must also stay in hotels that are certified by the Department of Tourism. Staying in non-certified budget hotels or homestays is not permitted for permit holders.
            </p>
        </div>
      </div>
    </TravelGuideDetail>
  );
}
