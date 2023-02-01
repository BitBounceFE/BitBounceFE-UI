import type { App } from 'vue';
import ButtonInstall, { BButton } from './button';
import CardInstall, { Card } from './card';
import ColInstall, { BCol } from './col';
import DialogInstall, { Dialog } from './dialog';
import InputInstall, { Input } from './input';
import MenuInstall, { Menu } from './menu';
import MessageBoxInstall, { MessageBox } from './message-box';
import RowInstall, { BRow } from './row';
import SelectInstall, { Select } from './select';
import TabPaneInstall, { BTabPane } from './tab-pane';
import TabsInstall, { BTabs } from './tabs';
import UploadInstall, { Upload } from './upload';
const installs = [
  ButtonInstall,
	CardInstall,
	ColInstall,
	DialogInstall,
	InputInstall,
	MenuInstall,
	MessageBoxInstall,
	RowInstall,
	SelectInstall,
	TabPaneInstall,
	TabsInstall,
	UploadInstall
];
export {
  BButton,
	Card,
	BCol,
	Dialog,
	Input,
	Menu,
	MessageBox,
	BRow,
	Select,
	BTabPane,
	BTabs,
	Upload
};
export default {
  version: '1.0.9',
  install(app: App): void {
    installs.forEach((p) => app.use(p));
  }
};
