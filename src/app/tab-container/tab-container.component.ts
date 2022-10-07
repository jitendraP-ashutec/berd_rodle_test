import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../common/store/store.state';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss']
})
export class TabContainerComponent implements OnInit {

  users: any;
  UserDetails: any;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    let userName: any;

    this.route.paramMap.subscribe((params: ParamMap) => {
      userName = params.get('userName');
    })

    this.store.select(state => state.user).subscribe(data => {
      this.users = data;
    });

    if(userName) {
      let bigCities = this.users.filter(function (user: any) {
        return user.userName === userName;
      });
      this.UserDetails = bigCities;
    }
  }

  moveToHomePage() {
    this.router.navigate(['/home']);
  }
}
