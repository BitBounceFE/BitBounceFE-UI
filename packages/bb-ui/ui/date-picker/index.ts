import type { App } from 'vue';
import DatePicker from './src/date-picker';

// 作为插件引入
DatePicker.install = function (app: App): void {
  app.component(DatePicker.name, DatePicker);
};

// 按需
export { DatePicker };

// 内部统一注册
export default {
  title: 'datepicker',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.component(DatePicker.name, DatePicker);
  }
};
