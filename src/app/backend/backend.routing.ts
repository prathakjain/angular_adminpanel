import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guard/auth.guard';

import { BackendComponent } from './backend.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostlistComponent } from './post/postlist/postlist.component';
import { PostaddComponent } from './post/postadd/postadd.component';
import { LoginComponent } from './onboard/login/login.component';
import { RegisterComponent } from './onboard/register/register.component';
import { ForgotpasswordComponent } from './onboard/forgotpassword/forgotpassword.component';
import { WithoutSidebarComponent } from './layout/without-sidebar/without-sidebar.component';

const routes: Routes = [
	{ path: "login", component: WithoutSidebarComponent, 
		children: [
			{ path: '', component: LoginComponent }
	  	]
	},
	{ path: "register", component: WithoutSidebarComponent,
		children: [
			{ path: '', component: RegisterComponent }
	  	]
	},
	{ path: "forgot", component: WithoutSidebarComponent,
		children: [
			{ path: '', component: ForgotpasswordComponent }
		]
	},
	{
		path: "admin",
		component: BackendComponent,
		children :[
			{ path: '', component: DashboardComponent, canActivate: [AuthGuard] },
			{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
			{ path: 'posts', component: PostlistComponent, canActivate: [AuthGuard]  },
			{ path: 'posts/add', component: PostaddComponent, canActivate: [AuthGuard] }
		]
	}
];

export const BackendRouting = RouterModule.forRoot(routes);