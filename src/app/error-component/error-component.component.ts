import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-component',
  standalone: true,
  imports: [],
  templateUrl: './error-component.component.html',
  styleUrl: './error-component.component.scss'
})
export class ErrorComponentComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit() {
    
  }

  redirect(){
    this.router.navigate(["home"])
  }

}
