import { Component, OnInit } from '@angular/core';
import { Vegetable } from '../Vegetable';
import { VeggieApiCallerServiceService } from '../veggie-api-caller-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  vegetables: Vegetable[] = [];

  constructor(private veggieApi: VeggieApiCallerServiceService) { }

  ngOnInit(): void {
    this.veggieApi.getAllVegetables().subscribe(data => {
      this.vegetables = data;
    });
  }
}
