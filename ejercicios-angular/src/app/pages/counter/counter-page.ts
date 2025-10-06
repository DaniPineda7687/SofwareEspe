import { CurrencyPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { delay } from "rxjs";


@Component({
    templateUrl: './counter-page.html',
    styleUrl: './counter-page.css', 
    changeDetection: ChangeDetectionStrategy.OnPush,   
})
export class CounterPageComponent {
    counter : number = 0; 
    counterSignal = signal(0);

    constructor() {
        setInterval(()=>{
            this.counter += 1;
            this.counterSignal.update((currentValue)=>currentValue+1); // est linea es la que actualiza el reenderizado
            console.log("Se actualizo el counter.");
        }, 1000)
    }

    add(value: number){
        this.counter += value;
        this.counterSignal.update((currentValue)=>currentValue+value);
    }
    decrease(value: number){
        this.counter -= value;
        this.counterSignal.update((currentValue)=>currentValue-value);
    }
    reset(){
        this.counter = 0;
        this.counterSignal.set(0);
    }
}