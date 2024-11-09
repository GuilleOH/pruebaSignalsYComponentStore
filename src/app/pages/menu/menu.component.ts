import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Resumen',
              icon: 'pi pi-home',              
          },
          {
              label: 'Comics',
              icon: 'pi pi-star'
          },          
          {
              label: 'Juegos',
              icon: 'pi pi-envelope'
          }
      ]
  }
}
