import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { LocationUnit } from '../../types/units-response.interface';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent implements OnInit {
  results: LocationUnit[] = [];
  filteredResults: LocationUnit[] = [];
  qtdResults = 0;
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitsService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true,
    });

    //OBS: A API fornecida é um JSON estático, que não possui filtros, por conta disso os filtros serão feitos no front
    this.unitService.getAllUnits().subscribe((data) => {
      this.results = data.locations;
      this.filteredResults = this.results;
      this.qtdResults = this.filteredResults?.length;
    });
  }

  onSubmit(): void {
    if (!this.formGroup.value.showClosed) {
      this.filteredResults = this.results.filter(
        (location) => location.opened === true
      );
    } else {
      this.filteredResults = this.results;
    }
    this.qtdResults = this.filteredResults?.length;
  }

  onClear(): void {
    this.formGroup.reset();
  }
}
