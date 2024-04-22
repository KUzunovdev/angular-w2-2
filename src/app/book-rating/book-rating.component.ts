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

  currentBook!: Book | null;
  averageRating!: number;
  finished: boolean = false;

  constructor(private bookService: BookService) {
    this.loadBook();
  }

  loadBook(): void {
    this.currentBook = this.bookService.getBook()!;
    if (this.currentBook) {
      this.averageRating = this.bookService.calculateAverage(this.currentBook);
    } else {
      this.finished = true;
    }
  }
  rate(rating: number): void {
    this.bookService.addRating(rating);
    if (!this.bookService.isFinished()) {
      this.loadBook();  
    } else {
      this.finished = true;  
    }
  }

  restartRating(): void {
    this.bookService.resetBooks();
    this.finished = false;
    this.loadBook();
  }

  completeRating(): void {
    this.finished = true;
    this.currentBook = null;
  }
}
