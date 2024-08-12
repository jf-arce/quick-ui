import { CardProductsProps } from "./Card.types";
import Button from "@quick-ui/components/src/Button";
import { CardContent } from "./CardContent";
import { CardHeader } from "./CardHeader";
import { CardFooter } from "./CardFooter";
import { Card } from "./Card";

const CardProduct: React.FC<CardProductsProps> = ({
  title,
  image,
  price = "70.500",
  description,
}) => {
  return (
    <Card radius="lg">
      <CardHeader>
        <img
          src={image}
          alt=""
          loading="lazy"
          className={`object-cover object-center w-full group-hover:scale-105 transition-transform duration-500 ease-in-out`}
        />
      </CardHeader>
      <CardContent className="space-y-2 p-6">
        <p className="text-lg font-thin">{title}</p>
        <p className="text-2xl font-semibold">${price}</p>
        <p className="text-sm text-neutral-500 font-medium">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-4 border-black border-t-2">
        <Button variant="primary" size={"sm"} className="w-full" colorBg="black" hoverOpacity={-25}>
          Buy now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
