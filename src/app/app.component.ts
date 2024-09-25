import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddemployeeComponent } from './Component/addemployee/addemployee.component';
import { EmployeeListComponent } from './Component/employee-list/employee-list.component';
import { DataBindingComponent } from './Component/data-binding/data-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngluarApp';
}
