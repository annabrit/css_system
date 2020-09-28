export default {
  title: 'UI Components/Buttons',
  argTypes: {
    buttonVariations: {
      control: {
        type: 'check',
        options: ['outline', 'ghost', 'long', 'secondary', 'danger']
      }
    },
    title: {
      control: {
        type: 'text'
      }
    }
  }
};

const Template = args => `
    <button
        type="button"
        class="button ${args.buttonVariations.length &&
          args.buttonVariations
            .map(className => `button--${className}`)
            .join(' ')}"
    >
        ${args.title}
    </button>   
`;
export const Primary = Template.bind({});

Primary.args = {
  buttonVariations: [],
  title: 'Button'
};
