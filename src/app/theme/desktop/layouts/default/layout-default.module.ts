import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutDefaultComponent } from './layout-default.component';
import { HeaderDefaultComponent } from './header/header-default.component';
import { FooterDefaultComponent } from './footer/footer-default.component';
import { MenuComponent } from '@src/app/theme/desktop/layouts/default/menu/menu.component';
import { IconModule } from '@src/app/components/icon/icon.module';
import { FooterIconComponent } from './footer/footer-icon/footer-icon.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatRippleModule,
    IconModule
  ],
  providers: [],
  bootstrap: [],
  declarations: [
    LayoutDefaultComponent,
    HeaderDefaultComponent,
    FooterDefaultComponent,
    FooterIconComponent,
    MenuComponent]
})
export class LayoutDefaultModule {}
