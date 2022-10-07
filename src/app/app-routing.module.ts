import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TabContainerComponent } from './tab-container/tab-container.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user-details/:userName', component: TabContainerComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
