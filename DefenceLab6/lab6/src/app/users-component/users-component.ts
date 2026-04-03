import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './users-component.html',
  styleUrl: './users-component.css'
})
export class UsersComponent implements OnInit {
  users = signal<User[]>([]);
  isLoading = signal(true);
  error = signal<string | null>(null);

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users.set(users);
        this.isLoading.set(false);
      },
      error: () => {
        this.error.set('Unable to load users. Please try again.');
        this.isLoading.set(false);
      }
    });
  }
}
