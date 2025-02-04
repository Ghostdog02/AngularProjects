import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersService,
    private counterService: CounterService
  ) { }

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
  }

  // @Output() userSetToInactive = new EventEmitter<number>();

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);

  }

}
