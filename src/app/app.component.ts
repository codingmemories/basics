// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'basics';
// }
import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
 // template: `<p>Hello world!</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // styles: ['']
})
export class AppComponent {
  name = 'luis ramirez';
  imgUrl = 'https://i.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0';
  currentDate = new Date();

  getName() {
    return this.name;
  }

  changeImage(event: KeyboardEvent) {
    this.imgUrl = (event.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event);
  }
}
