import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { REQUEST_ROUTES } from './request.routes';

@NgModule({
  imports: [RouterModule.forChild(REQUEST_ROUTES)],
})
export class RequestModule { }