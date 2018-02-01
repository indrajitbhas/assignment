import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  thingsToDo: {name,checked}[];
  myList: any;

  constructor(private router: Router) {
    this.thingsToDo = [
      {name:'WakeUp', checked: false}
    ]
  }

  removeAThing(e):void{
    this.thingsToDo = this.thingsToDo.filter((elem, i) => {
      console.log(elem.checked)
      return !elem.checked;
    })
    console.log(this.thingsToDo)
  }

  logOut(){
    this.router.navigate(['/']);
  }

  addAThing(elem):void{
    let value = elem.value;
    if(value === ''){
      alert('Please write a TODO thing');
    } else {
      this.thingsToDo.push({name: elem.value, checked: false});
    }
    alert
    elem.value = '';
  }

  ngOnInit() {
  }

}
