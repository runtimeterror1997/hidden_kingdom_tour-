import { TravelGuideDetail } from "@/components/TravelGuideDetail";

export default function SDFPage() {
  return (
    <TravelGuideDetail
      title="Sustainable Development Fee (SDF)"
      subtitle="The Foundation of High-Value, Low-Volume Tourism"
      heroImage="/assets/home/sdf.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           The Sustainable Development Fee (SDF) is the cornerstone of Bhutan's unique tourism policy. It is a mandatory contribution paid by every visitor to the Kingdom, used to fund the nation's social and environmental welfare. In a world of over-tourism, the SDF ensures that Bhutan remains a pristine sanctuary for generations to come.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">What is the SDF?</h2>
            <p className="mb-4">
                Unlike a traditional tourist tax that goes into a general coffer, the SDF is earmarked specifically for projects that align with the pillars of Gross National Happiness. It is intended to mitigate the environmental impact of tourism and to ensure that the people of Bhutan benefit directly from your visit.
            </p>
            <p className="mb-4">
                The fee was significantly revised in September 2022 as part of the country's "Brand Bhutan" relaunch, emphasizing quality over quantity.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Current Rates</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-6">
                 <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                    <h3 className="text-2xl font-bold text-primary mb-4 text-center">International Tourists</h3>
                    <p className="text-4xl font-serif font-black text-center mb-2">USD 100</p>
                    <p className="text-sm text-center font-bold uppercase tracking-widest text-zinc-500">Per Adult, Per Night</p>
                    <hr className="my-6 border-primary/20" />
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between"><span>Children (6-12)</span> <span className="font-bold">USD 50</span></li>
                        <li className="flex justify-between"><span>Children (Under 6)</span> <span className="font-bold">EXEMPT</span></li>
                    </ul>
                </div>
                <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200">
                    <h3 className="text-2xl font-bold text-zinc-800 mb-4 text-center">Indian Nationals</h3>
                    <p className="text-4xl font-serif font-black text-center mb-2">INR 1,200</p>
                    <p className="text-sm text-center font-bold uppercase tracking-widest text-zinc-500">Per Adult, Per Night</p>
                    <hr className="my-6 border-zinc-200" />
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between"><span>Children (6-12)</span> <span className="font-bold">INR 600</span></li>
                        <li className="flex justify-between"><span>Children (Under 6)</span> <span className="font-bold">EXEMPT</span></li>
                    </ul>
                </div>
            </div>
            <p className="mt-8 text-sm italic text-zinc-500 text-center">
                *The above rates for International Tourists reflect a 50% incentive program currently in effect until August 31, 2027.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Where Does Your Money Go?</h2>
            <p className="mb-6">
                When you pay the SDF, you are becoming a part of Bhutan's story. The funds are utilized for:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4 p-4">
                    <div className="h-10 w-10 shrink-0 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600">
                        🌿
                    </div>
                    <div>
                        <h4 className="font-bold">Carbon Neutrality</h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Bhutan is the world's only carbon-negative country. SDF funds tree planting, wildlife corridor protection, and clean energy initiatives.</p>
                    </div>
                </div>
                <div className="flex gap-4 p-4">
                    <div className="h-10 w-10 shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600">
                        🏥
                    </div>
                    <div>
                        <h4 className="font-bold">Free Healthcare</h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">The fee subsidizes the constitutional right to free medical services for all Bhutanese citizens.</p>
                    </div>
                </div>
                <div className="flex gap-4 p-4">
                    <div className="h-10 w-10 shrink-0 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600">
                        🎓
                    </div>
                    <div>
                        <h4 className="font-bold">Education</h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Ensuring every child in the Kingdom has access to free modern and traditional education.</p>
                    </div>
                </div>
                <div className="flex gap-4 p-4">
                    <div className="h-10 w-10 shrink-0 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-600">
                        🏯
                    </div>
                    <div>
                        <h4 className="font-bold">Heritage Preservation</h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">The restoration and maintenance of ancient Dzongs, monasteries, and the revival of traditional arts.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Payment and Refunds</h2>
            <p className="mb-4">
                The SDF is paid at the time of your visa application. As your tour operator, <strong>OASIS Tours and Treks</strong> will facilitate this payment for you.
            </p>
            <p className="mb-4">
                <strong>Cancellation:</strong> If your trip is cancelled for any reason, the SDF is refundable from the government, though processing times may vary.
            </p>
            <p className="mb-4">
                <strong>Extensions:</strong> If you choose to extend your stay in Bhutan, you must pay the daily SDF for the additional nights before your visa extension is granted.
            </p>
        </div>
      </div>
    </TravelGuideDetail>
  );
}
