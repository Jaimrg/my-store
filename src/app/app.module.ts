import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [AppComponent,ProductListComponent],
  imports: [BrowserModule, MatToolbarModule, MatIconModule, BrowserAnimationsModule,MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent }])
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

function providers(arg0: { path: string; component: typeof ProductListComponent; }[], providers: any, arg2: never[], bootstrap: any, arg4: (typeof AppComponent)[]): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}
function bootstrap(arg0: { path: string; component: typeof ProductListComponent; }[], providers: (arg0: { path: string; component: typeof ProductListComponent; }[], providers: any, arg2: never[], bootstrap: any, arg4: (typeof AppComponent)[]) => any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}>, arg2: never[], bootstrap: any, arg4: (typeof AppComponent)[]): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

