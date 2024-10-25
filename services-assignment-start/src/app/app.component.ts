import { Component } from '@angular/core';
import { CounterService } from './shared/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // changes = [];
  // constructor(private counterService: CounterService) { }

  // ngOnInit(): void {
  //   this.changes = this.counterService.changes;
  // }
}
