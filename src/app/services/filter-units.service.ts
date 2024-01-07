import { Injectable } from '@angular/core';
import { LocationUnit } from '../types/units-response.interface';

const openingHours = {
  morning: {
    first: '06',
    last: '12',
  },
  afternoon: {
    first: '12',
    last: '18',
  },
  night: {
    first: '18',
    last: '23',
  },
};

type hourIndex = 'morning' | 'afternoon' | 'night';

@Injectable({
  providedIn: 'root',
})
export class FilterUnitsService {
  constructor() {}

  filterUnits(unit: LocationUnit, openHour: string, closeHour: string) {
    if (!unit.schedules) true;
    let openHourFilter = parseInt(openHour, 10);
    let closeHourFilter = parseInt(closeHour, 10);

    for (let i = 0; i < unit.schedules?.length; i++) {
      let scheduleHour = unit.schedules[i].hour;
      if (scheduleHour !== 'Fechada') {
        let [unitOpenHour, unitCloseHour] = scheduleHour.split('às');
        let unitOpenHourInt = parseInt(unitOpenHour.replace('h', ''), 10);
        let unitCloseHourInt = parseInt(unitCloseHour.replace('h', ''), 10);

        if (
          unitOpenHourInt <= openHourFilter &&
          unitCloseHourInt >= closeHourFilter
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
    return false;
  }

  filter(results: LocationUnit[], showClosed: boolean, hour: string) {
    let intermediateResults = results;

    if (!showClosed) {
      intermediateResults = results.filter(
        (location) => location.opened === true
      );
    }

    if (hour) {
      const openHour = openingHours[hour as hourIndex]?.first;
      const closeHour = openingHours[hour as hourIndex]?.last;
      return intermediateResults.filter((location) =>
        this.filterUnits(location, openHour, closeHour)
      );
    } else {
      return intermediateResults;
    }
  }
}
