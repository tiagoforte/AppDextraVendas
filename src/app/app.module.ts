import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LancheComponent } from './lanche/lanche.component';
import { IngredienteComponent } from './ingrediente/ingrediente.component';
import { IngredienteFormComponent } from './ingrediente/ingrediente-form/ingrediente-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IngredienteService } from './services/ingrediente/ingrediente.service';
import { HomeComponent } from './home/home.component';
import { LancheService } from './services/lanche/lanche.service';
import { LancheFormComponent } from './lanche/lanche-form/lanche-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LancheComponent,
    IngredienteComponent,
    IngredienteFormComponent,
    HomeComponent,
    LancheFormComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    routing
  ],
  providers: [IngredienteService, LancheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
