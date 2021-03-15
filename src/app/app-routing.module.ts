import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UsuarioComponent} from "./usuario/usuario.component";

const routes: Routes = [
  { path: 'home', loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule) },
  { path: 'usuario', loadChildren: () => import('src/app/usuario/usuario.module').then(m => m.UsuarioModule) },
  {path: "", pathMatch:"full", redirectTo:"/home"}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
