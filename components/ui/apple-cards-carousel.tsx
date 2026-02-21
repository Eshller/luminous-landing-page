"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: React.JSX.Element[];
  initialScroll?: number;
  showControls?: boolean;
  autoScroll?: boolean;
  autoScrollInterval?: number;
}

type Card = {
  src?: string;
  title: string;
  category: string;
  content: React.ReactNode;
  bgColor?: string;
  icon?: React.ReactNode | string;
};

// Helper function to lighten a hex color
const lightenColor = (color: string, amount: number = 80): string => {
  const hex = color.replace("#", "");
  const r = Math.min(255, parseInt(hex.substring(0, 2), 16) + amount);
  const g = Math.min(255, parseInt(hex.substring(2, 4), 16) + amount);
  const b = Math.min(255, parseInt(hex.substring(4, 6), 16) + amount);
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0,
  showControls = true,
  autoScroll = false,
  autoScrollInterval = 3000,
}: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(true);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollingRef = React.useRef(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const scrollTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const isResettingRef = React.useRef(false);

  // Duplicate items for infinite scroll
  const infiniteItems = [...items, ...items, ...items];

  useEffect(() => {
    if (carouselRef.current) {
      // Start in the middle set of items
      const cardWidth = window.innerWidth < 768 ? 230 : 384;
      const gap = 16;
      const initialPosition = (cardWidth + gap) * items.length;
      carouselRef.current.scrollLeft = initialPosition + initialScroll;
    }
  }, [initialScroll, items.length]);

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScroll || isHovered) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 1, behavior: "auto" });
      }
    }, 20);

    return () => clearInterval(interval);
  }, [autoScroll, isHovered]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const checkScrollability = () => {
    if (!carouselRef.current || isResettingRef.current) return;

    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Set a timeout to check position after scrolling stops
    scrollTimeoutRef.current = setTimeout(() => {
      if (!carouselRef.current || isResettingRef.current) return;

      const { scrollLeft } = carouselRef.current;
      const cardWidth = window.innerWidth < 768 ? 230 : 384;
      const gap = 16;
      const itemWidth = cardWidth + gap;
      const setWidth = items.length * itemWidth;

      // Calculate which set we're in (0 = first, 1 = middle, 2 = last)
      const currentSet = Math.floor(scrollLeft / setWidth);

      // Reset position when in first or last set
      if (currentSet === 0 || currentSet >= 2) {
        isResettingRef.current = true;
        const offset = scrollLeft % setWidth;

        // Disable smooth scrolling temporarily for instant jump
        const originalBehavior = carouselRef.current.style.scrollBehavior;
        carouselRef.current.style.scrollBehavior = "auto";

        carouselRef.current.scrollLeft = setWidth + offset;

        // Re-enable smooth scrolling after a brief delay
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.style.scrollBehavior = originalBehavior;
          }
          isResettingRef.current = false;
        }, 50);
      }
    }, 100); // Reduced timeout for faster response
  };

  const scrollLeft = () => {
    if (carouselRef.current && !isResettingRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current && !isResettingRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = 16;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div
        className="relative w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
          style={{ scrollBehavior: "smooth" }}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4 pr-4",
              "mx-auto max-w-7xl", // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {infiniteItems.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * (index % items.length),
                    ease: "easeOut",
                  },
                }}
                key={"card" + index}
                className="rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        {showControls && (
          <div className="mr-10 flex justify-end gap-2">
            <button
              className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={scrollLeft}
            >
              <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
            </button>
            <button
              className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={scrollRight}
            >
              <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        )}
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-luxury md:p-10 dark:bg-neutral-900"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-64 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[32rem] md:w-96 dark:bg-neutral-900 transition-colors duration-300"
        style={{
          backgroundColor: card.bgColor
            ? lightenColor(card.bgColor, 80)
            : undefined,
        }}
        whileHover={{ backgroundColor: card.bgColor }}
        transition={{ duration: 0.3 }}
      >
        {!card.bgColor && card.src && (
          <>
            <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
            <BlurImage
              src={card.src}
              alt={card.title}
              className="absolute inset-0 z-10 h-full w-full object-cover"
            />
          </>
        )}
        {card.icon && (
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            {typeof card.icon === "string" ? (
              <img
                src={card.icon}
                alt={card.title}
                className="w-24 h-24 md:w-32 md:h-32 object-contain opacity-40"
              />
            ) : (
              card.icon
            )}
          </div>
        )}
        <div className="relative z-40 p-8 mt-auto w-full">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-sm font-medium text-white md:text-base"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
          >
            {card.title}
          </motion.p>
        </div>
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement> & {
  height?: number | string;
  width?: number | string;
  blurDataURL?: string;
}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
