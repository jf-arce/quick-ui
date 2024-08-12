import { CardProductsProps } from "./Card.types";
import { Meta, StoryObj } from "@storybook/react";
import CardProduct from "./CardProduct";

export default {
  title: "Components/CardProduct",
  component: CardProduct,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Cookies & Creams",
    price: "70.500",
    description: "Cremoso helado de vainilla con trozos de galletitas oreo.",
    className: "",
    image:
      "https://s.cornershopapp.com/product-images/4497271.jpg?versionId=_VAyMOQ2nPhEKUYtPSa4Rf.mwEGtFkvu",
  },
} satisfies Meta<typeof CardProduct>;

const Template: StoryObj<CardProductsProps> = {
  render: (args) => <CardProduct {...args} />,
};

export const Primary: StoryObj<CardProductsProps> = {
  ...Template,
  args: {
    ...Template.args,
  },
};
