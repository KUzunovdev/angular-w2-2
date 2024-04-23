import { Component } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-rating',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-rating.component.html',
  styleUrl: './book-rating.component.scss'
})
export class BookRatingComponent {

  currentBook!: Book | null;
  editTitle!: string;
  editDescription!: string;
  editAuthors!: string;
  averageRating!: number;
  finished: boolean = false;

  constructor(private bookService: BookService) {
    this.loadBook();
  }

  loadBook(): void {
    this.currentBook = this.bookService.getBook();
    if (this.currentBook) {
      this.editTitle = this.currentBook.title;
      this.editDescription = this.currentBook.description;
      this.editAuthors = this.currentBook.authors.join(', ');
    }
  }

  rate(rating: number): void {
    this.bookService.setPendingChanges({
      title: this.editTitle,
      description: this.editDescription,
      authors: this.editAuthors.split(',').map(author => author.trim())
    });
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
