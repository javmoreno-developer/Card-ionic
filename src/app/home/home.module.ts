import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PopComponent } from './pop/pop.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    
  ],
  
  declarations: [HomePage, ProfileComponent,PopComponent],
  exports: [ProfileComponent,PopComponent]
})
export class HomePageModule {}
