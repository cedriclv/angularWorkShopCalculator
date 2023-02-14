import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  public numberOne: number;
  public numberTwo: number;
  public result: number;
  public operator: string;

  constructor(){
    this.numberOne = 10;
    this.numberTwo = 12;
    this.result = 0;
    this.operator = "+";
  }

  generateRandom(end: number){
    return Math.floor(Math.random()*end);
  }

  generateRandomOne(){
    this.numberOne = this.generateRandom(200);
    this.calculate()
  }

  generateRandomTwo(){
    this.numberTwo = this.generateRandom(200);
    this.calculate();
  }

  substract(){
    this.operator = "-";
    this.calculate()
  }
  add(){
    this.operator = "+";
    this.calculate()
  }
  multiply(){
    this.operator = "*";
    this.calculate()
  }
  divide(){
    this.operator = "/";
    this.calculate()
  }

  calculate(){
    switch(this.operator){
      case("+"):
        this.result = Math.round((this.numberOne + this.numberTwo)*10)/10;
        break;
      case("-"):
        this.result = Math.round((this.numberOne - this.numberTwo)*10)/10;
        break;
      case("*"):
        this.result = Math.round((this.numberOne * this.numberTwo)*10)/10;
        break;
      case("/"):
        this.result = Math.round((this.numberOne / this.numberTwo)*10)/10;
        break;
    }
  }


}
