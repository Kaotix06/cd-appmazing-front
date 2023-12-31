import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatIconModule, MatInputModule, MatNativeDateModule, MatOptionModule, MatRadioButton, MatRadioGroup, MatRadioModule, MatSelectModule, MatSlideToggleModule, MatSliderModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { FormsModule } from '@angular/forms';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ContactDeleteComponent } from './contact-delete/contact-delete.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts/charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CategoryHomeComponent } from './category-home/category-home.component';
import { CategoryNewComponent } from './category-new/category-new.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactHomeComponent,
    ContactDetailComponent,
    ProductHomeComponent,
    ProductDetailComponent,
    ContactNewComponent,
    ProductNewComponent,
    ContactEditComponent,
    ProductEditComponent,
    ContactDeleteComponent,
    ProductDeleteComponent,
    ChartsComponent,
    CategoryHomeComponent,
    CategoryNewComponent,
    CategoryEditComponent,
    CategoryDetailComponent,
    CategoryDeleteComponent
  ],
  entryComponents: [ContactDeleteComponent, ProductDeleteComponent, CategoryDeleteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule,
    CommonModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
