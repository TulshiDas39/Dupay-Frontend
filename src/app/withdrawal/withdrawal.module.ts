import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferRequestComponent } from './components/transfer-request/transfer-request.component';
import { RouterModule, Routes } from '@angular/router';
import { WithdrawRequestComponent } from './components/withdraw-request/withdraw-request.component';
import { AdminGuard } from '../core/security-services/admin.guard';
import { MerchantGuard } from '../core/security-services/merchant.guard';
import { MatTableModule, MatSelectModule } from '@angular/material';


const routes:Routes=[
  {
    path:'transfer-request',
    component:TransferRequestComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'withdraw-request',
    component:WithdrawRequestComponent,
    canActivate:[MerchantGuard]

  },
  
]

@NgModule({
  declarations: [TransferRequestComponent, WithdrawRequestComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSelectModule,
    RouterModule.forChild(routes),
  ]
})
export class WithdrawalModule { }
