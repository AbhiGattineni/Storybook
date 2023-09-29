import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "press me",
  size: "md",
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "green",
  label: "press me",
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "red",
  label: "press me",
  size: "sm",
};
