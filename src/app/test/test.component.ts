
import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
loginForm;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['', 
      [Validators.required, Validators.minLength(5),Validators.email]],
     password :['',[Validators.required, Validators.minLength(5),Validators.maxLength]]
    })

}
get f(){
  return this.loginForm.controls
}
reac(){
  console.log(this.loginForm.value)
}

}


