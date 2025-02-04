import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersService,
    private counterService: CounterService
  ) { }

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
  }

  // @Output() userSetToInactive = new EventEmitter<number>();

  onSetToActive(id: number) {
    this.usersService.setToActive(id);

  }
}
