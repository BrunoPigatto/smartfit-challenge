export interface Schedules {
  weekdays: string;
  hour: string;
}

export interface LocationUnit {
  id: number;
  title: string;
  content: string;
  opened: boolean;
  mask: string;
  towel: string;
  foutain: string;
  locker_room: string;
  schedules: Schedules[];
}

export interface UnitsResponse {
  current_country_id: number;
  locations: LocationUnit[];
}
