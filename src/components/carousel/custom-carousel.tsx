"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";
import { CarouselItemRenderer } from "./carousel-item-renderer";
import { DotNavigation } from "./dot-navigation";
import { useResponsiveCards } from "./useResponsiveCards";

export interface CarouselItemType {
  id: number | string;
  title: string;
  content: string;
  imageUrl?: string;
}

export interface CustomCarouselProps {
  items: CarouselItemType[];
  autoplayInterval?: number;
  autoplay?: boolean;
  pauseOnHover?: boolean;
  loop?: boolean;
  cardHeight?: string;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
  renderItem?: (item: CarouselItemType) => React.ReactNode;
}

export default function CustomCarousel({
  items,
  autoplayInterval = 3000,
  autoplay = true,
  pauseOnHover = true,
  loop = true,
  cardHeight = "h-64",
  showDots = true,
  showArrows = true,
  className = "",
  renderItem,
}: CustomCarouselProps) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(!autoplay);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const cardsToShow = useResponsiveCards();

  const handleSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    setCount(api.scrollSnapList().length);
  }, [api]);

  useEffect(() => {
    if (!api) return;

    api.on("select", handleSelect);
    handleSelect();

    return () => {
      api.off("select", handleSelect);
    };
  }, [api, handleSelect]);

  useEffect(() => {
    if (!api || !autoplay || isPaused) {
      clearInterval(autoplayRef.current!);
      autoplayRef.current = null;
      return;
    }

    autoplayRef.current = setInterval(() => {
      api.scrollNext();
    }, autoplayInterval);

    return () => clearInterval(autoplayRef.current!);
  }, [api, autoplay, isPaused, autoplayInterval]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api]
  );

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && autoplay) setIsPaused(false);
  };

  return (
    <div
      className={cn("w-full max-w-5xl mx-auto px-4 py-8", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{ align: "start", loop }}
      >
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              className={cn(
                "pl-4",
                cardsToShow === 1
                  ? "basis-full"
                  : cardsToShow === 2
                  ? "basis-1/2"
                  : "basis-1/3"
              )}
            >
              <CarouselItemRenderer
                item={item}
                renderItem={renderItem}
                cardHeight={cardHeight}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {showArrows && (
          <>
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </>
        )}
      </Carousel>

      {showDots && (
        <DotNavigation count={count} current={current} onDotClick={scrollTo} />
      )}
    </div>
  );
}
