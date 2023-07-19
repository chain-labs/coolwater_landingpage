import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["large", "normal"],
      control: { type: "select" },
    },
    type: {
      options: ["destructive", "danger", "secondary", "primary", "ghost"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["active", "pressed", "normal", "hover", "disabled"],
      control: { type: "select" },
    },
    iconButton: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    rightIcon: true,
    leftIcon: true,
    label: "Label",
    size: "large",
    type: "destructive",
    stateProp: "active",
    iconButton: "off",
    className: {},
  },
};
