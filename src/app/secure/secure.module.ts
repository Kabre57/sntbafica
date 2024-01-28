import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SideBarreComponent } from './layouts/side-barre/side-barre.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { CreateArticleComponent } from './pages/articles/create-article/create-article.component';
import { EditArticleComponent } from './pages/articles/edit-article/edit-article.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { UsersComponent } from './pages/users/users.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { EditUserComponent } from './pages/users/edit-user/edit-user.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SideBarreComponent,
    ArticlesComponent,
    CreateArticleComponent,
    EditArticleComponent,
    CategoriesComponent,
    UsersComponent,
    CreateUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }
