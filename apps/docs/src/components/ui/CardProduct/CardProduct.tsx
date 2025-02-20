import { Card, CardContent, CardFooter, CardHeader, Button } from "quick-ui-components";

export interface CardProductsProps {
  title?: string;
  image?: string;
  description?: string;
  price?: string;
  textButton?: string;
  badge?: string | boolean;
  colorBadge?: string;
  noBadge?: boolean;
}

const CardProduct: React.FC<CardProductsProps> = ({
  title = "Product title",
  image,
  price = "0.00",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante vel eros fermentum faucibus sit amet euismod lorem.",
  textButton = "Buy now",
  badge = "SALE",
  colorBadge = "#ef4444",
  noBadge = false,
}) => {
  return (
    <Card
      radius="md"
      className="bg-white text-neutral-950 w-80 overflow-hidden shadow-md transition-all hover:shadow-lg group"
    >
      <CardHeader className="relative overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt=""
          loading="lazy"
          className={`h-52 w-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out`}
        />
        {!noBadge && (
          <div
            style={{ backgroundColor: colorBadge }}
            className="absolute top-0 right-0 text-white px-2 py-1 m-2 rounded-md text-sm font-medium uppercase"
          >
            {badge}
          </div>
        )}
      </CardHeader>
      <CardContent className="p-5">
        <p className="text-lg font-medium text-black mb-2">{title}</p>
        <p className="text-sm text-neutral-500 font-medium m-0">{description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-5 pt-0">
        <p className="text-2xl font-semibold m-0">${price}</p>
        <Button variant="primary" size={"sm"} radius="md" colorBg="black" hoverOpacity={-25}>
          {textButton}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
