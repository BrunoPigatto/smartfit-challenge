import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { LocationUnit } from '../../types/units-response.interface';
import { FilterUnitsService } from '../../services/filter-units.service';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent implements OnInit {
  @Output() submitEvent = new EventEmitter();
  results: LocationUnit[] = [];
  filteredResults: LocationUnit[] = [];
  qtdResults = 0;
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitsService,
    private filterUnitsService: FilterUnitsService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true,
    });

    //OBS: A API fornecida é um JSON estático, que não possui filtros, por conta disso os filtros serão feitos no front
    this.unitService.getAllUnits().subscribe((data) => {
      this.results = data;
      this.filteredResults = data;
      this.qtdResults = this.filteredResults?.length;
    });
  }

  onSubmit(): void {
    this.filteredResults = this.filterUnitsService?.filter(
      this.results,
      this.formGroup.value.showClosed,
      this.formGroup.value.hour
    );
    this.unitService.setFilteredUnits(this.filteredResults);

    this.qtdResults = this.filteredResults?.length;

    this.submitEvent.emit();
  }

  onClear(): void {
    this.formGroup.reset();
  }
}
