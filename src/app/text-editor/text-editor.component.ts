import { Component, OnInit, ViewChild } from '@angular/core';
import * as rooster from 'roosterjs';
import * as api from 'roosterjs-editor-api';

import FroalaEditor from 'froala-editor';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  public editor:any;

  @ViewChild('editorDiv') editorDiv;

  constructor() { }

  ngOnInit(): void {
    this.editor = rooster.createEditor(document.querySelector('.editor'));
    new FroalaEditor(document.querySelector('.froalaEditor'));
  }

  toggleBold() {
    console.log(window.getSelection());
    api.toggleBold(this.editor);
  }
  toggleItalic() {
      api.toggleItalic(this.editor);
  }
  toggleUnderline() {
      api.toggleUnderline(this.editor);
  }

}
