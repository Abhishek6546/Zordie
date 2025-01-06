import  { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface CardData {
    name: string;
    post: string;
    image1: string;
    image2: string;
    desc: string;
}

const cards: CardData[] = [
    { name: "Jill Kramer", post: "Chief Marketing and Communications Officer ", image1: "/bottomcards/Accenture.png", image2: "/bottomcards/img1.png", desc: "“Generative AI tools like Zordie AI can drive greater creativity. As we continue to expand the use of AI, the opportunities to enhance content creation, productivity and our entire marketing model are boundless.” " },
    { name: "Nitin Tandon", post: "Chief Information Officer", image1: "/bottomcards/vanguard.png", image2: "/bottomcards/img2.png", desc: "“Zordie AI full-stack platform enables Vanguard to combine the expertise, creativity, and knowledge of our teams with the latest advancements in generative AI technology, boosting productivity.” " },
    { name: "Ajay Dhaul", post: "SVP of Data & Applied AI", image1: "/bottomcards/kenvue.png", image2: "/bottomcards/img3.png", desc: "“Zordie AI is onto something amazing. Their full-stack platform, deep customer-centricity, and high-touch approach to services truly sets them apart. Post our due diligence, partnering with Writer was an easy decision for us.”" },
    { name: "Ajay Dhaul", post: "SVP of Data & Applied AI", image1: "/bottomcards/sense.png", image2: "/bottomcards/img2.png", desc: "Zordie AI full-stack platform enables Vanguard to combine the expertise, creativity, and knowledge of our teams with the latest advancements in generative AI technology, boosting productivity.” " },
    { name: "Latané Conant", post: "Chief Market Officer", image1: "/bottomcards/Accenture.png", image2: "/bottomcards/img1.png", desc: "Zordie AI full-stack platform enables Vanguard to combine the expertise, creativity, and knowledge of our teams with the latest advancements in generative AI technology, boosting productivity.” " },
];


const CustomScrollIndicator: React.FC<{ containerRef: React.RefObject<HTMLDivElement> }> = ({ containerRef }) => {
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [activeButton, setActiveButton] = useState<"left" | "right" | null>(null);

    useEffect(() => {
        const updateScrollState = () => {
            if (containerRef.current) {
                const container = containerRef.current;
                setCanScrollRight(
                    container.scrollLeft + container.offsetWidth < container.scrollWidth
                );
                setCanScrollLeft(container.scrollLeft > 0);
            }
        };

        if (containerRef.current) {
            const container = containerRef.current;
            container.addEventListener("scroll", updateScrollState);
            updateScrollState(); // Initial check
        }

        return () => {
            if (containerRef.current) {
                const container = containerRef.current;
                container.removeEventListener("scroll", updateScrollState);
            }
        };
    }, [containerRef]);

    const handleScroll = (direction: "left" | "right") => {
        setActiveButton(direction); // Set active button
        if (containerRef.current) {
            const scrollValue = direction === "left" ? -200 : 200;
            containerRef.current.scrollBy({ left: scrollValue, behavior: "smooth" });
        }
    };

    return (
        <div className="flex space-x-2 w-full justify-center sm:justify-start mt-4 sm:mt-6  cardbtn">
            <button
                className={`w-[38px] h-[38px] sm:w-[38px] sm:h-[38px] rounded-full  flex items-center justify-center ${activeButton === "left" ? "bg-[#E4E7ED] opacity-40 text-white" : "bg-gray-300"
                    }`}
                disabled={!canScrollLeft}
                onClick={() => handleScroll("left")}
            >
                <img src="/section3/Icon.png" alt="" />
            </button>
            <button
                className={`rounded-full w-[38px] h-[38px] sm:w-[38px] sm:h-[38px] flex items-center justify-center  ${activeButton === "right" ? "bg-[#E4E7ED] opacity-40 text-black" : "bg-gray-300 "
                    }`}
                disabled={!canScrollRight}
                onClick={() => handleScroll("right")}
            >
                <img src="/section3/Icon2.png" alt="" />
            </button>
        </div>
    );
};

const Cards2: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="bg-black w-full flex flex-col items-end py-8 max-sm:px-6 max-lg:px-4">
            <div className="w-full max-w-7xl overflow-hidden relative">
                <div
                    className="flex gap-x-6 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory hide-scrollbar"
                    ref={containerRef}
                >
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            className="flex-shrink-0 shadow-md shadow-white  w-full sm:w-[60%] md:w-[265px] h-auto bg-[#FFFFFF] rounded-lg  snap-start"
                        >
                            <CardContent className="p-0">
                                <div className="flex justify-between gap-4 px-4 h-[100px] w-full">
                                    <div className="w-[80px] flex justify-center items-start pt-[20px]">
                                        <img
                                            src={card.image1}
                                            alt="Image 1"
                                            className=" rounded-tl-lg"
                                        />
                                    </div>
                                    <div className="">
                                        <img
                                            src={card.image2}
                                            alt="Image 2"
                                            className="  rounded-tr-lg"
                                        />
                                    </div>
                                </div>
                                <div className="p-4 w-fullh-[200px] md:h-[250px] text-[#333333] text-md">
                                    <p>
                                        {card.desc}
                                    </p>
                                </div>
                                <div className="p-4 w-full">
                                    <span className="font-semibold">{card.name}</span>
                                    <div className="text-sm text-gray-600">{card.post}</div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                    <div
                        className="absolute inset-y-0 right-0 w-14"
                        style={{
                            background: "linear-gradient(to left, #000000 10%, #FFFFFF00 100%)",
                            pointerEvents: "none",
                        }}
                    ></div>


                </div>
            </div>
            <CustomScrollIndicator containerRef={containerRef} />
        </div>
    );
};

export default Cards2;