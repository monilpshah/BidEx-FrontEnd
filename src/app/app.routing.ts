import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const arr:Routes=[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
];

export const routing=RouterModule.forRoot(arr);
