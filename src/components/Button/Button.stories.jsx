import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'button',
  variant: 'primary',
  children: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: 'button',
  variant: 'secondary',
  children: 'secondary',
};
