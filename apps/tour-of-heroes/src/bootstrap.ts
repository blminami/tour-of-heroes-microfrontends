import { AppModule } from './app/app.module';
import { bootstrap } from '@angular-architects/module-federation-tools';

bootstrap(AppModule, {
  production: false,
  appType: 'shell',
});
