import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwaggerPageRoutingModule } from './swagger-routing.module';

import { SwaggerPage } from './swagger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwaggerPageRoutingModule
  ],
  declarations: [SwaggerPage]
})
export class SwaggerPageModule {}
