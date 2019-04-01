import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcom',
  templateUrl: './welcom.component.html',
  styleUrls: ['./welcom.component.css']
})
export class WelcomComponent implements OnInit {

registerForm:FormGroup = new FormGroup({
  email:new FormControl(null,[Validators.email,Validators.required]),
  password:new FormControl(null,Validators.required),
  cpass:new FormControl(null,Validators.required),
})


loginForm:FormGroup = new FormGroup({
  email:new FormControl(null,[Validators.email,Validators.required]),
  password:new FormControl(null,Validators.required),
});

constructor(private_router:Router){}

  ngOnInit() {
  }


register(){
if(! this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value)){
console.log('invalid form');
return;
}

console.log(JSON.stringify(this.registerForm.value));
}




login(){
  if(!this.loginForm.valid){
  console.log('invalid form');
  return;
  }
  
  console.log(JSON.stringify(this.loginForm.value));
  }
  }
