import { MerchantGuard } from './../core/security-services/merchant.guard';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantListComponent } from './components/merchant-list/merchant-list.component';
import { MerchantRequestsComponent } from './components/merchant-requests/merchant-requests.component';
import { MerchantNotificationComponent } from './components/merchant-notification/merchant-notification.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import {PasswordModalService} from "./services/password-modal.service";
import { AdminGuard } from '../core/security-services/admin.guard';
import { AuthGuard } from '../core/security-services/auth.guard';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { NotifyMerchantComponent } from './components/notify-merchant/notify-merchant.component';

const routes:Routes=[
  {
    path:'merchant-list',
    component:MerchantListComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'merchant-request',
    component:MerchantRequestsComponent,
    canActivate:[AdminGuard]

  },
  {
    path:'merchant-notification',
    component:MerchantNotificationComponent,
    canActivate:[MerchantGuard]
  },
  {
    path:'notify-merchant',
    component:NotifyMerchantComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'profile',
    component:UserProfileComponent
  }
]

@NgModule({
  declarations: [MerchantListComponent, MerchantRequestsComponent, MerchantNotificationComponent, UserProfileComponent, PasswordChangeComponent, NotifyMerchantComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [ PasswordModalService ],
  entryComponents: [ PasswordChangeComponent,DialogComponent]

})
export class UserModule { }
