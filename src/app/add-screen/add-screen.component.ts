import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-screen',
  templateUrl: './add-screen.component.html',
  styleUrls: ['./add-screen.component.css']
})
export class AddScreenComponent implements OnInit {

  categories:Array<any> = [
    {name: 'Soup' , categoryId: '1'},
    {name: 'Main dish' , categoryId: '2'},
    {name: 'Dessert' , categoryId: '3'},
    {name: 'Beverage' , categoryId: '4'},
  ];

  constructor() { }

  onSubmit(contactForm:any) {
    console.log(contactForm.value);
  }


  ngOnInit(): void {
  }

}
