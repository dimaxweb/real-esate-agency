import { Component, Input } from '@angular/core';
import { propertyInCity } from '../../../../shared/interface/property';
import { PropertyMockService } from '../../../../shared/services/property-mock.service';

@Component({
  selector: 'app-slider-filter-property-in-cities',
  templateUrl: './slider-filter-property-in-cities.component.html',
  styleUrls: ['./slider-filter-property-in-cities.component.scss'],
})
export class SliderFilterPropertyInCitiesComponent {

  @Input() title: string;
  @Input() tagClass: string = '';
  @Input() sectionClass: string;
  public propertyInCity: propertyInCity[] = [];

  constructor(private propertyService: PropertyMockService) {}

  ngOnInit() {
    this.propertyService.propertyInCityData().subscribe((response) => {
      this.propertyInCity = response.property.filter((item) =>
        item.type.includes(this.title)
      );
    });
  }
}
