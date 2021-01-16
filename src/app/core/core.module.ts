import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainPageComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule],
  exports: [HeaderComponent, FooterComponent, MainPageComponent],
})
export class CoreModule {}
