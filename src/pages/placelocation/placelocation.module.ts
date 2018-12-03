import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacelocationPage } from './placelocation';

@NgModule({
  declarations: [
    PlacelocationPage,
  ],
  imports: [
    IonicPageModule.forChild(PlacelocationPage),
  ],
})
export class PlacelocationPageModule {}
