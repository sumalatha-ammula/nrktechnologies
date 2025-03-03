import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwaggerPage } from './swagger.page';

const routes: Routes = [
  {
    path: '',
    component: SwaggerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwaggerPageRoutingModule {}
