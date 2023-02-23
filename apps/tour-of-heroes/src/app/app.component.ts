import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Tour of Heroes';

  item: WebComponentWrapperOptions = {
    type: 'script',
    remoteEntry: `${environment.MESSAGES_MICROAPP_ORIGIN}/remoteEntry.js`,
    exposedModule: './messages-wc',
    remoteName: 'messages_microapp',
    elementName: 'messages-element',
  };
}
