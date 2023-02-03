import type { App } from 'vue';
import Row from './src/components/row/row';
import Col from './src/components/col/col';

const BRow = {
  install: function (app: App): void {
    app.component(Row.name, Row);
  },
  ...Row
};
const BCol = {
  install: function (app: App): void {
    app.component(Col.name, Col);
  },
  ...Col
};
export { BRow, BCol };

export default {
  title: 'Layout 布局',
  category: '布局',
  status: '100%',
  install(app: App): void {
    app.component(Row.name, Row);
    app.component(Col.name, Col);
  }
};
