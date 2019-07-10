import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { BackendComponent } from './backend.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BackendRouting } from './backend.routing';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { PostaddComponent } from './post/postadd/postadd.component';
import { PostlistComponent } from './post/postlist/postlist.component';
import { PostupdateComponent } from './post/postupdate/postupdate.component';
import { LoginComponent } from './onboard/login/login.component';
import { RegisterComponent } from './onboard/register/register.component';
import { ForgotpasswordComponent } from './onboard/forgotpassword/forgotpassword.component';
import { WithoutSidebarComponent } from './layout/without-sidebar/without-sidebar.component';

@NgModule({
  declarations: [
    BackendComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PostaddComponent,
    PostlistComponent,
    PostupdateComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    WithoutSidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BackendRouting
  ],
  providers: []
})
export class BackendModule { }
