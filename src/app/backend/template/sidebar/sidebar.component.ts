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
  error : string;
  message : string;
  ngOnInit() {
    this.onboardservice.getLogindata().subscribe(
      ( data : any ) => { 
        console.log(data);
        if(data['status'] == 1){ 
          
        } else {
          this.message = data['message']; 
        }
      },
      error => this.error = error
    )
  }

  logout(){
    this.onboardservice.logout();
    this.router.navigate(['/login']);
  }

}
