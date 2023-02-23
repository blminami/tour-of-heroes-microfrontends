import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Tour of Heroes';

  item: WebComponentWrapperOptions = {
    type: 'script',
    remoteEntry: 'http://localhost:4203/remoteEntry.js',
    exposedModule: './messages-wc',
    remoteName: 'messages_microapp',
    elementName: 'messages-element',
  };
}
