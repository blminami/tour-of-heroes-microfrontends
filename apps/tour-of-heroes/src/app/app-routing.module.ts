import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  loadRemoteEntry,
  loadRemoteModule,
} from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        type: 'module',
        exposedModule: './Module',
      }).then((m) => m.DashboardModule),
  },
  {
    path: 'heroes',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        type: 'module',
        exposedModule: './Module',
      }).then((m) => m.HeroesModule),
  },
  {
    path: 'messages',
    loadComponent: () =>
      loadRemoteModule({
        type: 'script',
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        remoteName: 'messages',
        exposedModule: './Messages',
      }).then((m) => m.Messages),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
