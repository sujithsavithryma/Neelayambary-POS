import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { NbySidenavItem } from './sidenav';

@Component({
  selector: 'nby-sidenav',
  imports: [
    CommonModule,
    RouterLink,
    MatListModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  navs = signal<NbySidenavItem[]>([
    { link: 'products', name: 'Products', isActive: true },
    { link: 'categories', name: 'Product Categories', isActive: false },
    { link: 'inventory', name: 'Inventory', isActive: false },
    { link: 'sales', name: 'Sales', isActive: false },
    { link: 'customers', name: 'Customers', isActive: false }
  ]);

  setActive(selectedItem: NbySidenavItem): void {
    const links = this.navs();
    links.map((x) => {
      if (x.link === selectedItem.link) {
        x.isActive = true;
      } else {
        x.isActive = false;
      }
    });
    this.navs.set(links);
  }
}
