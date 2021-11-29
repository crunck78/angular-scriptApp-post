import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  post = {
    endPoint:
      'https://script.google.com/macros/s/AKfycbzTitJ3vGKp8m1jQ5ruC6OhbSKrkhRl9NixAgocTFLMExczpQYSF1JgDhwonnw7c9BDCg/exec',

    body: (payload: any) => JSON.stringify(payload),

    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  ngOnInit(): void {}
  name = 'Angular ' + VERSION.major;

  submit(data: any) {
    this.send(data).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error),
      complete: () => console.info('send post complete'),
    });
  }

  send(payload: any) {
    return this.http.post<any>(
      this.post.endPoint,
      this.post.body(payload),
      this.post.options
    );
  }
}
