import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';
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

  ngOnInit(): void {
    of(2, 4, 6, 8).subscribe(console.log);

    from([20, 15, 10, 5]).subscribe(
      (item) => console.log(`The number is ${item}`),
      (err) => console.log(`The error is ${err}`),
      () => console.log(`Stream completed`)
    );

    of('Apple1', 'Apple2', 'Apple3').subscribe(this.observerApples);
  }
}

function Observer() {
  throw new Error('Function not implemented.');
}
