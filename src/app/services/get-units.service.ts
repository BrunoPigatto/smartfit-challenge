import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocationUnit, UnitsResponse } from '../types/units-response.interface';

@Injectable({
  providedIn: 'root',
})
export class GetUnitsService {
  readonly apiUrl =
    'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  private allUnitsSubject: BehaviorSubject<LocationUnit[]> =
    new BehaviorSubject<LocationUnit[]>([]);

  private allUnits$: Observable<LocationUnit[]> =
    this.allUnitsSubject.asObservable();

  private filteredUnits: LocationUnit[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<UnitsResponse>(this.apiUrl).subscribe((data) => {
      this.allUnitsSubject.next(data?.locations);
      this.filteredUnits = data?.locations;
    });
  }

  getAllUnits(): Observable<LocationUnit[]> {
    return this.allUnits$;
  }

  getFilteredUnits() {
    return this.filteredUnits;
  }

  setFilteredUnits(value: LocationUnit[]) {
    this.filteredUnits = value;
  }
}
