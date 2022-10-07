import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordianComponent } from './components/accordian/accordian.component';
import { NewproductlistComponent } from './components/aditya/newproductlist/newproductlist.component';
import { OrderdetailsComponent } from './components/aditya/orderdetails/orderdetails.component';
import { StoreComponent } from './components/aditya/store/store.component';
import { BlogComponent } from './components/blogs/blog/blog.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BurnCatComponent } from './components/burn/burn-cat/burn-cat.component';
import { BurnProductComponent } from './components/burn/burn-product/burn-product.component';
import { BurnComponent } from './components/burn/burn.component';
import { BurnnewHomeComponent } from './components/burn/burnnew-home/burnnew-home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AddnewcontactComponent } from './components/contactsync/addnewcontact/addnewcontact.component';
import { ContactsyncComponent } from './components/contactsync/contactsync.component';
import { CRMHOMeComponent } from './components/CRM/crm-home/crm-home.component';
import { TransactionDetailsComponent } from './components/CRM/crm-home/transactions/transaction-details/transaction-details.component';
import { TransactionsComponent } from './components/CRM/crm-home/transactions/transactions.component';
import { DashboardComponent } from './components/CRM/dashboard/dashboard.component';
import { MerchantProfileComponent } from './components/CRM/merchants/merchant-profile/merchant-profile.component';
import { MerchantsComponent } from './components/CRM/merchants/merchants.component';
import { UserorderComponent } from './components/CRM/userorder/userorder.component';
import { CustomerOrderComponent } from './components/customer-order/customer-order.component';
import { CustomerWalletComponent } from './components/customer-wallet/customer-wallet.component';
import { CustomercartComponent } from './components/customercart/customercart.component';
import { DistancecalculatorComponent } from './components/distancecalculator/distancecalculator.component';
import { EmptystateComponent } from './components/emptystate/emptystate.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { KnowMoreComponent } from './components/how-it-works/know-more/know-more.component';
import { InstastoriesComponent } from './components/instastories/instastories.component';
import { KYCdocumnetComponent } from './components/kycdocumnet/kycdocumnet.component';
import { OrderconfirmComponent } from './components/orderconfirm/orderconfirm.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { RoshanStoreComponentComponent } from './components/roshan-store-component/roshan-store-component.component';
import { SharerecommendationComponent } from './components/sharerecommendation/sharerecommendation.component';
import { TimestampcompareComponent } from './components/timestampcompare/timestampcompare.component';
import { VendorCreatestoreComponent } from './components/vendor-createstore/vendor-createstore.component';
import { VendorDashboardComponent } from './components/vendor-dashboard/vendor-dashboard.component';
import { VendorOrdersComponent } from './components/vendor-orders/vendor-orders.component';
import { VendorProductsComponent } from './components/vendor-products/vendor-products.component';
import { VendorWalletComponent } from './components/vendor-wallet/vendor-wallet.component';
import { CustomerComponent } from './customer/customer.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {
    path: "", component: TabsComponent,
    children: [
      { path: "", redirectTo: "newproductdesc", pathMatch: "full" },
      { path: "Cust_order", component: CustomerOrderComponent },
      { path: "Cust_Cart", component: CustomercartComponent },
      { path: "productDetails", component: ProductdetailsComponent },
      { path: "RoshanStore", component: RoshanStoreComponentComponent },
      { path: "emptystate", component: EmptystateComponent },
      { path: "accordian", component: AccordianComponent },
      { path: "blogs", component: BlogsComponent },
      { path: "blogs/:id", component: BlogComponent },
      { path: "blogs/business", component: BlogsComponent },
      { path: "blogs/business/:id", component: BlogComponent },
      { path: "how-it-works", component: HowItWorksComponent },
      { path: "know-more/:id", component: KnowMoreComponent },
      { path: "contact-us", component: ContactUsComponent },
      { path: "customer", component: CustomerComponent },
      { path: "Vendor_Wallet", component: VendorWalletComponent },
      { path: "contactsync", component: ContactsyncComponent },
      { path: "addcontact", component: AddnewcontactComponent },
      { path: "kyc", component: KYCdocumnetComponent },
      { path: "timestamp", component: TimestampcompareComponent },
      { path: "cust_Wallet", component: CustomerWalletComponent },
      { path: "DistanceCalc", component: DistancecalculatorComponent },
      { path: "Burn", component: BurnComponent },
      { path: "Burncat", component: BurnCatComponent },
      { path: "Burnproduct/:type", component: BurnProductComponent },
      { path: "BurnNewHome", component: BurnnewHomeComponent },
      { path: "CRMHome", component: CRMHOMeComponent },
      { path: "CRMTrans", component: TransactionsComponent },
      { path: "CRMTransDetail", component: TransactionDetailsComponent },
      { path: "vendorstorecreate", component: VendorCreatestoreComponent },
      { path: "vendororder", component: VendorOrdersComponent },
      { path: "vendordash", component: VendorDashboardComponent },
      { path: "vendor_product", component: VendorProductsComponent },
      { path: "crmDashboard", component: DashboardComponent },
      { path: "crmmerchant", component: MerchantsComponent },
      { path: "crmorders", component: UserorderComponent },
      { path: "crmmerchantProfile", component: MerchantProfileComponent },
      { path: "adityastore", component: StoreComponent },
      { path: "adityaorderdetails", component: OrderdetailsComponent },
      { path: "Recommdationshare", component: SharerecommendationComponent },
      { path: "userorderconfirm", component: OrderconfirmComponent },
      { path: "instastories", component: InstastoriesComponent },
      { path: "newproductdesc", component: NewproductlistComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
