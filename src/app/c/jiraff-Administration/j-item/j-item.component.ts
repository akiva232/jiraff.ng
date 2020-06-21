import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{jiraff} from '../j-page/j-page.component'


@Component({
  selector: 'j-item',
  templateUrl: './j-item.component.html',
  styleUrls: ['./j-item.component.css']
})
export class JItemComponent implements OnInit {

  @Input() j:jiraff
  @Output() clickNote = new EventEmitter<null>()
  // @Output() dbclickNote = new EventEmitter<null>()
  @Output() deleteNote = new EventEmitter<number>()
  @Output() randomColorNote = new EventEmitter<string>()

  deleteNoteFn(){
    this.deleteNote.emit(this.j.id)

  }
  constructor() { }

  ngOnInit(): void {

   setTimeout(() => {
     this.randomColorNote.emit(this.j.color)
   }, 1000*this.j.id);

}
}
