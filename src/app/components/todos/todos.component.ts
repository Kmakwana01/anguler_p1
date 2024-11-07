import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent{
  message: string = "welcome to todos components";
  todo: string = 'todo';
  inputTypeButton: string = "button";
  data: any;

  constructor(){
   this.showAlert()
  }

  async showAlert() {
    const data = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(data)
    this.data = data;
  }
}
