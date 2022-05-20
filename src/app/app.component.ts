import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Railana Amoras";

  userData = {
    email: 'fulano@gmail.com',
    role: 'Admin'
};

  title = 'trai-angular';
}
