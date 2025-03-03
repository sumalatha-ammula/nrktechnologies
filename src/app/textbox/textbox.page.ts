import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import SwaggerUI from 'swagger-ui-dist';
@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.page.html',
  styleUrls: ['./textbox.page.scss'],
  standalone:false

})
export class TextboxPage implements OnInit {
  swaggerUrl = 'https://petstore.swagger.io/v2/swagger.json';
  public id:any;
  public iselements: any;
  constructor(public activeroute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activeroute.snapshot.paramMap.get('id')
    console.log(this.id)
if(this.id=='t'){
  this.iselements="This is a sample page"
 
}
if(this.id=='w'){
  this.iselements='This is a sample page'
}
if(this.id=='m'){
  this.iselements='Welcome to the New Window'
}
  }
  
}

