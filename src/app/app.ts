import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  value=0;
  handleIncrement(){
    this.value=this.value+1;
  }
  handleDecrement(){
    this.value=this.value-1;
  }

  handleCounter(v:number){
    if(v==1){
      this.value=this.value+1;
    }
    else if(v==2){
      
        this.value=this.value<=0?0:this.value-1;
    }
    else{
      this.value=0;
    }


  }
}
