
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.6770c5d0385a4a71a4b1c2f7a6a68412',
  appName: 'imaar-home-repair-hub',
  webDir: 'dist',
  server: {
    url: 'https://6770c5d0-385a-4a71-a4b1-c2f7a6a68412.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  // تكوينات إضافية اختيارية
  backgroundColor: '#ffffff',
  // تعريب واجهة التطبيق
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#ffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP"
    }
  }
};

export default config;
