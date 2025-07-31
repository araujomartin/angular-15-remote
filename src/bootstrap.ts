import { bootstrap } from '@angular-architects/module-federation-tools';

import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

bootstrap(AppModule, {
  production: false,
});
