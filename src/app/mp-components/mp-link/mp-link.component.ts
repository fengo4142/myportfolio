import { Component, Input } from '@angular/core';

@Component({
  selector: 'mp-link',
  templateUrl: './mp-link.component.html',
  styleUrls: ['./mp-link.component.scss'],
})
export class MpLinkComponent {
  @Input()
  public link = '';
}
