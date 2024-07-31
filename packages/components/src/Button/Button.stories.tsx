import React from "react";
import { Meta, StoryObj } from "@quick-ui/storybook/node_modules/@storybook/react";
import Button from "./Button";
import { btnTypesEnum, ButtonProps } from "./Button.types";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "",
    btnType: btnTypesEnum.PRIMARY,
    colorBg: "#a551e4",
    size: "md",
    radius: "lg",
    pointer: true,
    pulse: true,
    colorText: "#ffffff",
    ripple: true,
    hoverColor: true,
    hoverOpacity: 15,
    icon: null,
    className: "",
    style: {},
    disabled: false,
    type: "button",
  },
  argTypes: {
    colorBg: {
      control: "color",
      description: "Background color of the button",
      table: {
        type: { summary: "ColorType" },
        defaultValue: { summary: "#a551e4" },
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl", "2xl"],
      },
      description: "Size of the button (sm, md, lg, xl, 2xl)",
      table: {
        type: { summary: "ButtonSizeType" },
        defaultValue: { summary: "md" },
      },
    },
    radius: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl", "full"],
      },
      description: "Border radius of the button (sm, md, lg, xl, full)",
      table: {
        type: { summary: "RadiusType" },
        defaultValue: { summary: "lg" },
      },
    },
    pointer: {
      description: "Whether the button cursor should be pointer",
    },
    pulse: {
      description: "Whether to enable pulse animation on click",
    },
    colorText: {
      control: "color",
      description: "Text color of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "#ffffff" },
      },
    },
    btnType: {
      description: "Type of button (primary, secondary or tertiary)",
      table: {
        type: { summary: "btnType" },
        defaultValue: { summary: "primary" },
      },
    },
    hoverColor: {
      description: 'Custom hover color (optional) True, False or a "color"',
      table: {
        type: { summary: "string | boolean" },
        defaultValue: { summary: "true" },
      },
    },
    ripple: {
      description: "Whether to enable ripple effect on click",
    },
    hoverOpacity: {
      description:
        "Amount to darken hover color. If the number is negative, the color will be lightened",
    },
    icon: {
      description: "Icon to display in the button",
    },
    children: {
      description: "Text content of the button",
    },
    style: {
      description: "Style object for the button",
      table: {
        type: { summary: "React.CSSProperties" },
      },
    },
    className: {
      description: "Classname for the button",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof Button>;

const Template: StoryObj<ButtonProps> = {
  render: (args) => <Button {...args} />,
};

/*
    Stories
*/

export const Primary: StoryObj<ButtonProps> = {
  ...Template,
  args: {
    ...Template.args,
    children: "Primary Button",
    btnType: btnTypesEnum.PRIMARY,
  },
};

export const Secundary: StoryObj<ButtonProps> = {
  ...Template,
  args: {
    ...Template.args,
    children: "Secundary Button",
    btnType: btnTypesEnum.SECONDARY,
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  ...Template,
  args: {
    ...Template.args,
    children: "Tertiary Button",
    btnType: btnTypesEnum.TERTIARY,
  },
};

export const Icon: StoryObj<ButtonProps> = {
  ...Template,
  args: {
    ...Template.args,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 17h-11v-14h-2" />
        <path d="M6 5l14 1l-1 7h-13" />
      </svg>
    ),
  },
};

export const IconWithText: StoryObj<ButtonProps> = {
  ...Template,
  args: {
    ...Template.args,
    children: "Add to Cart",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 17h-11v-14h-2" />
        <path d="M6 5l14 1l-1 7h-13" />
      </svg>
    ),
  },
};
