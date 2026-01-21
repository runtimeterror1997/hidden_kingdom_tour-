import { KnowBhutanDetail } from "@/components/KnowBhutanDetail";

export default function HealthEducationPage() {
  return (
    <KnowBhutanDetail
      title="Health and Education"
      subtitle="Investing in the People: The Pillars of GNH"
      heroImage="/assets/home/health.png"
    >
      <div className="space-y-8 text-lg loading-relaxed text-zinc-700 dark:text-zinc-300">
        <p className="lead text-2xl font-light text-zinc-900 dark:text-white first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
           In Bhutan, health and education are not just services; they are fundamental rights. The Constitution mandates that the state provide free basic public health services and free education up to the 12th grade. This commitment reflects the belief that the true wealth of a nation lies in the health and knowledge of its people.
        </p>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Healthcare: A Dual System</h2>
            <p className="mb-4">
                Bhutan has achieved remarkable health outcomes despite its rugged terrain and limited resources. Life expectancy has risen dramatically, and immunization coverage is over 95%. The healthcare system is entirely funded by the government, and services—including medicines, doctor visits, and surgeries—are free for everyone, including tourists in emergencies.
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Modern Medicine</h3>
            <p className="mb-4">
                The backbone of the system is modern allopathic medicine. A network of Basic Health Units (BHUs) in rural villages ensures primary care is accessible even in the most remote areas. District hospitals handle more complex cases, while the Jigme Dorji Wangchuck National Referral Hospital (JDWNRH) in Thimphu serves as the main tertiary care center.
            </p>
            <p className="mb-4">
                If a medical condition cannot be treated within Bhutan (e.g., complex heart surgeries or cancer treatments), the government bears the full cost of sending the patient and an escort to specialized hospitals abroad, primarily in India.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Traditional Medicine (Sowa Rigpa)</h3>
            <p className="mb-4">
                Alongside modern hospitals, Bhutan has integrated its traditional medical system, known as <strong>Sowa Rigpa</strong> (The Science of Healing). Roots in Tibetan medicine but with unique Bhutanese characteristics, it relies on herbal medicines, acupuncture, and cupping.
            </p>
            <p className="mb-4">
                Sowa Rigpa is formalized and regulated. There is a Faculty of Traditional Medicine where doctors (Drungtshos) undergo rigorous training for five years. Importantly, patients can choose between allopathic and traditional treatments, as both are available under the same roof in district hospitals.
            </p>
        </div>

        <div className="my-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Education: From Monastic to Modern</h2>
            <p className="mb-4">
                Until the 1960s, the only form of education available in Bhutan was monastic education. Monasteries served as the centers of learning, teaching art, literature, and philosophy.
            </p>
            <p className="mb-4">
                Modern "western-style" education began in the 1960s under the Third King. Today, Bhutan boasts a comprehensive education system with over 600 schools and several colleges.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
                 <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">Structure</h4>
                    <p className="text-sm">Education is free from Pre-Primary (PP) to Grade 12. The government also provides free textbooks, stationery, and boarding meals for students in rural areas.</p>
                </div>
                 <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">Medium of Instruction</h4>
                    <p className="text-sm">Remarkably, the medium of instruction for all subjects (Math, Science, Social Studies) is <strong>English</strong>. Dzongkha is taught as a mandatory second language. This has produced a population that is fluently bilingual.</p>
                </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Higher Education</h3>
            <p className="mb-4">
                The <strong>Royal University of Bhutan (RUB)</strong> oversees the tertiary education colleges. The oldest and most premier institute is Sherubtse College in eastern Bhutan.
            </p>
            <p className="mb-4">
                Recognizing the need for skills beyond academics, there is a growing emphasis on TVET (Technical and Vocational Education and Training). Institutes teach electrical engineering, auto mechanics, and construction to address youth unemployment and the need for skilled labor.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Educating for GNH</h3>
            <p className="mb-4">
                Uniquely, Bhutanese schools incorporate "GNH Values" into the curriculum. Students start the day with mindfulness meditation. The curriculum emphasizes critical thinking, ecological literacy, and social-emotional skills, aiming to produce "graduates who are genuine human beings," not just economically productive workers.
            </p>
        </div>
      </div>
    </KnowBhutanDetail>
  );
}
