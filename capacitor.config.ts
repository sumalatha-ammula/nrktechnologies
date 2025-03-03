import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'nrktechnologies',
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
    webContentsDebuggingEnabled: true
  }
};

export default config;
