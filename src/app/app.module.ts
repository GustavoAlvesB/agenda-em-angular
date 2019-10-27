import { FormGroup, FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { RouterModule, ActivatedRoute } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    FormGroup,
    FormBuilder,
    RouterModule,
    ActivatedRoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
