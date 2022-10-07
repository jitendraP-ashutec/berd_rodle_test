import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../common/store/store.state';


@Component({
  selector: 'app-list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() userDetails: any;
  listDetails: any = [];
  search: string = '';
  users: any;
  public userEmailSearch: string;
  userDetailsUpdate = new Subject<string>();
  public searchableText: string[] = [];
  public filterData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) { 
  }

  ngOnInit(): void {
    this.users = this.store.select(state => state.user).subscribe(data => {
      this.filterData = data;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userDetails']) {
      // this.filterData = changes['userDetails'].currentValue;      
    }
  }

  moveToDetailsPage(userName: any) {
    this.router.navigate(['/user-details', userName]);
    this.filterData
    
  }
}
