import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param!!) {
      this.id = +param;
    }
  }
}