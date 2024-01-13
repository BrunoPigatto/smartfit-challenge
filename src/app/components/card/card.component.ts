import { Component, Input } from '@angular/core';
import { LocationUnit } from '../../types/units-response.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() card!: LocationUnit;

  removeHtmlTagsAndDecode(content: string) {
    const doc = new DOMParser().parseFromString(content, 'text/html');
    return doc.body.textContent || '';
  }

  constructor() {}
}
