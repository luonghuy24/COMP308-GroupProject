import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HomeModule } from './home/home.module';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { TipsModule } from './tips/tips.module';
// import { CoursesModule } from './courses/courses.module';
import { RecordsModule } from './records/records.module';
import { UsersModule } from './users/users.module';
import { EmergencyModule } from './emergency/emergency.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AuthenticationModule,
        HomeModule,
        UsersModule,
        RecordsModule,
        TipsModule,
        EmergencyModule,
        RouterModule.forRoot(AppRoutes)
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

