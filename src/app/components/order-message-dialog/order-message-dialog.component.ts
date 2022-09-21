import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-message-dialog',
  templateUrl: './order-message-dialog.component.html',
  styleUrls: ['./order-message-dialog.component.scss']
})
export class OrderMessageDialogComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialog.closeAll();
    this.router.navigate(['']);
  }
}
