import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import CardProduct, { CardProductsProps } from "../templates/card-product/CardProduct";

export default {
  title: "Components/CardProduct",
  component: CardProduct,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Cookies & Creams",
    price: "4.99",
    // description: "Cremoso helado de vainilla con trozos de galletitas oreo.",
    image: "https://www.gastrolabweb.com/u/fotografias/m/2021/3/19/f800x450-10387_61833_5050.jpg",
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
