import { Component, OnInit } from '@angular/core';
import Sortable from 'sortablejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rooster-angular';

  ngOnInit(): void {
      Sortable.create(document.querySelector('#editorDiv'));
  }

}
