import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'label-span',
  templateUrl: './jlabel-span.component.html',
  styleUrls: ['./jlabel-span.component.css']
})
export class JlabelSpanComponent implements OnInit {
  
  @Input() label:string=''
  @Input() val:string=''
  constructor() { }

  ngOnInit(): void {
  }

}
