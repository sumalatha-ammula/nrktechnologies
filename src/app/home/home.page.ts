import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorsService } from '../errors.service';
import { IonButton, IonInput } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  public isclick= false;
  public usernames: any;
  public passwords: any;

  constructor( public router:Router,
    public alert:ErrorsService
  ) {}
  @ViewChild('password', { static: false }) ionInput!: IonInput;
  @ViewChild('usernamefield', { static: false }) ionInput1!: IonInput;
  @ViewChild('loginButton', { read: ElementRef }) loginButton!: ElementRef;

  ngAfterViewInit() {
    setTimeout(() => {
      const nativeInput = this.ionInput.getInputElement();
      nativeInput.then(input => input.setAttribute('id', 'password'));
    });
    setTimeout(() => {
      const nativeInput = this.ionInput1.getInputElement();
      nativeInput.then(input => input.setAttribute('id', 'username'));
    });
     
  }

  
  isclicked(){
    this.isclick=!this.isclick
  }
  login(){
    if(this.usernames=="admin" && this.passwords=="admin@1234"){
      this.router.navigateByUrl('/login');

  }
  if(this.usernames!="admin" && this.passwords!="admin@1234"){
    this.alert.showErrorToast("Inavalid  Username and Password  ");

}
if(this.usernames=="" || this.usernames==undefined){
  this.alert.showErrorToast(" Enter Username ");

}
if(this.passwords=="" || this.passwords==undefined){
  this.alert.showErrorToast(" Enter Password ");

}
}
}
