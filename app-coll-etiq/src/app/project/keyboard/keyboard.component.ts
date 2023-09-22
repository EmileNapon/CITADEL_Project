import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent {
  @Output() characterClicked = new EventEmitter<string>();

  insertChar(char: string): void {
    this.characterClicked.emit(char);
  }


}
