import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { LayoutComponent } from './layouts/layout.component';
import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { NoFoundComponent } from '@shared/no-found/no-found.component';
import { AuthGuard } from '@guard/auth.guard';
import { NoAuthGuard } from '@guard/no-auth.guard';



const routes: Routes = [
  { path: "", redirectTo: "admin/dashbaord/dash", pathMatch: "full" },
  { path: 'admin', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [AuthGuard]
  },
  { path: 'auth', component: AuthlayoutComponent, loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
    canActivate: [NoAuthGuard] 
  },
  {
    path: "admin/parametre/users",component: LayoutComponent, loadChildren: ()=>import("./security/utilisateur/utilisateur.module").then(module => module.UtilisateurModule),
  },
{ path: "**", component: NoFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
