import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';
import { NewsComponent } from '../news/news.component';
import { UserPageComponent } from '../userpage/userpage.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'auth',
  loadChildren: 'app/auth/auth.module#AuthModule'
},{
  path: 'products',
  component: ProductsComponent
},{
  path: 'news',
  component: NewsComponent
},{
  path: 'userpage',
  component: UserPageComponent
}, {
  path: 'admin',
  loadChildren: 'app/admin/admin.module#AdminModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: []
})

export class AppRoutingModule {}
