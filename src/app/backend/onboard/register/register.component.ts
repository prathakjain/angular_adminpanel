import { Component, OnInit } from '@angular/core';
import { OnboardService } from '../../services/onboard.service';
import { Onboard } from '../../class/onboard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private onbaordservice: OnboardService) { }
  message = "";
  error = "";
  register = new Onboard();

  ngOnInit() {
  }

  onSubmit(){

    let formdata: any = new FormData();
    formdata.append('phoneno', this.register.phoneno.trim());
    formdata.append('email', this.register.email.trim());
    formdata.append('password', this.register.password.trim());
    formdata.append('user_pic', this.selectedFile);
 
    this.onbaordservice.registration(formdata).subscribe(
      ( data : any ) => { 
        console.log(data);
        if(data['status'] == 1){
          this.message =  data['message']
        } else {
          this.message = data['message']; 
        }
      },
      error => this.error = error
    )

  }

  selectedFile : string;
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

}
