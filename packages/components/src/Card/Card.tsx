import { CardProps } from "./Card.types";
import Button from "@quick-ui/components/src/Button";
import { CardContent } from "./CardContent";
import { CardHeader } from "./CardHeader";

const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl group">
      <CardHeader className="h-52">
        <img
          src={image}
          alt=""
          loading="lazy"
          className={`object-cover w-full h-full rounded-t-lg group-hover:scale-105 transition-transform duration-200 ease-in-out`}
        />
      </CardHeader>
      <CardContent>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm mt-3">{description}</p>
        <div className="flex gap-4 border-black border-t-2 mt-5">
          <Button variant="primary" size={"sm"} colorBg="black">
            Add to cart
          </Button>
          <Button variant="primary" size={"sm"}>
            Buy now
          </Button>
        </div>
      </CardContent>
    </div>
  );
};

export default Card;
