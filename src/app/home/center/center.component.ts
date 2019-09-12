import { Component } from '@angular/core';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent {
  constructor(public dialog: MatDialog) { }

  points = [1, 2, 3, 4, 5];

  centered = false;
  disabled = false;
  unbounded = false;
  item = [1, 2, 3, 4, 5];

  radius = 30;
  color = 'red';

  openDialog() {
    const dialogRef = this.dialog.open(DialogExampleComponent);

    dialogRef.afterClosed().subscribe(result => {
      // tslint:disable-next-line:no-console
      console.log(`Dialog result: ${result}`);
    });
  }
  getNumber() {
    return new Array(5);
  }

}
