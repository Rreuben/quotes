import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: [ './quotes-detail.component.css' ]
})
export class QuotesDetailComponent implements OnInit {

  @Input() Quote:Quote;

  @Output() complete = new EventEmitter<boolean>();

  quoteDelete( deleteQuote:boolean ) {
    this.complete.emit( deleteQuote );
  }

  upVote() {
    this.Quote.upVote ++
  }

  downVote() {
    this.Quote.downVote --
  }

  constructor() { }

  ngOnInit() {
  }
}
