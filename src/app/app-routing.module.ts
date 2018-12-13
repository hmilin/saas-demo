import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import router
import { RouterModule, Routes } from "@angular/router";

//import components
import { HomeComponent } from './index/home/home.component';
import { MobileComponent } from './admin/mobile/mobile.component';
import { FeaturesComponent } from './index/features/features.component';
import { PricingComponent } from './index/pricing/pricing.component';
import { IconsComponent } from './index/icons/icons.component';
import { KnowledgeBaseComponent } from './index/knowledge-base/knowledge-base.component';
import { IndexComponent } from './index/index.component';
import { EbookComponent } from './admin/ebook/ebook.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: "", redirectTo: "/index/home", pathMatch: "full"},
  { path: "index", component: IndexComponent , children: [
      { path: "home", component: HomeComponent },
      { path: "features", component: FeaturesComponent },
      { path: "pricing", component: PricingComponent },
      { path: "icons", component: IconsComponent },
      { path: "knowledge-base", component: KnowledgeBaseComponent },
    ] },
  { path: "admin", component: AdminComponent, children: [
      { path: "mobile", component: MobileComponent },
      { path: "ebook", component: EbookComponent }
    ]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
