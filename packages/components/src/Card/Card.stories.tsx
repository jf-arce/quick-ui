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
    description: "Altos fideos se mando mi vieja",
    className: "",
    image: "https://th.bing.com/th/id/OIP.-iKT7rZf1Fl-tPBTEEr03gHaEb?rs=1&pid=ImgDetMain",
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
  },
};
