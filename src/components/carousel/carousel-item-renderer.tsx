import { Card, CardContent } from "@/components/ui/card";
import { CarouselItemType } from "./custom-carousel";

export function CarouselItemRenderer({
  item,
  renderItem,
  cardHeight = "h-64",
}: {
  item: CarouselItemType;
  renderItem?: (item: CarouselItemType) => React.ReactNode;
  cardHeight?: string;
}) {
  if (renderItem) return <>{renderItem(item)}</>;

  return (
    <Card className={cardHeight}>
      <CardContent className="flex items-center justify-center p-6 h-full">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p>{item.content}</p>
          {item.imageUrl && (
            <img
              src={item.imageUrl}
              alt={item.title}
              className="mt-2 mx-auto max-h-24"
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
