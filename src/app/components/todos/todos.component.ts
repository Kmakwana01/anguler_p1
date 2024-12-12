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

export class TodosComponent implements OnInit {
  
  message: string = "welcome to todos components";
  todo: string = 'todo';
  inputTypeButton: string = "button";
  data: any;

  constructor() {}
  ngOnInit() {
    this.showAlert();
  }

  async showAlert() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      this.data = response.data;  // access response.data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}
