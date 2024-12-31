import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavComponent } from '@core/components/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';

import { NbyActiveNavState, NbyNavsState } from '@core/store/navs/navs.reducer';

@Component({
  selector: 'nby-home',
  imports: [
    CommonModule,
    MatSidenavModule,
    SidenavComponent,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: {
    '[style.flex]': '1'
  }
})
export class HomeComponent {

  readonly store: Store<{ navState: NbyNavsState, activeNavState: NbyActiveNavState }> = inject(Store);

  activeNav$ = this.store.select('activeNavState');
}
