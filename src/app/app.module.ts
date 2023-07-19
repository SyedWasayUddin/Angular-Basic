import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { SqlComponent } from './sql/sql.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ResourcesComponent } from './resources/resources.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PHPComponent } from './php/php.component';
import { JsHomeComponent } from './js-home/js-home.component';
import { JsIntroductionComponent } from './js-introduction/js-introduction.component';
import { JsWhereToComponent } from './js-where-to/js-where-to.component';
import { JsOutputComponent } from './js-output/js-output.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoPageComponent } from './no-page/no-page.component';
import { WhatIsCSSComponent } from './what-is-css/what-is-css.component';
import { WhyCssComponent } from './why-css/why-css.component';
import { CssBasicsComponent } from './css-basics/css-basics.component';
import { CssCareersComponent } from './css-careers/css-careers.component';
import { ResourcesDocumentsComponent } from './resources-documents/resources-documents.component';
import { ResourcesFormsComponent } from './resources-forms/resources-forms.component';
import { ResourcesTutorialsComponent } from './resources-tutorials/resources-tutorials.component';
import { ResourcesTestYourselfComponent } from './resources-test-yourself/resources-test-yourself.component';
import { JsTutorialComponent } from './js-tutorial/js-tutorial.component';
import { PhpTutorialComponent } from './php-tutorial/php-tutorial.component';
import { PhpInstallComponent } from './php-install/php-install.component';
import { PhpSyntaxComponent } from './php-syntax/php-syntax.component';
import { PhpCommentsComponent } from './php-comments/php-comments.component';
import { SqlTutorialComponent } from './sql-tutorial/sql-tutorial.component';
import { SqlIntroComponent } from './sql-intro/sql-intro.component';
import { SqlSelectComponent } from './sql-select/sql-select.component';
import { SqlSyntaxComponent } from './sql-syntax/sql-syntax.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CssComponent,
    JavascriptComponent,
    SqlComponent,
    IntroductionComponent,
    ResourcesComponent,
    PHPComponent,
    JsHomeComponent,
    JsIntroductionComponent,
    JsWhereToComponent,
    JsOutputComponent,
    SidebarComponent,
    NoPageComponent,
    WhatIsCSSComponent,
    WhyCssComponent,
    CssBasicsComponent,
    CssCareersComponent,
    ResourcesDocumentsComponent,
    ResourcesFormsComponent,
    ResourcesTutorialsComponent,
    ResourcesTestYourselfComponent,
    JsTutorialComponent,
    PhpTutorialComponent,
    PhpInstallComponent,
    PhpSyntaxComponent,
    PhpCommentsComponent,
    SqlTutorialComponent,
    SqlIntroComponent,
    SqlSelectComponent,
    SqlSyntaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
