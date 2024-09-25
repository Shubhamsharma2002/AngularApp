import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {
       yes : boolean = true

       name :string[] = ['anu', 'shubham ', 'muskan', 'vivek']
}
