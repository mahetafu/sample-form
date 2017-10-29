import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { LoginComponent }   from './login/login.component';
import { RegistryComponent }   from './registry/registry.component';
import { PageNotFoundComponent }   from './page-not-found/page-not-found.component';

 
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registry', component: RegistryComponent },

  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot( appRoutes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}