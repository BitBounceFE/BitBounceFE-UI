import type { App } from 'vue';
import TabPane from './src/tab-pane';

const BTabPane = {
  install: function (app: App): void {
    app.component(TabPane.name, TabPane);
  },
  ...TabPane
};

export default BTabPane;
export { BTabPane };
