import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { BehaviorSubject } from 'rxjs';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { LocationUnit } from './types/units-response.interface';
import { GetUnitsService } from './services/get-units.service';
import { FooterComponent } from './components/footer/footer.component';
import { HygieneListItemsComponent } from './components/hygiene-list-items/hygiene-list-items.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FormsComponent,
    CardsListComponent,
    FooterComponent,
    HygieneListItemsComponent,
  ],
})
export class AppComponent {
  title = 'smartfit-challenge';

  showList = new BehaviorSubject(false);
  unitsList: LocationUnit[] = [];

  constructor(private unitService: GetUnitsService) {}

  onSubmit() {
    this.unitsList = this.unitService.getFilteredUnits();
    this.showList.next(true);
  }
}
