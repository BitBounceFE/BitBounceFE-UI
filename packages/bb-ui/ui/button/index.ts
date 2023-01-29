import type { App } from 'vue';
import Button from './src/button';

const BButton = {
  install: function (app: App): void {
    app.component(Button.name, Button);
  },
  ...Button
};

export default BButton;

export { BButton };
