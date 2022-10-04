import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-products',
  templateUrl: './vendor-products.component.html',
  styleUrls: ['./vendor-products.component.scss']
})
export class VendorProductsComponent implements OnInit {
  makingChanges: boolean = false;
  disableForm: boolean = false;
  productCat: Array<any> = [
    'Dal',"rice"
  ];
  storeProduct:any;
  choose:any;
  checkIfCan:boolean =false;
  matAutocomplete:boolean = false ;
  product: Array<any> = [{
    id: "qwedsafsafkasfsaf",
    reqBurn: false,
    burn: false,
    name:"Dal tadka"
  }];
  constructor() { }

  ngOnInit(): void {
  }

  updateStoreProduct(){

  }

  reqEx(x: any) {

  }

  createBulk(asdasd:any){

  }

  createNew(){

  }

  getVariant(abc:string,){

  }

  getVariants(abc:string){
    return [{name:'asdasd',title:'',type:''},{name:'aseaes',title:'',type:''}]
  }

  startEditor(x: any) {

  }

  addNewVariant(a:any,b:any,c:any){

  }

  removeVariantBulk(a:any,b:any){

  }



}
