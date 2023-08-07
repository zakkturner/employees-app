import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HttpCacheInterceptorModule } from '@ngneat/cashew';
import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';
import { CardComponent } from './components/card/card.component';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees/:id', component: EmployeeDetailComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    CardComponent,
    EmployeeItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpCacheInterceptorModule.forRoot(),
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
