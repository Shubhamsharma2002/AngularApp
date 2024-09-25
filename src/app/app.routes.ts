import { Routes } from '@angular/router';
import { AddemployeeComponent } from './Component/addemployee/addemployee.component';
import { DataBindingComponent } from './Component/data-binding/data-binding.component';
import { EmployeeListComponent } from './Component/employee-list/employee-list.component';
import { IfelseComponent } from './Component/ifelse/ifelse.component';
import { PipeComponent } from './Component/pipe/pipe.component';

export const routes: Routes = [
     {
        path:'add-emp',
        component:AddemployeeComponent
     },
     {
        path:'data-binding',
        component:DataBindingComponent
     },{
        path:'emp-list',
        component:EmployeeListComponent
     },{
        path:'if-else',
        component:IfelseComponent
     }
     ,{
      path:'pipe',
      component:PipeComponent
     }
];
