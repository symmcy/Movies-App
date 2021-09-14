import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

