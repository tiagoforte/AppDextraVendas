import { LancheComponent } from './lanche/lanche.component';
import { IngredienteComponent } from './ingrediente/ingrediente.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { IngredienteFormComponent } from './ingrediente/ingrediente-form/ingrediente-form.component';
import { HomeComponent } from './home/home.component';
import { LancheFormComponent } from './lanche/lanche-form/lanche-form.component';


const APP_ROUTES: Routes = [
    { path: 'ingredientes', component: IngredienteComponent },    
    { path: 'ingredientes/:id', component: IngredienteFormComponent },   
    { path: 'lanches', component: LancheComponent },      
    { path: 'lanches/:id', component: LancheFormComponent },             
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

