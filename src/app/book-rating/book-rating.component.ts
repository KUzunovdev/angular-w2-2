import { Component } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-rating.component.html',
  styleUrl: './book-rating.component.scss'
})
export class BookRatingComponent {

  currentBook!: Book;
  averageRating!: number;

  constructor(private bookService: BookService) {
    this.loadBook();
  }

  loadBook(): void {
    this.currentBook = this.bookService.getBook();
    this.averageRating = this.bookService.calculateAverage(this.currentBook);
  }

  rate(rating: number): void {
    this.bookService.addRating(rating);
    this.loadBook();
  }
}
