import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent {

  userName = 'vasile';
  userPosition = 'user-icon-right';

  constructor() {
  }

  userHasName() {
    this.userName
      ? this.userPosition = 'user-icon-left'
      : this.userPosition = 'user-icon-right';
  }

}
