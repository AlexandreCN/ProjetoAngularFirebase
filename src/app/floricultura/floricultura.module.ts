import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloriculturaPageRoutingModule } from './floricultura-routing.module';

import { FloriculturaPage } from './floricultura.page';
import { MenuModule } from '../shared/components/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloriculturaPageRoutingModule,
    MenuModule
  ],
  declarations: [FloriculturaPage]
})
export class FloriculturaPageModule {}
