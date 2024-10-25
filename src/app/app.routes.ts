import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent

    }
    ,
    {
        path:'about',component:AboutComponent


    }
   
    
];
