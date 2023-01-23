import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PosesListComponent } from '@src/app/pages/poses/list/poses-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material';
import { PosesItemComponent } from '@src/app/pages/poses/item/poses-item.component';
import { PipesModule } from '@src/app/pipes/pipes.module';
import { RouteNames } from '@src/app/route-names';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatGridListModule,
    PipesModule,
    RouterModule.forChild([
      {
        path: '',
        component: PosesListComponent,
        data: {
          title: 'Postures',
          goBack: true
        }
      },
      {
        path: ':slug',
        component: PosesItemComponent,
        data: {
          title: 'Posture details',
          goBack: true
        }
      }
    ])
  ],
  declarations: [PosesListComponent, PosesItemComponent],
  providers: [],
  bootstrap: []
})
export class PosesModule {}
