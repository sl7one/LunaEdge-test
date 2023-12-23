import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "base",
    label: "Button",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    size: "base",
    label: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "base",
    label: "Button",
  },
};

export const WithLeftIcon: Story = {
  args: {
    variant: "primary",
    size: "base",
    label: "Button",
    iconBefore: "star",
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: "primary",
    size: "base",
    label: "Button",
    iconAfter: "chevron",
  },
};

export const WithIcons: Story = {
  args: {
    variant: "primary",
    size: "base",
    label: "Button",
    iconAfter: "star",
    iconBefore: "chevron",
  },
};
