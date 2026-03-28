// js/pnotify.js
import { alert, notice, info, success, error, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

defaultModules.set(PNotifyMobile, {});

// Експортуємо готові функції
export default {
  alert,
  notice,
  info,
  success,
  error,
};