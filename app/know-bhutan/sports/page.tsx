import { KnowBhutanDetail } from "@/components/KnowBhutanDetail";

export default function SportsPage() {
  return (
    <KnowBhutanDetail
      title="Sports in Bhutan"
      subtitle="From Ancient Tradition to Modern Obsession"
      heroImage="/assets/home/sports.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           Sports in Bhutan are a celebration of life, community, and heritage. While the world gathers in stadiums, the Bhutanese gather in village meadows and town squares. Traditional sports are not just games; they are religious rituals, social gatherings, and opportunities for raucous fun, often accompanied by song, dance, and distinct local humor.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Archery (Dha): The National Obsession</h2>
            <p className="mb-4">
                Archery was declared the national sport in 1971, but it has been the soul of the nation for centuries. Legends say the gods themselves played archery, and it was used to drive away Tibetan invaders.
            </p>
            <p className="mb-4">
                <strong>The Game:</strong> A traditional match is played between two teams. The target is a small wooden plank (only 30cm wide) placed 145 meters away. This distance is incredibly long—almost three times the Olympic distance! Hitting the target requires immense skill and strength.
            </p>
            <p className="mb-4">
                <strong>The Equipment:</strong> Traditionally, bows were made of bamboo. Today, however, imported high-tech compound bows from the USA (Hoyt, Mathews) are prized possessions, costing thousands of dollars. Despite the modern equipment, the rules and traditions remain ancient.
            </p>
            <p className="mb-4">
                <strong>The Atmosphere:</strong> An archery tournament is a festival. When a player hits the bullseye, his teammates perform a slow, rhythmic dance and sing a ballad of praise. When an opponent is shooting, the other team stands near the target, shouting distractions, mocking his aim, or making bawdy jokes to break his concentration. It is all done in good spirits. Matches can last for days, fueled by generous amounts of <em>Ara</em> (local wine) and betel nut.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Khuru (Outdoor Darts)</h2>
            <p className="mb-4">
                Khuru is a popular sport, often played at festivals or during the winter when there is less farm work.
            </p>
            <p className="mb-4">
                <strong>How it's played:</strong> Heavy wooden darts pointed with sharp nails are thrown at a palm-sized target 20 meters away. It sounds simple, but the darts are heavy and the target is tiny.
            </p>
            <p className="mb-4">
                Like archery, it is a team sport involving songs and dances. It is common to see men in Gho throwing darts with incredible force and precision in open fields across the country.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Degor (Bhutanese Shot Put)</h2>
            <p className="mb-4">
                Degor is a game of stones. It is similar to horseshoes or shot put but played with a pair of flat, round stones.
            </p>
            <p className="mb-4">
                Players throw the stones at a target peg about 20 meters away. There is no set limit to the number of players. The technique involves a graceful underhand lob. It is a game of camaraderie, often played by older men who might find the rigors of archery too demanding.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Pungdo (Weight Throwing)</h2>
            <p className="mb-4">
                Pungdo is the Bhutanese version of shot put. A heavy, smooth river stone is held in the hand and thrown as far as possible. It is a traditional test of strength for young men.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Modern Sports</h2>
            <p className="mb-4">
                While traditional sports thrive, modern sports are gaining ground.
            </p>
            <ul className="list-disc pl-6 space-y-3">
                <li><strong>Football:</strong> Football is hugely popular among the youth. The Changlimithang Stadium in Thimphu is the national stadium, and Bhutanese follow international leagues passionately.</li>
                <li><strong>Basketball:</strong> Surprisingly popular, especially in urban areas. Members of the Royal Family are known to be avid players.</li>
                <li><strong>Mountain Biking and Running:</strong> Given the terrain, these are natural fits. The <strong>Snowman Race</strong>, an ultra-marathon across the high Himalayas launched to highlight climate change, is attracting global elite athletes. The "Tour of the Dragon" is one of the toughest one-day mountain bike races in the world, covering 268km over four mountain passes.</li>
            </ul>
        </div>
      </div>
    </KnowBhutanDetail>
  );
}
