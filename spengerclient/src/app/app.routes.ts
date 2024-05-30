import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { PostsComponent } from './posts/posts.component';
import { PatientsComponent } from './patients/patients.component';

export const routes: Routes = [
    {
        path:'', 
        title:"Patienten",
        component:PatientsComponent
    },
    {
        path:'patients', 
        title:"Patienten",
        component:PatientsComponent
    }
];

