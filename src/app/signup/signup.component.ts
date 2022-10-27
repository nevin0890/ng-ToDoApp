import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private api: ApiService,private router:Router) { }
  
  name = '';
  dob = '';
  phone = '';
  place = '';
  email = '';
  password = '';
  confirmpass= '';

  addUserDetails = () => {
    let user = {
      name: this.name,
      dob: this.dob,
      phone: this.phone,
      place: this.place,
      email: this.email,
      password: this.password
    }
    this.api.signUp(user).subscribe((data: any) => {
      console.log(data);
      

    })
    this.name = ''
    this.dob = ''
    this.phone = ''
    this.place = ''
    this.email = ''
    this.password = ''
    this.confirmpass = ''
    alert('User added successfully');
    this.router.navigate(['/login'])
  }



  ngOnInit(): void {
  }

}
