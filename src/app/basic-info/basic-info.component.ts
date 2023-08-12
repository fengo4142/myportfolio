import { Component } from '@angular/core';
import { SplitTextTypes } from '../shared/shared.constants';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
})
export class BasicInfoComponent {
  public splitTextTypes = SplitTextTypes;
}
