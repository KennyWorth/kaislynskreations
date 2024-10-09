import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OrderDialogComponent } from 'src/app/Components/Modals/order-dialog/order-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  closed: boolean = false;

  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef: MatDialogRef<OrderDialogComponent> = this.dialog.open(OrderDialogComponent, {
      width: '90vw',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.componentInstance.closeDialog.subscribe(() => {
      dialogRef.close();
    });
  }
  
}