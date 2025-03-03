import { Injectable } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {


  public mediapath:any;

  public closewd: number | undefined;
  public timecount: any;
  public closetime: any;
  public intevaltimer:any = 6.75;

  constructor(public toastController: ToastController,    public modalController: ModalController,
    ) { }
    async showErrorToast(data: any) {
      let toast = this.toastController.create({
        message: data,
        duration: 3000,
        position: 'bottom'
      });
  
      (await toast).present();
    }
  
  
  
  
  
 async closeModal(f:any){
  this.closewd = 1;
  if(this.timecount > this.closetime || f ==1){
    this.closewd = 0;
    clearInterval(this.intevaltimer);
    this.modalController.dismiss({
      'dismissed': true
    });
  }  
 }}
