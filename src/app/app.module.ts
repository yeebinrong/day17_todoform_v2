import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MainComponent } from './components/main.component';
import { NewComponent } from './components/new.component';
import { TaskformComponent } from './components/taskform.component';

import { TodoDatabase } from './todo.database';
import { EditformComponent } from './components/editform.component';

const ROUTES = [
  { path:'', component: MainComponent },
  { path:'new', component: NewComponent },
  { path:'test', component: TaskformComponent },
  { path:'edit/:id', component: EditformComponent },
  { path:'**', redirectTo:'', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewComponent,
    TaskformComponent,
    EditformComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatMomentDateModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}, TodoDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
