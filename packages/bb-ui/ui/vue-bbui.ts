import type { App } from 'vue';
import ButtonInstall, { BButton } from './button';
import DialogInstall, { BDialog } from './dialog';
import InputInstall, { BInput } from './input';
import LayoutInstall, { BLayout, BRow, BCol } from './layout';
import MenuInstall, { BMenu, BMenuItem, BSubMenu } from './menu';
import MessageBoxInstall, { BMessageBox } from './message-box';
import ProgressInstall, { BProgress } from './progress';
import SelectInstall, { BSelect } from './select';
import TabsInstall, { BTabs, BTabPane } from './tabs';
import UploadInstall, { BUpload } from './upload';
const installs = [
  ButtonInstall,
  DialogInstall,
  InputInstall,
  LayoutInstall,
  MenuInstall,
  MessageBoxInstall,
  ProgressInstall,
  SelectInstall,
  TabsInstall,
  UploadInstall
];
export {
  BButton,
  BDialog,
  BInput,
  BLayout,
  BRow,
  BCol,
  BMenu,
  BMenuItem,
  BSubMenu,
  BMessageBox,
  BProgress,
  BSelect,
  BTabs,
  BTabPane,
  BUpload
};
export default {
  version: '1.0.0',
  install(app: App): void {
    installs.forEach((p) => app.use(p));
  }
};
