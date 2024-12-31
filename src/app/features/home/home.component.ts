import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from '@core/components/sidenav';

@Component({
  selector: 'nby-home',
  imports: [
    CommonModule,
    MatSidenavModule,
    SidenavComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: {
    '[style.flex]': '1'
  }
})
export class HomeComponent {

}
