import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'y';

  selectedCategory: string = 'rock'; // Default category
  notes: Array<{ left: string, duration: string, delay: string }> = [];

  ngOnInit() {
    this.generateNotes();
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  generateNotes() {
    // Number of notes to generate
    const numberOfNotes = 10;

    for (let i = 0; i < numberOfNotes; i++) {
      const left = `${Math.random() * 100}vw`; // Random horizontal position
      const duration = `${3 + Math.random() * 5}s`; // Random duration between 3s and 8s
      const delay = `${Math.random() * 5}s`; // Random delay between 0s and 5s

      this.notes.push({ left, duration, delay });
    }
  }
}
