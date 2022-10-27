import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiService,private router:Router) { }

  email = '';
  password = '';

  getUserDetails = () => {
    let user = {
      email: this.email,
      password: this.password
    }
    this.api.UserLogin(user).subscribe((data: any) => {
      console.log(data);
      if(data.length > 0) {
        alert('Login successful');
        this.router.navigate(['/homepage']);

      }
      else {
        alert('Login failed');
      }

    })
  }
 
  
    
    

  ngOnInit(): void {
  }

}
