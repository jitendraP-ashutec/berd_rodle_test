import { Component, OnInit } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { AppComponentDialog } from '../add-user/add-user.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userEmail: string | undefined;
  userName: string;
  allUserDetails: any = [];

  constructor(public dialog: Dialog) { }

  ngOnInit(): void {
    
  }
  openDialog(): void {
    const dialogRef = this.dialog.open<string>(AppComponentDialog, {
      width: '250px',
      data: { userName: this.userName, userEmail: this.userEmail },
    });

    dialogRef.closed.subscribe((result: any) => {
      if (result?.data?.name || result?.data?.email) {
        this.allUserDetails.push({ userName: result?.data?.name, userEmail: result?.data?.email });
      }
    });
  }

}
