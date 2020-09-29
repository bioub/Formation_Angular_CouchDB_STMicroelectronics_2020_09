import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', // URL sans le slash de départ
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'about', // URL sans le slash de départ
    component: AboutComponent,
    data: {
      title: 'About'
    }
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: 'Not Found'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
