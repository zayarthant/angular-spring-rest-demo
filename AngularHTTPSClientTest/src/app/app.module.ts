import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Route, RouterModule} from '@angular/router';
import { StudentComponent } from './student/student.component';
import { MagicColorDirective } from './magic-color.directive';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './page/home/home.component';
import { StudentsComponent } from './page/students/students.component';
import { AboutComponent } from './page/about/about.component';
import { StudentsDetailComponent } from './page/students/students-detail/students-detail.component';
import {StudentService} from './service/student.service';
import { HttpTestComponent } from './page/http-test/http-test.component';
import { SampleColorDirective } from './common/sample-color.directive';
import { MySimpleValidatorDirective } from './common/my-simple-validator.directive';
import { DemoComponent } from './page/demo/demo.component';

const myRoutes: Route[] = [
  {path: '', component: DemoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'students', component: StudentsComponent, children: [
      {path: ':id', component: StudentsDetailComponent}
  ]},
  {path: 'about', component: AboutComponent},
  {path: 'httpTest', component: HttpTestComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    MagicColorDirective,
    NavComponent,
    HomeComponent,
    StudentsComponent,
    AboutComponent,
    StudentsDetailComponent,
    HttpTestComponent,
    SampleColorDirective,
    MySimpleValidatorDirective,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(myRoutes),
    ReactiveFormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
