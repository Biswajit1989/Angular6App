import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';

import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'member',
    component: SearchComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'search',
        component: SearchComponent,
        canActivate: [AuthGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class MemberRoutingModule { }
