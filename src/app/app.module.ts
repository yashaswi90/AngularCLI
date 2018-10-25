import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { TabModule } from 'angular-tabs-component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tab/tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TabModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
