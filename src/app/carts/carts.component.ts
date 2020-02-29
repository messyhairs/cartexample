import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {
  public product = [
    {
      id: 1,
      name: 'apple',
      price: 100
    },
    {
      id: 2,
      name: 'banana',
      price: 200
    }
  ];
  public addcart: any = [];
  public cta = 'ADD';
  public amount = 0;
  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
  }
  addtocart(event) {
      const datas = event.target.id;
      this.product.forEach(element => {
        if (datas === element.name) {
          this.addcart.push(element);
          this.amount += element.price;
        }
      });
      console.log(this.addcart);
      localStorage.setItem('Basket' , JSON.stringify(this.addcart));
      console.log(this.amount);
  }
  removeItem(i: number): void {
    // 1 defines delete one item from list at a time
    this.addcart.splice(i, 1);
    console.log(this.addcart);
    this.addcart.forEach(element => {
      element.price.splice(i, 1);
      console.log(element.price);
    });
  }
}
