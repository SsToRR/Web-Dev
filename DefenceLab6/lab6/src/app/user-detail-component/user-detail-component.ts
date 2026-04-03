import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './user-detail-component.html',
  styleUrl: './user-detail-component.css'
})
export class UserDetailComponent implements OnInit {
  user = signal<User | null>(null);
  isLoading = signal(true);
  error = signal<string | null>(null);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = Number(params.get('id'));
          this.isLoading.set(true);
          this.error.set(null);
          return this.userService.getUser(id);
        })
      )
      .subscribe({
        next: (user) => {
          this.user.set(user);
          this.isLoading.set(false);
        },
        error: () => {
          this.error.set('Unable to load user details.');
          this.isLoading.set(false);
        }
      });
  }
}
