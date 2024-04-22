import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [
    {
      id: 1,
      title: 'Book Title 1',
      description: 'Description of Book 1',
      authors: ['Author 1'],
      ratings: []
    },
    {
      id: 2,
      title: 'Book Title 2',
      description: 'Description of Book 2',
      authors: ['Author 2'],
      ratings: []
    },
    {
      id: 3,
      title: 'Book Title 3',
      description: 'Description of Book 3',
      authors: ['Author 3'],
      ratings: []
    },
    {
      id: 4,
      title: 'Book Title 4',
      description: 'Description of Book 4',
      authors: ['Author 4'],
      ratings: []
    },
    {
      id: 5,
      title: 'Book Title 5',
      description: 'Description of Book 5',
      authors: ['Author 5'],
      ratings: []
    },
  ];

  currentBookIndex = 0;

  hasFinished = false;

  getBook(): Book | null {
    if (this.currentBookIndex < this.books.length) {
      return this.books[this.currentBookIndex];
    } else {
      return null;  
    }
  }

  addRating(rating: number): void {
    if (this.currentBookIndex < this.books.length) {
      let book = this.books[this.currentBookIndex];
      book.ratings.push(rating);
    }
    this.currentBookIndex++;  
  }

  resetBooks(): void {
    this.currentBookIndex = 0;
    this.hasFinished = false;
  }

  calculateAverage(book: Book): number {
    const sum = book.ratings.reduce((a, b) => a + b, 0);
    return book.ratings.length ? sum / book.ratings.length : 0;
  }

  isFinished(): boolean {
    return this.currentBookIndex >= this.books.length;  
  }
}
