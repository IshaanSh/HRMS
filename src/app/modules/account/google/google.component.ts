import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit {
  show=true;

  loginCredential:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
