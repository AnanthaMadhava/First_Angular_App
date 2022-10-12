import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name: 'Clean Code',
        author: 'Robet C Martin',
        image: 'https://m.media-amazon.com/images/I/81KpjloJJZL._AC_UY327_FMwebp_QL65_.jpg',
        amount: 700
      },
      {
        name: 'Programatic Programmer',
        author: 'David Thomas',
        image: 'https://m.media-amazon.com/images/I/91WFb-PpoNL._AC_UY327_FMwebp_QL65_.jpg',
        amount: 800
      },
      {
        name: 'Art of Computer Programming',
        author: 'Donald John Fuller',
        image: 'https://m.media-amazon.com/images/I/81ZF4SE6CJS._AC_UY327_FMwebp_QL65_.jpg',
        amount: 183000
      },
      {
        name: 'Introduction to Algorithm',
        author: 'T Cormen',
        image: 'https://m.media-amazon.com/images/I/513P8XoCAEL._AC_UY327_FMwebp_QL65_.jpg',
        amount: 1500
      }
    ];
  }
}
