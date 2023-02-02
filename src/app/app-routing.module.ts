import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>
    import('./modules/account/account.module').then((m)=>m.AccountModule)
  },
  {
    path:'forget-password',
    loadChildren:()=>
    import('./modules/account/forget-password/forget-password.module').then((m)=>m.ForgetPasswordModule)
  },
  {
    path:'dashboard',
    loadChildren:()=>
    import('./modules/dashboard/dashboard.module').then((m)=>m.DashboardModule)

  },
  {
    path:'**', component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
