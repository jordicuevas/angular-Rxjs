import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  observerApples = {
    next: (item: String) => console.log(`APPLE WAS EMITTED ${item}`),
    error: (err: Error) => console.log(`The error is ${err}`),
    complete: () => console.log(`Stream completed`),
  };
  observerNumbers = {
    next: (item) => console.log(`The number is ${item}`),
    error: (err) => console.log(`The error is ${err}`),
    complete: () => console.log(`Stream completed`),
  };
  ngOnInit(): void {
    of(2, 4, 6, 8).subscribe(console.log);

    from([20, 15, 10, 5])
      .pipe(
        tap((item) => console.log(`emitted item ${item}`)),
        map((item) => item * 2),
        map((item) => item - 10),
        map((item) => {
          if (item === 0) {
            throw new Error('zero detected');
          }
          return item;
        }),
        take(3)
      )
      .subscribe(this.observerNumbers);

    of('Apple1', 'Apple2', 'Apple3').subscribe(this.observerApples);
    // operator
  }
}

function Observer() {
  throw new Error('Function not implemented.');
}
