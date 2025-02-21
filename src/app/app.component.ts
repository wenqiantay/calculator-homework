import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'calculator-app';
  
  displayval= '0'
  firstValue: number = 0
  action: string | null = null

  numClick(val: string){
    if(this.displayval === '0') {
      this.displayval = val.toString();
    } else {
      this.displayval = `${this.displayval}${val}`
    }
  }

  operator(action: string) {
    this.firstValue = parseFloat(this.displayval)
    this.action = action
    this.displayval = ''

  }

  calculate() {

    const a = this.firstValue
    const b = parseFloat(this.displayval)

    let result = 0
    if (this.action === 'm'){
      result = a * b
    } else if (this.action === 'd') {
      result = a / b
    } else if (this.action === 's') {
      result = a - b
    } else if (this.action === 'a') {
      result = a + b
    }

    this.firstValue = result
    this.displayval = result.toString()
    

  }

  clear() {
    this.firstValue = 0
    this.displayval = '0'
  }

  

}
