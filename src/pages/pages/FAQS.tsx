import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackToTop } from "../../components/Commons/backToTop";
import Footer from "../../layout/footer/Footer";
import Showcase from "../../layout/showcase/AboutPage/Showcase";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FAQSDATA } from "../../DATA/FAQs/FAQS";

interface PricingProps {
    themeMode: string;
}

const FAQs: React.FC<PricingProps> = ({ themeMode }) => {
    const [currentCard, setCurrentCard] = useState<number | null>(null);

    // Toggle card logic
    const toggleCard = (index: number) => {
        setCurrentCard((prev) => (prev === index ? null : index));
    };

    return (
        <section className="w-screen min-h-screen extraExtraLarge:w-3/5 m-auto overflow-hidden relative">
            {/* Back to top button */}
            <BackToTop />

            {/* Showcase */}
            <Showcase themeMode={themeMode} page="FAQs" />

            <div className="w-11/12 m-auto h-auto flex flex-col items-start justify-start gap-5">
                {/* Header */}
                <header className="w-full h-auto grid grid-cols-1 place-items-start gap-3 my-5">
                    <h1 className="text-lg md:text-3xl font-bold font-Oswald text-customRed uppercase tracking-widest">
                        our faq
                    </h1>
                    <h2 className="w-10/12 md:w-full text-2xl md:text-5xl text-black dark:text-white capitalize font-bold font-Oswald md:leading-loose">
                        Frequently asked question
                    </h2>
                </header>

                {/* FAQs */}
                <ol className="w-full h-auto grid grid-cols-1 place-items-start gap-5">
                    {FAQSDATA.map(({ id, question, answer }) => (
                        <li key={id} className={`w-full transition-all duration-500 ease-in-out overflow-hidden ${currentCard === id ? "max-h-[700px]" : "max-h-[80px]"}`}>
                            {/* Header */}
                            <header
                                className="w-full h-full min-h-20 max-h-40 md:h-20 bg-pink-50 dark:bg-graphiteBlack flex justify-between items-center px-2 md:px-10 rounded shadow-sm my-2 relative cursor-pointer"
                                onClick={() => toggleCard(id)}
                            >
                                <h1 className="w-10/12 md:w-auto flex items-center justify-start gap-1 md:gap-2 lg:text-2xl font-bold font-Oswald">
                                    <span>{id}.</span>
                                    <span>{question}</span>
                                </h1>
                                <div className="absolute top-[25%] right-[3%] w-10 h-10 rounded-full border border-customRed flex items-center justify-center text-customRed text-xl">
                                    <FontAwesomeIcon icon={currentCard === id ? faMinus : faPlus} />
                                </div>
                            </header>

                            {/* Expandable Content */}
                            <div className={`w-full text-black/70 dark:text-white/70 leading-relaxed px-10 py-5 transition-opacity duration-500 ease-in-out ${currentCard === id ? "opacity-100" : "opacity-0" }`}>
                                <p>{answer}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>

            {/* Footer */}
            <Footer themeMode={themeMode} />
        </section>
    );
};

export default FAQs;
