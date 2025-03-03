import { Component, QueryList, ViewChildren } from '@angular/core';
import { IonRouterOutlet, MenuController, Platform, AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public lastTimeBackPress = 0;
  public timePeriodToExit = 2000;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  constructor(private router: Router,  
    public alertController: AlertController,    
    private platform: Platform,
    private location: Location,) {}
  ngOnInit(){
this.backButtonEvent();
  }
  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.routerOutlets.forEach(async (outlet: IonRouterOutlet) => {
        if (this.router.url != '/login' ) {
          // await this.router.navigate(['/']);
          await this.location.back();
        } else if (this.router.url === '/login' ) {
          if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
            this.lastTimeBackPress = new Date().getTime();
            this.presentAlertConfirm();
          } else {
            navigator['app'].exitApp();
          }
        }
      });
    });
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      message: 'Are you sure you want to exit the app?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => { }
      }, {
        text: 'Close App',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    });
  
    await alert.present();
  }
  
}
