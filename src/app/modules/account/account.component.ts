import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  loginForm!:FormGroup;
  hide=true;
  show=true;
  constructor( private fb:FormBuilder) { }
loginCredential:boolean=true;
  ngOnInit(): void {

  }
  credential(){
    this.loginCredential =false;
    this.show=false;
  }
  google(){
    this.loginCredential =true;
    this.show=true;


  }
}





