import { Component, OnInit } from '@angular/core';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  userName: string;
  userPosition = 'user-icon-right';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.userPosition = 'user-icon-right';
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Set your name'
    };

    const dialogRef = this.dialog.open(UserDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.userName = data.userName;
        this.userPosition = 'user-icon-left';
      }
    });
  }
}
