import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NbySidenavItem } from './sidenav';
import { Store } from '@ngrx/store';
import { onActiveNavChange } from '@core/store/navs/navs.action';
import { NbyActiveNavState, NbyNavsState } from '@core/store/navs/navs.reducer';

@Component({
  selector: 'nby-sidenav',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatListModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  readonly store: Store<{navState: NbyNavsState, activeNavState: NbyActiveNavState}> = inject(Store);

  navs$ = this.store.select('navState');
  activeNav$ = this.store.select('activeNavState')

  setActive(selectedNav: NbySidenavItem): void {
    this.store.dispatch(onActiveNavChange({selectedNav}));
  }
}
