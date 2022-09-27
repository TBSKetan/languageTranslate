import { TranslateService } from '@ngx-translate/core';
import { LanguagePopoverPage } from './../pages/language-popover/language-popover.page';
import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  params = {
    name: 'Ketan'
  };

  constructor(private popoverCtrl: PopoverController, private alertCtrl: AlertController, private translate: TranslateService) {}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  async openLanguagePopover(ev){
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

  async showAlert(){
    const alert = await this.alertCtrl.create({
      header: this.translate.instant('ALERT.header'),
      message: this.translate.instant('ALERT.message'),
      buttons: ['OK']
    });
    alert.present();
  }

}
