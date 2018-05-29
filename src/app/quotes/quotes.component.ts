import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quote ( "", "", "", new Date() )
  ]

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.uploadDate = new Date();
    this.quotes.push(quote);
    console.log(this.quotes)

  }

  constructor() { }

  ngOnInit() {
  }

}
