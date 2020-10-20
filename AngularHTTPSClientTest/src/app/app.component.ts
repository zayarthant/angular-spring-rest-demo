import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import {Card} from '../models/Card';
import {Student} from './model/student.model';
import {StudentService} from './service/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {

  }

}
