import { Component, Input, OnInit } from '@angular/core';
import { SplitTextTypes } from '../shared.constants';

@Component({
  selector: 'mp-split-text',
  templateUrl: './mp-split-text.component.html',
  styleUrls: ['./mp-split-text.component.scss'],
})
export class MpSplitTextComponent implements OnInit {
  @Input() text = '';

  @Input() type = SplitTextTypes.Char;

  constructor() {}

  public splitTextTypes = SplitTextTypes;
  public cumulativeRowLengths: number[] = [];

  getWords(): string[] {
    return this.text ? this.text.split(' ') : [];
  }

  ngOnInit(): void {
    let cumulativeLength = 0;
    for (const word of this.getWords()) {
      cumulativeLength += word.length;
      this.cumulativeRowLengths.push(cumulativeLength);
    }
  }

  getCharIndex(row: number, col: number): number {
    return (row > 0 ? this.cumulativeRowLengths[row - 1] : 0) + col + 1;
  }
}
