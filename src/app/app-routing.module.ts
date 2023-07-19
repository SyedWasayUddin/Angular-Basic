import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { SqlComponent } from './sql/sql.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ResourceLoader } from '@angular/compiler';
import { ResourcesComponent } from './resources/resources.component';
import { PHPComponent } from './php/php.component';
import { JsHomeComponent } from './js-home/js-home.component';
import { JsIntroductionComponent } from './js-introduction/js-introduction.component';
import { JsWhereToComponent } from './js-where-to/js-where-to.component';
import { JsOutputComponent } from './js-output/js-output.component';
import { NoPageComponent } from './no-page/no-page.component';
import { combineLatest } from 'rxjs';
import { WhatIsCSSComponent } from './what-is-css/what-is-css.component';
import { WhyCssComponent } from './why-css/why-css.component';
import { CssBasicsComponent } from './css-basics/css-basics.component';
import { CssCareersComponent } from './css-careers/css-careers.component';
import { ResourcesFormsComponent } from './resources-forms/resources-forms.component';
import { ResourcesTutorialsComponent } from './resources-tutorials/resources-tutorials.component';
import { ResourcesTestYourselfComponent } from './resources-test-yourself/resources-test-yourself.component';
import { ResourcesDocumentsComponent } from './resources-documents/resources-documents.component';
import { JsTutorialComponent } from './js-tutorial/js-tutorial.component';
import { PhpTutorialComponent } from './php-tutorial/php-tutorial.component';
import { PhpInstallComponent } from './php-install/php-install.component';
import { PhpSyntaxComponent } from './php-syntax/php-syntax.component';
import { PhpCommentsComponent } from './php-comments/php-comments.component';
import { SqlTutorialComponent } from './sql-tutorial/sql-tutorial.component';
import { SqlIntroComponent } from './sql-intro/sql-intro.component';
import { SqlSelectComponent } from './sql-select/sql-select.component';
import { SqlSyntaxComponent } from './sql-syntax/sql-syntax.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    component: CssComponent,
    path:'css',
    children:[
      { component: IntroductionComponent,
        path:'introduction', 
        children: [
          { path:'why-css', component: WhyCssComponent },
          { path:'what-is-css', component: WhatIsCSSComponent },
          { path:'css-basics', component:CssBasicsComponent },
          { path:'css-careers', component:CssCareersComponent }
        ]
      },
      { component: ResourcesComponent,
        path:'resources', 
        children: [
          { path:'resources-documents', component: ResourcesDocumentsComponent },
          { path:'resources-forms', component:ResourcesFormsComponent },
          { path:'resources-tutorials', component:ResourcesTutorialsComponent },
          { path:'resources-test-yourself', component:ResourcesTestYourselfComponent }
        ]
      }
    ]
  },
  {
    component: JavascriptComponent,
    path:'javascript',
    children:[
      {
        component: JsTutorialComponent,
        path:'js-tutorial',
        children:[
          { path: '', redirectTo: 'js-home', pathMatch: 'full'},
          { path:'js-home', component: JsHomeComponent },
          { path:'js-introduction', component: JsIntroductionComponent },
          { path:'js-where-to', component: JsWhereToComponent },
          { path:'js-output', component: JsOutputComponent }
        ]
      }
    ]
  },
  {
    component: SqlComponent,
    path:'sql',
    children:[
      { component: SqlTutorialComponent,
        path:'sql-tutorial',
        children:[
          { path:'sql-intro', component:SqlIntroComponent },
          { path:'sql-select', component:SqlSelectComponent },
          { path:'sql-syntax', component:SqlSyntaxComponent }
        ]
      }
    ]
  },
  {
    component: PHPComponent,
    path:'php',
    children:[
      { component: PhpTutorialComponent,
        path:'php-tutorial',
        children:[
          { path:'php-install', component: PhpInstallComponent },
          { path:'php-syntax', component: PhpSyntaxComponent },
          { path:'php-comments', component: PhpCommentsComponent }
        ]
      }
    ]
  },
  {
    component: NoPageComponent,
    path:'**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
