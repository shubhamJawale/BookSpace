import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { BooksComponent } from './books/books.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BooksDetailsComponent } from './books/books-details/books-details.component';
import { BookItemComponent } from './books/books-list/book-item/book-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { BooksStartComponent } from './books/books-start/books-start.component';
import { BooksEditComponent } from './books/books-edit/books-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BooksListComponent,
    BooksDetailsComponent,
    BookItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    BooksStartComponent,
    BooksEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
