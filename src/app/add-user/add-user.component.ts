import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { Dialog, DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../common/store/store.state';


export interface UserDetails {
  userEmail: string;
  userName: string;
}

@Component({
  selector: 'app-dialogue-component',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AppComponentDialog implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  users: Observable<UserDetails[]>;

  constructor(
    public dialogRef: DialogRef<any>,
    @Inject(DIALOG_DATA) public data: UserDetails,
    public dialog: Dialog,
    private store: Store<AppState>
  ) { }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    const result = this.form.value;
    if (this.form.value.email || this.form.value.name) {
      this.dialogRef.close({ data: result });
      this.addUser(this.form.value.name, this.form.value.email);
    }
  }

  addUser(userName: any, userEmail: any) {
    this.store.dispatch({
      type: 'ADD_USER',
      payload: <UserDetails>{
        userEmail: userEmail,
        userName: userName
      }
    });
  }

  closeDialogue() {
    this.dialogRef.close();
  }

  addNewItem(value: any) {
    this.newItemEvent.emit(value);
  }

  ngOnInit(): void {
  }

}
