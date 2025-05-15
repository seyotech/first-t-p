import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';


@Component({
  selector: 'app-serach-bar',
  standalone: true,
  imports: [NzInputModule, NzButtonModule,],
  templateUrl: './serach-bar.component.html',
  styleUrl: './serach-bar.component.css'
})
export class SerachBarComponent {

}
