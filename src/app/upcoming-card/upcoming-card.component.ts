import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-card',
  templateUrl: './upcoming-card.component.html',
  styleUrls: ['./upcoming-card.component.scss']
})
export class UpcomingCardComponent implements OnInit {

  list: any[] = [{},{}]

  constructor() { }

  ngOnInit(): void {
  }

}
