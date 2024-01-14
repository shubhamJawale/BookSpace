import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { BooksStartComponent } from './books/books-start/books-start.component';
import { BooksDetailsComponent } from './books/books-details/books-details.component';
import { BooksEditComponent } from './books/books-edit/books-edit.component';

const routes: Routes = [
  { path: "", redirectTo: "/book", pathMatch: "full" },
  {
    path: "book", component: BooksComponent, children: [
      { path: '', component: BooksStartComponent },
      { path: 'new', component: BooksEditComponent },// order is mandetory
      { path: ':id', component: BooksDetailsComponent },
      { path: ':id/edit', component: BooksEditComponent }
    ]
  },
  { path: "shopping-list", component: ShoppingListComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
