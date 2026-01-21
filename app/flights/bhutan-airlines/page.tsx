import { FlightDetail } from "@/components/FlightDetail";

export default function BhutanAirlinesPage() {
  return (
    <FlightDetail
      title="Bhutan Airlines (Tashi Air)"
      subtitle="The Spirit of the Thunder Dragon"
      heroImage="/assets/home/airlines.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           Bhutan Airlines, also known as Tashi Air Pvt. Ltd., is the first private airline in the Kingdom of Bhutan. Established in 2011, it emerged with a vision to provide a competitive and high-quality alternative for travelers wishing to visit the Land of the Thunder Dragon. As a subsidiary of the Tashi Group, one of Bhutan's largest and most respected conglomerates, the airline combines corporate excellence with traditional Bhutanese hospitality.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">History and Vision</h2>
            <p className="mb-4">
                The inception of Bhutan Airlines marked a significant milestone in the country's aviation history, breaking the long-standing monopoly of the national carrier. It began operations with domestic flights in 2011 but strategically pivoted to international operations in 2013, recognizing the growing global interest in Bhutan as a premium tourist destination.
            </p>
            <p className="mb-4">
                The airline's motto, "Fly with us to the Land of Happiness," reflects its commitment to making the journey as memorable as the destination. The crew, dressed in elegant traditional attire (Kira for women and Gho for men), are trained to offer a warm and personalized service that embodies the essence of "Gross National Happiness."
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Fleet and Operations</h2>
            <p className="mb-4">
                Bhutan Airlines operates a modern fleet primarily consisting of the <strong>Airbus A319</strong> aircraft. This aircraft is specifically suited for the challenging terrain of the Himalayas and the demanding approach into Paro International Airport, which is considered one of the most difficult landings in the world.
            </p>
            <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl border-l-4 border-primary mt-4">
                <h4 className="font-bold text-lg mb-2">The A319 Advantage</h4>
                <p>The Airbus A319 is chosen for its powerful engines and maneuverability, essential for navigating the high-altitude valleys. The cabins are configured with Business and Economy classes, offering comfort and legroom superior to many budget carriers.</p>
            </div>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Route Network</h2>
            <p className="mb-4">
                Bhutan Airlines connects the hidden kingdom to major regional hubs. Flights operate daily or several times a week, depending on the season.
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 p-3 bg-zinc-50 rounded-lg">
                    <span className="font-bold w-12 text-primary">BKK</span>
                    <span>Bangkok, Thailand (Suvarnabhumi)</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-zinc-50 rounded-lg">
                    <span className="font-bold w-12 text-primary">DEL</span>
                    <span>New Delhi, India (Indira Gandhi)</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-zinc-50 rounded-lg">
                    <span className="font-bold w-12 text-primary">CCU</span>
                    <span>Kolkata, India (Netaji Subhas Chandra Bose)</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-zinc-50 rounded-lg">
                    <span className="font-bold w-12 text-primary">KTM</span>
                    <span>Kathmandu, Nepal (Tribhuvan)</span>
                </li>
            </ul>
             <p className="mt-4 text-sm text-zinc-500 italic">
                *Routes and schedules are subject to seasonal changes. Flights often stop in Kolkata or Bagdogra depending on the route.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Onboard Experience</h2>
            <p className="mb-4">
                <strong>Business Class:</strong> Known as 'Premium Class', passengers enjoy wide leather seats, priority boarding, increased baggage allowance (40kg), and a gourmet meal service featuring a mix of Bhutanese and continental cuisine. The dedicated lounge access in Paro ensures a relaxing start to the journey.
            </p>
            <p className="mb-4">
                <strong>Economy Class:</strong> Even in economy, the service is full-frill. Passengers receive complimentary meals and beverages. The baggage allowance is generous (30kg), which is helpful for tourists buying heavy souvenirs like textiles or statues.
            </p>
            <p className="mb-4">
                <strong>The View:</strong> One of the highlights of flying with Bhutan Airlines is the approach to Paro. On a clear day, passengers are treated to a spectacular panorama of the Himalayan range, including Mount Everest, Kanchenjunga, and Jomolhari. The pilot often announces the peaks, turning the flight into a sightseeing tour.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Safety and Reliability</h2>
            <p className="mb-4">
                Safety is paramount when flying in the Himalayas. Bhutan Airlines employs highly experienced pilots, many of whom have logged thousands of hours flying in this specific terrain. The engineering and maintenance teams adhere to strict international safety standards.
            </p>
            <p className="mb-4">
                Being a private entity, the airline is often praised for its customer service flexibility and responsiveness. In the event of weather delays—a common occurrence in mountain aviation—the ground staff are known for their helpfulness in rearranging travel plans.
            </p>
        </div>
      </div>
    </FlightDetail>
  );
}
