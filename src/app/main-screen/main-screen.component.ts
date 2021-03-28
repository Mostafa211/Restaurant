import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  selectedcategory:any ='1';
  selectedsubcategory:any;
  quantity:any= null;
  combo:any =false;
  spicy:any =false;
  
  categories:Array<any> = [
    {name: 'Soup' , categoryId: '1'},
    {name: 'Main dish' , categoryId: '2'},
    {name: 'Dessert' , categoryId: '3'},
    {name: 'Beverage' , categoryId: '4'},
  ];

  contents:any = {
    '1': ["Chicken soup" , "Mushroom soup" , "Seafood soup" , "Tomato soup"],
    '2': ["Country chicken" , "T-bone steak" , "Seafood platter" , "Pasta"],
    '3': ["Cheese cake" , "Molten cake" , "Ice cream" , "Honey cake"],
    '4': ["Soda" , "Coffee" , "Milkshake" , "Tea"],
  };

  prices:any = {
    'Chicken soup': 35,
    'Mushroom soup': 30,
    'Seafood soup': 50,
    'Tomato soup': 25,
    'Country chicken': 80,
    'T-bone steak': 120,
    'Seafood platter': 150,
    'Pasta': 70,
    'Cheese cake': 35,
    'Molten cake': 40,
    'Ice cream': 25,
    'Honey cake': 35,
    'Soda': 20,
    'Coffee': 25,
    'Milkshake': 30,
    'Tea': 15,
  };

  items:any = [];

  totalAll:any=0;
  
  

  constructor() { }

  ngOnInit(): void {
  }

  clickI(d:any){
    console.log(d);
  }

}
