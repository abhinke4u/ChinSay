import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vegetable } from '../Vegetable';
import { VeggieApiCallerServiceService } from '../veggie-api-caller-service.service';

@Component({
  selector: 'app-add-veggie',
  templateUrl: './add-veggie.component.html',
  styleUrls: ['./add-veggie.component.scss']
})
export class AddVeggieComponent implements OnInit {

  veggie?: Vegetable = {};

  constructor(private router: Router,
    private veggieApi: VeggieApiCallerServiceService
    ) { }

  ngOnInit(): void {
  }

  //add a new vegetable.
  AddVeggie(name: string, priceStr: string): void {
    let price: number = +priceStr;
    this.veggie!.Name = name;
    this.veggie!.Price = price;

    this.veggieApi.addVegetable(this.veggie).subscribe(data => {
      this.router.navigate(['']);
    });
  }
}
