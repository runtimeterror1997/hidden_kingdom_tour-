import { TravelGuideDetail } from "@/components/TravelGuideDetail";

export default function CommunicationPage() {
  return (
    <TravelGuideDetail
      title="Communication & Connectivity"
      subtitle="Staying Connected in the Hidden Kingdom"
      heroImage="/assets/home/communication.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           You might expect a remote mountain kingdom to be off-the-grid, but Bhutan's connectivity is surprisingly modern. From 5G networks in Thimphu to fiber-optic Wi-Fi in the most traditional valleys, staying in touch with the world is easier than you think. However, there are some local quirks you should know.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Mobile Networks & SIM Cards</h2>
            <p className="mb-4">
                Bhutan has two main network providers: <strong>Bhutan Telecom (B-Mobile)</strong> and <strong>TashiCell</strong>. Both offer excellent coverage across the country, except in the very high uninhabited mountains.
            </p>
            <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200 mt-6">
                <h4 className="font-bold mb-4">How to Get a Tourist SIM:</h4>
                <ul className="space-y-3">
                    <li className="flex gap-3">
                        <span className="bg-primary text-white h-6 w-6 rounded-full flex items-center justify-center shrink-0">1</span>
                        <span>Available at the airport arrival hall (Paro) or in city centers.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="bg-primary text-white h-6 w-6 rounded-full flex items-center justify-center shrink-0">2</span>
                        <span>Requires a copy of your <strong>Passport</strong> and one <strong>Passport-sized photo</strong>.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="bg-primary text-white h-6 w-6 rounded-full flex items-center justify-center shrink-0">3</span>
                        <span>4G/5G data packages are very affordable (e.g., ~USD 10 for 30GB).</span>
                    </li>
                </ul>
            </div>
            <p className="mt-4 text-sm italic">Note: International Roaming is available but can be extremely expensive. A local SIM is almost always better.</p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Wi-Fi & Internet</h2>
            <p className="mb-4">
                Almost all hotels, guest houses, and high-end restaurants in Bhutan provide free Wi-Fi for guests. In general, speed is good enough for emails, social media, and video calls.
            </p>
            <p className="mb-4">
                <strong>A Note on Remote Areas:</strong> If you are trekking or staying in a remote homestay, Wi-Fi may be unavailable. However, mobile data signals can often be found even in surprising locations!
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Electricity & Charging</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                     <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                        <li><strong>Voltage:</strong> 230V, AC 50 Hz.</li>
                        <li><strong>Plugs:</strong> Most commonly Type D (three round pins), Type F (two round pins - Schuko), and Type G (three square pins - UK style).</li>
                        <li>Most modern hotels have "universal" sockets that accept various configurations.</li>
                    </ul>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg border border-yellow-100">
                    <p className="text-sm font-bold text-yellow-800 dark:text-yellow-400">Pro Tip:</p>
                    <p className="text-sm">Power outages can occasionally occur in remote areas during storms. Bring a high-capacity power bank, especially if you are trekking.</p>
                </div>
            </div>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Time Zone</h2>
            <p className="mb-4">
                Bhutan is in the <strong>Bhutan Time (BTT)</strong> zone, which is <strong>UTC +6</strong>.
            </p>
            <p className="mb-4">
                Bhutan is 30 minutes ahead of India (IST) and 1 hour behind Thailand (ICT).
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Postal Services</h2>
            <p className="mb-4">
                Sending a postcard from the "Last Shangri-La" is a great tradition. The <strong>Bhutan Post Museum</strong> in Thimphu even allows you to create your own personalized, usable postage stamps with your picture on them!
            </p>
        </div>
      </div>
    </TravelGuideDetail>
  );
}
