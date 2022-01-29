import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Vegetable } from '../Vegetable';
import { VeggieApiCallerServiceService } from '../veggie-api-caller-service.service';

@Component({
  selector: 'app-update-veggie',
  templateUrl: './update-veggie.component.html',
  styleUrls: ['./update-veggie.component.scss']
})
export class UpdateVeggieComponent implements OnInit {

  id: number = 0;
  veggie?: Vegetable;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private veggieApi: VeggieApiCallerServiceService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.veggieApi.getSingleVegetable(this.id).subscribe(data => {
      this.veggie = data;
    });
  }

  UpdateVeggie(name: string, priceStr: string): void {
    let price: number = +priceStr;
    this.veggie!.Name = name;
    this.veggie!.Price = price;

    this.veggieApi.updateVegetable(this.id, this.veggie).subscribe(data => {
      this.router.navigate(['']);
    });
  }
}
