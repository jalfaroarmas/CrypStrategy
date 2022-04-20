import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Import Moduls
import { ChartDashboardComponent } from './chart-dashboard/chart-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListSectionComponent } from './list-section/list-section.component';
//Import The Material Angular
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CoinmaketComponent } from './coinmaket/coinmaket.component';
import { MatTableModule } from '@angular/material/table';
//Import job the  API and Charts
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const routes: Routes = [{
  path: "",
  component: DashboardComponent,
  children: [{
    path: "coinmaket",
    component: CoinmaketComponent
  }]
}]

@NgModule({
  declarations: [
    DashboardComponent,
    CoinmaketComponent,
    ChartDashboardComponent,
    ListSectionComponent,
  
     ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
    PerfectScrollbarModule,
   
  
   
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],


})
export class DashboardModule { }
