import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import{RutasModule}from './rutas/rutas.module';
import { JeanComponent } from './jean/jean.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  imports: [BrowserModule, FormsModule,RutasModule],
  declarations: [AppComponent, MenuComponent, JeanComponent, ContactoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
