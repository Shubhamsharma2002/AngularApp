import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe,LowerCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
         firstname:string="animal"
}
