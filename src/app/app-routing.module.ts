import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumoExtensionComponent } from './componentes/consumo-extension/consumo-extension.component';
const routes: Routes = [
  { path: 'consumo-extension', component: ConsumoExtensionComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
