import { Component, OnInit } from '@angular/core';
import { OnboardService } from '../../services/onboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private onboardservice: OnboardService, private router: Router) { }

  ngOnInit() {

  }

  logout(){
    this.onboardservice.logout();
    this.router.navigate(['/login']);
  }

}
