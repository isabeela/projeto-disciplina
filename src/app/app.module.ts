import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { NotasComponent } from './notas/notas.component';

import { ManutencaoService } from './manutencao.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'disciplina', component: DisciplinaComponent },
      { path: 'notas', component: NotasComponent }
    ])
  ],

  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    NavbarComponent,
    DisciplinaComponent,
    NotasComponent
  ],
  bootstrap: [AppComponent],
  providers: [ManutencaoService]
})
export class AppModule {}
