import { LanguageService } from './services/language.service';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule} from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private statusBar: StatusBar,
    private ionicStorageModule: IonicStorageModule, private languageServices: LanguageService) {
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.languageServices.setInitialAppLanguage();
    });
  }
}
