import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import all components
import { HomeComponent, DashboardComponent} from './home';
import { AppAuthGuard } from './app.authguard';
import { AuthGuardService } from './auth-guard.service';

// Test POC Component
import { TestComponent } from './test/test.component';

// Create array of all routes
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AppAuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AppAuthGuard, AuthGuardService]
  },
  {
    path: 'testpoc',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }