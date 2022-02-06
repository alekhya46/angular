import { Component, OnInit } from '@angular/core';
import { TalkService } from '../talk.service';

@Component({
  selector: 'app-interact',
  templateUrl: './interact.component.html',
  styleUrls: ['./interact.component.css']
})
export class InteractComponent implements OnInit {
  Products;
  id: any;
  name: any;
  brand: any;
  price: any;

  constructor(private talk:TalkService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts()
  {
    this.talk.getProducts().subscribe((res) =>{
      this.Products =res;
    })
  }

addProduct(){
  const newObj ={
    id:this.id ,
    productName :this.name ,
    productBrand :this.brand ,
    price: this.price
  }
  this.talk.addtheProduct(newObj).subscribe((res)=>{
    console.log(res);

  })
}
updateProduct(){
  const newObj ={
    id:this.id ,
    productName :this.name ,
    productBrand :this.brand ,
    price: this.price
  }
  this.talk.updatetheProduct(this.id,newObj).subscribe((res)=>{
    console.log(res);

  })
}
deleteProduct(){
  this.talk.deletetheProduct(this.id).subscribe((res)=>{
    console.log(res);

  })

}
}
