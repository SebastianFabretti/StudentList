import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesListadoComponent } from './components/estudiantes-listado/estudiantes-listado.component';
import { RoutingComponent } from './components/routing/routing.component';

const routes: Routes = [

  {path: 'EstudiantesListadoComponent', component: EstudiantesListadoComponent},
  {path: 'RoutingTestComponent', component: RoutingComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
