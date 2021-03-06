import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Output() filterData = new EventEmitter<FormGroup>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoHome() {
    this.router.navigate(['/']);
  }

  onFilter(filterData) {
    this.filterData.emit(filterData);
  }
}
