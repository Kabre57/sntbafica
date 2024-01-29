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
import { RecoverPasswordComponent } from './pages/users/recover-password/recover-password.component';
import { SignInComponent } from './pages/users/sign-in/sign-in.component';
import { SignUpComponent } from './pages/users/sign-up/sign-up.component';


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
    RecoverPasswordComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }
