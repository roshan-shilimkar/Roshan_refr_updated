import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogComponent } from './components/blogs/blog/blog.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { KnowMoreComponent } from './components/how-it-works/know-more/know-more.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateBlogComponent } from './components/blogs/blog/create-blog/create-blog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { VendorWalletComponent } from './components/vendor-wallet/vendor-wallet.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AddnewcontactComponent } from './components/contactsync/addnewcontact/addnewcontact.component';
import { ContactsyncComponent } from './components/contactsync/contactsync.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { KYCdocumnetComponent } from './components/kycdocumnet/kycdocumnet.component';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { TimestampcompareComponent } from './components/timestampcompare/timestampcompare.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


// 

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { CustomerWalletComponent } from './components/customer-wallet/customer-wallet.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { DistancecalculatorComponent } from './components/distancecalculator/distancecalculator.component';
import { BurnComponent } from './components/burn/burn.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { BurnCatComponent } from './components/burn/burn-cat/burn-cat.component';
import { BurnProductComponent } from './components/burn/burn-product/burn-product.component';
import { MatBadgeModule } from '@angular/material/badge';
import { OpeningtimeComponent } from './openingtime/openingtime.component';
import { BurnnewHomeComponent } from './components/burn/burnnew-home/burnnew-home.component';
import { CRMHOMeComponent } from './components/CRM/crm-home/crm-home.component';
import { TransactionDetailsComponent } from './components/CRM/crm-home/transactions/transaction-details/transaction-details.component';
import { TransactionsComponent } from './components/CRM/crm-home/transactions/transactions.component';
import { VendorCreatestoreComponent } from './components/vendor-createstore/vendor-createstore.component';
import { VendorOrdersComponent } from './components/vendor-orders/vendor-orders.component';
import { CustHowitWorkComponent } from './components/cust-howit-work/cust-howit-work.component';
import { VendorDashboardComponent } from './components/vendor-dashboard/vendor-dashboard.component';
import { DashboardComponent } from './components/CRM/dashboard/dashboard.component';
import { UserorderComponent } from './components/CRM/userorder/userorder.component';
import { MerchantsComponent } from './components/CRM/merchants/merchants.component';
import { MerchantProfileComponent } from './components/CRM/merchants/merchant-profile/merchant-profile.component';
import { StoreComponent } from './components/aditya/store/store.component';
import { OrderdetailsComponent } from './components/aditya/orderdetails/orderdetails.component';
import { SharerecommendationComponent } from './components/sharerecommendation/sharerecommendation.component';
import { OrderconfirmComponent } from './components/orderconfirm/orderconfirm.component';
import { InstastoriesComponent } from './components/instastories/instastories.component';
import { ShareAdvocacyComponent } from './share-advocacy/share-advocacy.component';
import { ShareLoyaltyComponent } from './share-loyalty/share-loyalty.component';
import { AccordianComponent } from './components/accordian/accordian.component';
import { EmptystateComponent } from './components/emptystate/emptystate.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { RoshanStoreComponentComponent } from './components/roshan-store-component/roshan-store-component.component';
import { VendorProductsComponent } from './components/vendor-products/vendor-products.component';
import { CustomerOrderComponent } from './components/customer-order/customer-order.component';
import { CustomercartComponent } from './components/customercart/customercart.component';
import { NewproductlistComponent } from './components/aditya/newproductlist/newproductlist.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    WelcomeComponent,
    BlogsComponent,
    BlogComponent,
    HowItWorksComponent,
    VendorWalletComponent,
    KnowMoreComponent,
    ContactUsComponent,
    CreateBlogComponent,
    CustomerComponent,
    ContactsyncComponent,
    AddnewcontactComponent,
    KYCdocumnetComponent,
    TimestampcompareComponent,
    CustomerWalletComponent,
    DistancecalculatorComponent,
    BurnComponent,
    FashionComponent,
    BurnCatComponent,
    BurnProductComponent,
    OpeningtimeComponent,
    BurnnewHomeComponent,
    CRMHOMeComponent,
    TransactionDetailsComponent,
    TransactionsComponent,
    VendorCreatestoreComponent,
    VendorOrdersComponent,
    CustHowitWorkComponent,
    VendorDashboardComponent,
    DashboardComponent,
    UserorderComponent,
    MerchantsComponent,
    MerchantProfileComponent,
    StoreComponent,
    OrderdetailsComponent,
    SharerecommendationComponent,
    OrderconfirmComponent,
    InstastoriesComponent,
    ShareAdvocacyComponent,
    ShareLoyaltyComponent,
    AccordianComponent,
    EmptystateComponent,
    ProductdetailsComponent,
    RoshanStoreComponentComponent,
    VendorProductsComponent,
    CustomerOrderComponent,
    CustomercartComponent,
    NewproductlistComponent,
  ],
  imports: [
    // AgmCoreModule.forRoot({
    //   apiKey:"https://maps.googleapis.com/maps/api/js?key=AIzaSyCq50lslzsm7CHVHfL4IIVqUzCEWev_FTE",
    // }),
    MatBadgeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatMenuModule,
    MatStepperModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
