import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouteNotFoundComponent } from './route-not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRippleModule } from '@angular/material';

@NgModule({
  declarations: [RouteNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RouteNotFoundComponent,
        data: {
          goBack: false
        }
      }
    ]),
    FlexLayoutModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: []
})
export class RouteNotFoundModule {}
