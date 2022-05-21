import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 7 },
    { name: 'Amorinha', type: 'Dog', age: 3 },
    { name: 'Tom', type: 'Cat', age: 5 },
    { name: 'Garfield', type: 'Cat', age: 2 },
  ];

  animalDetails = '';

  constructor() {}

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalDetails = `O ${animal.name} tem ${animal.age} de idade!`;
  }
}
