import { Component, Input, OnInit } from '@angular/core';
import { LocationUnit } from '../../types/units-response.interface';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
  imports: [CardComponent, CommonModule],
})
export class CardsListComponent {
  @Input() unitsList: LocationUnit[] = [];
}
