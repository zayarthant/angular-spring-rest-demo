import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  dogUrl: string;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {

  }

  clicker(): void {
    this.httpClient.get<DogImgInfo>('https://dog.ceo/api/breeds/image/random').subscribe(
      value => {
        this.dogUrl = value.message;
      }
    );
  }

  search(): void {
    this.httpClient.get('https://owlbot.info/api/v4/dictionary/apple', {
      headers: new HttpHeaders().append('Authorization', 'Token f198b39048b710d185f46290bf3fb7d38554b7fd')
    }).subscribe(
      value => {
        console.log(value);
      }
    );
  }

}

interface DogImgInfo {
  message: string;
  status: string;
}
