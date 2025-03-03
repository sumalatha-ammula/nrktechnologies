import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextboxPageRoutingModule } from './textbox-routing.module';

import { TextboxPage } from './textbox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextboxPageRoutingModule
  ],
  declarations: [TextboxPage],
  exports: [TextboxPage], 
  
})
export class TextboxPageModule {}
