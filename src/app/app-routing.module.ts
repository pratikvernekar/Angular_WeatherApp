import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritepageComponent } from './components/favouritepage/favouritepage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RescentpageComponent } from './components/rescentpage/rescentpage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  { path: 'home', component: HomepageComponent },
  {
    path: 'favourite',
    component: FavouritepageComponent,
  },
  {
    path: 'rescent',
    component: RescentpageComponent,
  },
  // { path: '**', component: RescentpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
