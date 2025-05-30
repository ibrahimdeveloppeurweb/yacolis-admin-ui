import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@service/auth/auth.service';

@Component({
  selector: 'app-no-found',
  templateUrl: './no-found.component.html',
  styleUrls: ['./no-found.component.scss']
})
export class NoFoundComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  )
  { }

  ngOnInit() {
  }

  back() {
    this.auth.removeDataToken();
    this.auth.removePermissionToken();
    this.router.navigate(['/auth/login']);
  }
}
