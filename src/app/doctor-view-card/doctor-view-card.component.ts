import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-view-card',
  templateUrl: './doctor-view-card.component.html',
  styleUrls: ['./doctor-view-card.component.scss']
})
export class DoctorViewCardComponent implements OnInit {

  @Input("doctor")
  doctor={};

  constructor() { }

  ngOnInit(): void {
  }

}
