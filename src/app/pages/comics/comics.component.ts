import { Component, computed, effect,inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule,FormGroup, FormControl, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CollectionStore } from '../collection.store';



@Component({
  selector: 'app-comics',
  standalone: true,
  imports: [TableModule,ButtonModule,ReactiveFormsModule, InputTextModule],
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.scss'
})
export class ComicsComponent {
  protected readonly store = inject(CollectionStore);
  

  newComicForm = new FormGroup({
    title: new FormControl('', Validators.required),
    editorial: new FormControl('',Validators.required),
    value: new FormControl('',Validators.required),
  });


  addComic() {
    const newComic = {
      title: String(this.newComicForm.value.title),
      editorial: String(this.newComicForm.value.editorial),
      value: Number(this.newComicForm.value.value),
    };

    this.store.addComic(newComic);
    this.newComicForm.reset();
  }



}
