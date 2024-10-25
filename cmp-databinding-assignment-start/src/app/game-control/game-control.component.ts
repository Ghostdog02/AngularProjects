import { Component, Output, EventEmitter, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrl: './game-control.component.css',
    // encapsulation: ViewEncapsulation.None
})
export class GameControlComponent {
    @Output() intervalFired = new EventEmitter<number>();
    tempNumber = 0;
    interval;
    isStoppedGame = false;

    onStartGame() {
        this.interval = setInterval(() => {
            this.tempNumber = this.tempNumber + 1;
            this.intervalFired.emit(this.tempNumber);
        }
            , 1000);



    }

    onPauseGame() {
        this.isStoppedGame = true;
        clearInterval(this.interval);
    }
}