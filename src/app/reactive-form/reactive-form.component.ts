import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit {

  regForm! : FormGroup;

  constructor(private _fb : FormBuilder){}

  ngOnInit(){
    // this.regForm = new FormGroup({
    //   id: new FormControl(),
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   mobile: new FormControl(),
    // })

    this.regForm = this._fb.group({
      id: new FormControl(),
      firstName: ['', Validators.required],
      lastName: new FormControl(),
      email: new FormControl(),
      mobile: new FormControl(),

    });
  }

  register(){
    console.log(this.regForm.value);
  }

}
