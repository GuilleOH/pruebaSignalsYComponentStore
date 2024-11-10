import { Component, computed, effect,inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {ReactiveFormsModule,FormGroup, FormControl, Validators} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CollectionStore } from '../collection.store';


@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [TableModule,ButtonModule,ReactiveFormsModule, InputTextModule],
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.scss'
})
export class JuegosComponent {
  protected readonly store = inject(CollectionStore);

  // public valorTotal = computed(() => this.store.juegos().reduce((acc, juego) => acc + juego.value, 0));


  newJuegoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    company: new FormControl('',Validators.required),
    value: new FormControl('',Validators.required),
  });

  addJuego() {
    const newJuego = {
      title: String(this.newJuegoForm.value.title),
      company: String(this.newJuegoForm.value.company),
      value: Number(this.newJuegoForm.value.value),
    };
    this.store.addJuego(newJuego);

    this.newJuegoForm.reset();
  }




}
