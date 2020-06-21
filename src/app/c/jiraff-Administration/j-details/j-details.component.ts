import { Component, OnInit, Input } from '@angular/core';
import { jiraff } from '../j-page/j-page.component';

@Component({
  selector: 'j-details',
  templateUrl: './j-details.component.html',
  styleUrls: ['./j-details.component.css']
})
export class JDetailsComponent implements OnInit {
 
  @Input()j:jiraff
  constructor() { }

  ngOnInit(): void {
  }

}
