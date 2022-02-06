import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formsgroup',
  templateUrl: './formsgroup.component.html',
  styleUrls: ['./formsgroup.component.css']
})
export class FormsgroupComponent implements OnInit {
  signInForm : FormGroup; 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.signInForm = new FormGroup({

    //   email: new FormControl(),
    //   username : new FormControl(),
    //  check : new FormControl(),
    //  skills: new FormGroup({
    //    skill :new FormControl(),
    //    yoe : new FormControl(),
    //    levelCheck : new FormControl()
    //  })
    // })
       this.signInForm = this.fb.group({
        //  email:['',[Validators.email,Validators.required]],
         username: ['',[
           Validators.required,
           Validators.minLength(5),
           Validators.maxLength(10)
        ]],
        password: ['',[
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10)
       ]],
       
        Check:['',[Validators.required]],
        skills:this.fb.group({
        skills:[''],
        yoe:[''],
        levelCheck:['']

       }),

     hobbies: this.fb.array([])
  })
}
get hobbyControls(){
  return (<FormArray>this.signInForm.get('hobbies')).controls
}
addHobby(){
  const control = this.fb.control('',[Validators.required]);
  (<FormArray>this.signInForm.get('hobbies')).push(control)

}

    
get f(){
  return this.signInForm.controls;
}

onFormSubmit(){
    console.log(this.signInForm.value);
    
  }



}
