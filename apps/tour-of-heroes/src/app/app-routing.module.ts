import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: `${environment.DASHBOARD_MICROAPP_ORIGIN}/remoteEntry.js`,
        type: 'module',
        exposedModule: './Module',
      }).then((m) => m.DashboardModule),
  },
  {
    path: 'heroes',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: `${environment.HEROES_MICROAPP_ORIGIN}/remoteEntry.js`,
        type: 'module',
        exposedModule: './Module',
      }).then((m) => m.HeroesModule),
  },
  // {
  //   path: 'messages',
  //   component: WebComponentWrapper,
  //   data: {
  //     type: 'script',
  //     remoteEntry: 'http://localhost:4203/remoteEntry.js',
  //     exposedModule: './messages-wc',
  //     remoteName: 'messages_microapp',
  //     elementName: 'messages-element',
  //   } as WebComponentWrapperOptions,
  // },
  {
    path: 'calendar',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: 'http://localhost:4204/remoteEntry.js',
      exposedModule: './calendar-wc',
      remoteName: 'calendar_microapp',
      elementName: 'calendar-element',
    } as WebComponentWrapperOptions,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
