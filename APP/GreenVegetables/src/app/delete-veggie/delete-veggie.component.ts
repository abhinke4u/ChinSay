import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vegetable } from '../Vegetable';
import { VeggieApiCallerServiceService } from '../veggie-api-caller-service.service';

@Component({
  selector: 'app-delete-veggie',
  templateUrl: './delete-veggie.component.html',
  styleUrls: ['./delete-veggie.component.scss']
})
export class DeleteVeggieComponent implements OnInit {

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

  DeleteVeggie(): void {
    this.veggieApi.deleteVegetable(this.id).subscribe(data => {
      this.router.navigate(['']);
    });
  }
}
