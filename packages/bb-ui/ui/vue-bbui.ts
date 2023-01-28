import type { App } from 'vue';
import CardInstall, { Card } from './card';
import DialogInstall, { Dialog } from './dialog';
const installs = [
  CardInstall,
	DialogInstall
];
export {
  Card,
	Dialog
};
export default {
  version: '1.0.9',
  install(app: App): void {
    installs.forEach((p) => app.use(p));
  }
};
