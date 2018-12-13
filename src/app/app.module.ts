import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { DropDownComponent } from './header/drop-down/drop-down.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './index/home/home.component';
import { HeroComponent } from './index/home/hero/hero.component';
import { AppRoutingModule } from './app-routing.module';

import { PartnersComponent } from './index/home/partners/partners.component';
import { FooterBottomComponent } from './index/footer-bottom/footer-bottom.component';
import { NewsletterComponent } from './index/newsletter/newsletter.component';
import { MobileComponent } from './admin/mobile/mobile.component';
import { EbookComponent } from './admin/ebook/ebook.component';
import { FeaturesComponent } from './index/features/features.component';
import { PricingComponent } from './index/pricing/pricing.component';
import { IconsComponent } from './index/icons/icons.component';
import { KnowledgeBaseComponent } from './index/knowledge-base/knowledge-base.component';
import { IntroComponent } from './index/home/intro/intro.component';
import { TwoColLayoutComponent } from './index/home/two-col-layout/two-col-layout.component';
import { PromoContentComponent } from './index/home/promo-content/promo-content.component';
import { FirstPromoComponent } from './index/home/first-promo/first-promo.component';
import { SecondPromoComponent } from './index/home/second-promo/second-promo.component';
import { SectionFeatureComponent } from './index/home/section-feature/section-feature.component';
import { FeatureComponent } from './index/home/section-feature/feature/feature.component';
import { PageComponent } from './index/public/page/page.component';
import { FeaturesContentComponent } from './index/features/features-content/features-content.component';
import { ContentShowComponent } from './index/features/features-content/content-show/content-show.component';
import { PricingContentComponent } from './index/pricing/pricing-content/pricing-content.component';
import { PricingShowComponent } from './index/pricing/pricing-content/pricing-show/pricing-show.component';
import { IconContentComponent } from './index/icons/icon-content/icon-content.component';
import { SearchComponent } from './index/knowledge-base/search/search.component';
import { KnowledgeBannerComponent } from './index/knowledge-base/knowledge-banner/knowledge-banner.component';
import { CardComponent } from './index/knowledge-base/knowledge-banner/card/card.component';
import { AdminComponent } from './admin/admin.component';
import { MobileHeroComponent } from './admin/mobile/mobile-hero/mobile-hero.component';
import { PromoSectionComponent } from './admin/mobile/promo-section/promo-section.component';
import { MobileVedioComponent } from './admin/mobile/mobile-vedio/mobile-vedio.component';
import { MobileRoleComponent } from './admin/mobile/mobile-role/mobile-role.component';
import { RoleShowComponent } from './admin/mobile/mobile-role/role-show/role-show.component';
import { MobileCardComponent } from './admin/mobile/mobile-card/mobile-card.component';
import { CardShowComponent } from './admin/mobile/mobile-card/card-show/card-show.component';
import { MobileStoreComponent } from './admin/mobile/mobile-store/mobile-store.component';
import { EbookHeroComponent } from './admin/ebook/ebook-hero/ebook-hero.component';
import { GetBookComponent } from './admin/ebook/get-book/get-book.component';
import { EbookLearnComponent } from './admin/ebook/ebook-learn/ebook-learn.component';
import { LearnCardComponent } from './admin/ebook/ebook-learn/learn-card/learn-card.component';
import { FreeEbookComponent } from './admin/ebook/free-ebook/free-ebook.component';
import { EbookPromoComponent } from './admin/ebook/ebook-promo/ebook-promo.component';
import { EbookQuestionComponent } from './admin/ebook/ebook-question/ebook-question.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    DropDownComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    PartnersComponent,
    FooterBottomComponent,
    NewsletterComponent,
    MobileComponent,
    EbookComponent,
    FeaturesComponent,
    PricingComponent,
    IconsComponent,
    KnowledgeBaseComponent,
    IntroComponent,
    TwoColLayoutComponent,
    PromoContentComponent,
    FirstPromoComponent,
    SecondPromoComponent,
    SectionFeatureComponent,
    FeatureComponent,
    PageComponent,
    FeaturesContentComponent,
    ContentShowComponent,
    PricingContentComponent,
    PricingShowComponent,
    IconContentComponent,
    SearchComponent,
    KnowledgeBannerComponent,
    CardComponent,
    AdminComponent,
    MobileHeroComponent,
    PromoSectionComponent,
    MobileVedioComponent,
    MobileRoleComponent,
    RoleShowComponent,
    MobileCardComponent,
    CardShowComponent,
    MobileStoreComponent,
    EbookHeroComponent,
    GetBookComponent,
    EbookLearnComponent,
    LearnCardComponent,
    FreeEbookComponent,
    EbookPromoComponent,
    EbookQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
