import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MenuRoutingModule} from './components/home/menu-routing.module'

// used to create fake backend
//import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent, LoginComponent, RegisterComponent,AccessTokenComponent, MapComponent } from './components';
import { AuthenticationService } from './_services';
import { ErrorComponent } from './components/error/error.component';;
import { PostsContainerComponent } from './components/posts-container/posts-container.component'
;
import { PostComponent } from './components/post/post.component'
import { AgmCoreModule } from '@agm/core';;
import { UploadPostComponent } from './components/upload-post/upload-post.component'
;
import { FilterComponent } from './components/filter/filter.component'



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAjzCl0ULJxWUALDUrStb9AZ6mWBw9G9Eg'})
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ErrorComponent,
        PostComponent,
        PostsContainerComponent,
        MapComponent,
        AccessTokenComponent,
        FilterComponent,
        UploadPostComponent],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        AuthenticationService,
        // provider used to create fake backend
       // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }