import { Component } from '@angular/core';

@Component({
  selector: 'mycounter',
  standalone: true,
  imports: [],
  templateUrl: './mycounter.component.html',
  styleUrl: './mycounter.component.css'
})
export class MycounterComponent {

  num: number = 0;

  counter(num: number,op: boolean): void{
    if(op){
      this.num = num +1
    }else{
      if(num>0){
        this.num = num - 1
      }
    }
  }

}
