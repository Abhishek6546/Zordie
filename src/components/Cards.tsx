import  { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CardData {
  title: string;
  image: string;
}

const cards: CardData[] = [
  { title: "API", image: "/cards/card1.png" },
  { title: "Desktop app", image: "/cards/card2.png" },
  { title: "Chrome", image: "/cards/card3.png" },
  { title: "Word", image: "/cards/card4.png" },
  { title: "Figma", image: "/cards/card3.png" },
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

const Cards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-black w-full flex flex-col items-end py-8 max-sm:px-6 max-lg:px-4">
      <div className="w-full max-w-7xl overflow-hidden relative"> {/* Added relative */}
        <div
          className="flex gap-x-6 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory hide-scrollbar"
          ref={containerRef}
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-full sm:w-[60%] md:w-[265px] h-auto bg-[#F3F5FF] rounded-lg shadow-lg snap-start"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  <div className="flex justify-end cursor-pointer">
                    <div className="w-[27px] h-[27px] bg-white rounded-full flex justify-center items-center">
                      <img src="/arrow60.png" alt="" />
                    </div>
                  </div>
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <img
                  src={card.image}
                  alt={`Card ${index + 1}`}
                  className="rounded-b-lg object-contain max-md:mb-[-25px] mb-[-20px] w-full"
                />
              </CardContent>
            </Card>
          ))}
        </div>
       

      </div >
      {/* Shadow at the end */}
 
        <div className="text-white  absolute h-[450px]  md:h-[400px] w-14  mt-[-20px]"   style={{
            background: "linear-gradient(to left, #FFFFFF 10%, #FFFFFF00 100%)",
            pointerEvents: "none",
          }}></div>
      <CustomScrollIndicator containerRef={containerRef} />
      
    </div>
  );
};

export default Cards;
