import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-view-card',
  templateUrl: './filter-view-card.component.html',
  styleUrls: ['./filter-view-card.component.scss']
})
export class FilterViewCardComponent implements OnInit {

  selectData: any[] = [];
  doctors: any[] = [
    {
      name: "Dr. John Diego",
      subtext: "M(35)",
      specialities: "M. D. Medicine, Children Specialist",
      location: "Oakland, California",
      affiliation: "Morristown Medical Center",
      insurance: "Online",
      isPreferredDoctor: "Preferred Doctor"
    },
    {
      name: "Dr. John Diego",
      subtext: "M(35)",
      specialities: "M. D. Medicine, Children Specialist",
      location: "Oakland, California",
      affiliation: "Morristown Medical Center",
      insurance: "Online",
      isPreferredDoctor: "Preferred Doctor"
    },
    {
      name: "Dr. John Diego",
      subtext: "M(35)",
      specialities: "M. D. Medicine, Children Specialist",
      location: "Oakland, California",
      affiliation: "Morristown Medical Center",
      insurance: "Online",
      isPreferredDoctor: "Preferred Doctor"
    },
    {
      name: "Dr. John Diego",
      subtext: "M(35)",
      specialities: "M. D. Medicine, Children Specialist",
      location: "Oakland, California",
      affiliation: "Morristown Medical Center",
      insurance: "Online",
      isPreferredDoctor: "Preferred Doctor"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
