import { Component, OnInit } from '@angular/core';
import { AuthService } from '@service/auth/auth.service';
import { UserService } from '@service/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Steex';
  user: any;

  constructor(
    private auth: AuthService,
  ) {
    this.user = this.auth.getDataToken() ? this.auth.getDataToken() : null;
  }
   ngOnInit() {}
}
