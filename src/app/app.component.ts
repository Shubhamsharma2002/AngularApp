import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddemployeeComponent } from './Component/addemployee/addemployee.component';
import { EmployeeListComponent } from './Component/employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddemployeeComponent,EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngluarApp';
}
