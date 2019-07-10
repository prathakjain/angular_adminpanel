import { Injectable } from '@angular/core';  
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Onboard } from '../class/onboard';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators'; 



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OnboardService {

  

  // private serverUrl = "http://127.0.0.1/angular/webservices/";
  private serverUrl = "https://fads.consagous.co.in/webservices/";
  constructor(private http: HttpClient) {

  } 

  registration(data :any){
    //registration
    return this.http.post<Onboard[]>(this.serverUrl+'test/registration', data).pipe(
      catchError(this.handleError)
    );
  }

  login(logdata: any){
    return this.http.post<Onboard[]>(this.serverUrl+'test/login', logdata, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  // login(logdata: any){ 
  //   return this.http.post(this.serverUrl+'test/login', logdata, httpOptions).pipe( 
  //     map(
  //       (data : any) => {
  //         return data;
  //       }
  //     ),
  //     catchError(this.handleError)
  //   );
  // }

  userupdate(userdata: any){
    return this.http.post<Onboard[]>(this.serverUrl+'test/profile_update', userdata).pipe(
      catchError(this.handleError)
    );
  }

  getLogindata(){
    return this.http.get<Onboard[]>(this.serverUrl+'users/get_profile').pipe(
      catchError(this.handleError)
    );
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('Authorization');
  } 

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      console.log(error);
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
