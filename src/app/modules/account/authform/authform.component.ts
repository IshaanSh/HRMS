import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COMMON_EMAIL, COMMON_VALIDATION } from 'src/app/Validations/validation';

@Component({
  selector: 'app-authform',
  templateUrl: './authform.component.html',
  styleUrls: ['./authform.component.scss']
})
export class AuthformComponent implements OnInit {
  loginForm!:FormGroup;
  hide=true;
  loginCredential:boolean=true;

  constructor(private fb :FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          COMMON_VALIDATION,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$[A-Z]*'),
          COMMON_EMAIL,
        ],
      ],
      password: ['', [COMMON_VALIDATION, Validators.minLength(6)]],
      phone_id: ['122'],
      os_type: [''],
    });
  }
}
