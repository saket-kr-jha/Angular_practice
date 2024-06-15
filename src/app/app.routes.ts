import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: 'login', component : LoginComponent},
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutUsComponent},
    {path: 'contact', component: ContactUsComponent},
    {path: '**', component: ErrorComponentComponent},

];
