import { Component } from '@angular/core';
import { ChatAdapter, Localization, Theme } from 'ng-chat';
import { MyAdapter } from './myadapter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat';
  userId = 1;
  theme: Theme = Theme.Dark
  localization: Localization = {
    title: 'Amigos',
    browserNotificationTitle: 'Nova mensagem para',
    loadMessageHistoryPlaceholder: 'Carregar mensagens antigas',
    messagePlaceholder: 'Digite uma mensagem',
    searchPlaceholder: 'Pesquisar',
    statusDescription: {
      away: 'Inativo',
      busy: 'Ocupado',
      offline: 'Offline',
      online: 'Online'
    }
  }

  public adapter: ChatAdapter = new MyAdapter();

}

