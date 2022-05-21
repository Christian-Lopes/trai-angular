import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals = [
    {name: "Turca", type: "Dog"},
    {name: "Amorinha", type: "Dog"},
    {name: "Tom", type: "Cat"},
    {name: "Garfield", type: "Cat"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
