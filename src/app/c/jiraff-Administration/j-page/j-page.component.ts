import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-j-page',
  templateUrl: './j-page.component.html',
  styleUrls: ['./j-page.component.css']
})
export class JPageComponent implements OnInit {

  bgRND:string
  selectedj:jiraff
  constructor() { }

  ngOnInit(): void {
  }


deletej(j){
  let index = this.jiraffsArray.findIndex(j=>j.id==j.id)
  this.jiraffsArray.splice(index,1);
}

  //data
  jiraffsArray:jiraff[]=[
   { id:1,name:"shuki",height:5.55,color:"blue",isBossy:false},
   { id:2,name:"moshe",height:5.55,color:"blue",isBossy:false},
   { id:3,name:"shuki",height:5.55,color:"blue",isBossy:false},
   { id:4,name:"yakov",height:5.55,color:"blue",isBossy:false},
   { id:5,name:"shuki",height:5.55,color:"blue",isBossy:false},
   { id:6,name:"edna",height:5.55,color:"black",isBossy:true},
   { id:7,name:"shuki",height:5.55,color:"yellow",isBossy:false},
   { id:8,name:"shuki",height:5.55,color:"blue",isBossy:false},
   { id:9,name:"shuki",height:5.55,color:"pink",isBossy:true}

                

   ]

}

export class jiraff{
  id:number
  name:string
  height:number
  color:string
  isBossy:boolean
}