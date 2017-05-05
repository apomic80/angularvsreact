import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  napoli: boolean;
  salerno: boolean;
  benevento: boolean;

  select(id: string) {
    if (id === 'napoli') {
      this.napoli = true;
      this.salerno = false;
      this.benevento = false;
    }
     if (id === 'benevento') {
      this.napoli = false;
      this.salerno = false;
      this.benevento = true;
    }
     if (id === 'salerno') {
      this.napoli = false;
      this.salerno = true;
      this.benevento = false;
    }
  }


}
