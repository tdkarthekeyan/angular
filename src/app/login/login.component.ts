import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  communicationModes: string[];
  genders: string[];

  constructor() { }

  ngOnInit() {
    this.genders = [ 'Male', 'Female', 'Other' ];
    this.communicationModes = [ 'Phone', 'Email' ];
  }

}