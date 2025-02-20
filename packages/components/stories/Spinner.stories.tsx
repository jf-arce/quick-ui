import React from "react";
import Spinner from "../src/Spinner";
import { SpinnerProps } from "../src/Spinner/Spinner.types";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    bgColor: "transparent",
    spinnerColor: "#a551e4",
    className: "",
  },
} satisfies Meta<typeof Spinner>;

const Template: StoryObj<SpinnerProps> = {
  render: (args) => <Spinner {...args} />,
};

export const Primary: StoryObj<SpinnerProps> = {
  ...Template,
  args: {
    ...Template.args,
    className: "h-10",
  },
};
