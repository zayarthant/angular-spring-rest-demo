import { Component, OnInit } from '@angular/core';
import {HttpCenterService} from '../../service/http-center.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {

  imageUrl: string;

  constructor(private httpCenter: HttpCenterService) { }

  ngOnInit(): void {
    this.httpCenter.accesRomdomImage().subscribe(response => {
      this.imageUrl = response;
    });
    this.httpCenter.searchDictionary('Orange');
  }

}
