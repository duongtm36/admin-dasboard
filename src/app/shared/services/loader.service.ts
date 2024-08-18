import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {

    isLoading = new BehaviorSubject<boolean>(true);
    counter: number = 0;
    addQueue() {
        this.counter++;
        console.log(this.counter, 'adding 1');
        this.isLoading.next(true)
    }
    removeQueue() {
        this.counter--;
        console.log(this.counter, 'removing1');
        this.isLoading.next(this.counter > 0)
    }

    getIsLoading(){
        return this.isLoading.getValue()
    }

}

