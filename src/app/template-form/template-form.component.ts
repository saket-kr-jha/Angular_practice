import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
    
  }

  register(regdata : NgForm){
    console.log(regdata.value);
  }

}
