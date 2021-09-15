import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { NotasComponent } from './notas/notas.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    NavbarComponent,
    DisciplinaComponent,
    NotasComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
