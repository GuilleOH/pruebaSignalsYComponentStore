import { Component,inject } from '@angular/core';
import { CollectionStore } from '../collection.store';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.scss'
})
export class ResumenComponent {
  protected readonly store = inject(CollectionStore);


}
