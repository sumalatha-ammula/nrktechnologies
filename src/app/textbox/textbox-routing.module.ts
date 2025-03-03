import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextboxPage } from './textbox.page';

const routes: Routes = [
  {
    path: '',
    component: TextboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextboxPageRoutingModule {}
