import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { LayoutComponent } from './layouts/layout.component';
import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { NoFoundComponent } from '@shared/no-found/no-found.component';
// import { AuthGuard } from './interceptor/auth.guard';
// import { LoginInterceptor } from './interceptor/login.interceptor';
// import { LogoutGuard } from './interceptor/logout.guard';


const routes: Routes = [
  { path: "", redirectTo: "admin/dashbaord/dash", pathMatch: "full" },
  { path: 'admin', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
  { path: 'auth', component: AuthlayoutComponent, loadChildren: () => import('./account/account.module').then(m => m.AccountModule)},
  {
    path: "admin/parametre/users",component: LayoutComponent, loadChildren: ()=>import("./security/utilisateur/utilisateur.module").then(module => module.UtilisateurModule),
  },
//   { path: 'pages',component: AuthlayoutComponent, loadChildren: () => import('./extraspages/extraspages.module').then(m => m.ExtraspagesModule)},
{ path: "**", component: NoFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
