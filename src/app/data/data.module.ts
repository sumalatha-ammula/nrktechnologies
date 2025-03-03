import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataPageRoutingModule } from './data-routing.module';

import { DataPage } from './data.page';
import { TextboxPageModule } from '../textbox/textbox.module';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataPageRoutingModule,
    TextboxPageModule,
    FooterPageModule
    
  ],
  declarations: [DataPage]
})
export class DataPageModule {}
