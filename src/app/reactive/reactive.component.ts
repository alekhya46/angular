import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  signInForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
this.signInForm = new FormGroup({
email : new FormControl(),
password: new FormControl(),
check :new FormControl()
})
  }
  onFormSubmit(){
    console.log(this.signInForm.value);
    
  }
  }


