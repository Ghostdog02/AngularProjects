import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    onChangeActiveToInactive() {
        this.inactiveToActiveCounter++;
        console.log('Active to inactive' + this.inactiveToActiveCounter);
    }

    onChangeInactiveToActive() {
        this.activeToInactiveCounter++;
        console.log('Inactive to active' + this.activeToInactiveCounter);
    }
}