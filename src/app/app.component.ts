import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookRatingComponent } from './book-rating/book-rating.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookRatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-w3';
}
