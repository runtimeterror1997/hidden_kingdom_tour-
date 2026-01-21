import { TravelGuideDetail } from "@/components/TravelGuideDetail";

export default function ImmigrationPage() {
  return (
    <TravelGuideDetail
      title="Immigration in Bhutan"
      subtitle="Procedures for a Seamless Arrival"
      heroImage="/assets/home/dzong.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           Entering Bhutan is a unique experience. Unlike many borders where chaos reigns, Bhutanese immigration is typically orderly, polite, and efficient. However, strict regulations are in place to preserve the country's culture and security. Understanding the process beforehand ensures a smooth start to your journey.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Arrival at Paro International Airport</h2>
            <p className="mb-4">
                Upon landing, you will walk across the tarmac to the terminal building, which resembles a temple more than an airport.
            </p>
            <ol className="list-decimal pl-6 space-y-4">
                <li><strong>Immigration Counters:</strong> Proceed to the immigration counters. There are separate queues for "International Tourists" and "Regional Tourists/Bhutanese".</li>
                <li><strong>Documents Required:</strong> You must present your original passport (valid for at least 6 months) and a copy of your <strong>e-Visa Clearance</strong> letter. Indian nationals can present their Permit or Voter ID.</li>
                <li><strong>Biometrics:</strong> The officer will take a digital photograph and fingerprint scans (biometrics).</li>
                <li><strong>Visa Stamping:</strong> Once verified, the actual visa will be stamped into your passport. The duration of the visa will match the dates on your clearance letter.</li>
            </ol>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Arrival by Land</h2>
            <p className="mb-4">
                If entering via Phuntsholing, Gelephu, or Samdrup Jongkhar:
            </p>
            <p className="mb-4">
                You must proceed to the Immigration Office at the border town. Your guide will assist you with this. The process is similar: document verification and biometrics. Note that the immigration offices at land borders operate during office hours (typically 9 AM to 5 PM BST), so plan your arrival accordingly.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Customs Regulations</h2>
            <p className="mb-4">
                After immigration and baggage collection, you will pass through customs. Bhutan has strict rules on what you can bring in.
            </p>
            <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl border-l-4 border-red-500 mt-4">
                <h4 className="font-bold text-lg mb-2 text-red-600">The "No Tobacco" Rule</h4>
                <p>Bhutan is the only country in the world where the sale of tobacco is banned. However, tourists are allowed to bring in tobacco for personal use, subject to a <strong>200% import duty</strong>. You must declare it at customs.</p>
                <p className="mt-2 text-sm"><strong>Allowance:</strong> 200 cigarettes OR 3 tins of pipe tobacco OR 30 cigars.</p>
            </div>
            
            <h3 className="text-xl font-bold mt-6 mb-2">Duty-Free Allowances</h3>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Alcohol:</strong> 1 liter of spirits or wine.</li>
                <li><strong>Perfume:</strong> 60 ml.</li>
                <li><strong>Currency:</strong> Cash up to USD 10,000 (or equivalent) does not need to be declared. Indian Rupee notes of denominations 500 and above are technically not legal tender, though enforcement varies. It is safer to carry 100 or 200 INR notes.</li>
            </ul>
             <h3 className="text-xl font-bold mt-6 mb-2">Prohibited Items</h3>
            <ul className="list-disc pl-6 space-y-2">
                <li>Narcotics and psychotropic drugs.</li>
                <li>Pornographic material.</li>
                <li>Antiques without a certificate.</li>
                <li>Endangered species or their parts.</li>
                <li>Drones (unless you have a prior permit from the Bhutan Civil Aviation Authority, which is difficult to obtain).</li>
            </ul>
        </div>
      </div>
    </TravelGuideDetail>
  );
}
