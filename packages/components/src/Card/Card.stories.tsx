import Card from "./Card";
import { CardProps } from "./Card.types";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Card title",
    subtitle: "Card subtitle",
    content: "Card content",
    footer: "Card footer",
    className: "",
    variant: "default",
    imagePosition: "top",
    image: "https://i.pinimg.com/originals/a5/2b/33/a52b331c426437404ef1e7dc71d3f944.jpg",
  },
} satisfies Meta<typeof Card>;

const Template: StoryObj<CardProps> = {
  render: (args) => <Card {...args} />,
};

export const Primary: StoryObj<CardProps> = {
  ...Template,
  args: {
    ...Template.args,
    title: "Fideos con verdura y huevo",
    imagePosition: "left",
  },
};
