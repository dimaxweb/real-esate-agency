import { Component, Input } from '@angular/core';
import { propertyInCity } from '../../../../shared/interface/property';
import { PropertyMockService } from '../../../../shared/services/property-mock.service';

@Component({
  selector: 'app-enterprise-featured-city',
  templateUrl: './enterprise-featured-city.component.html',
  styleUrls: ['./enterprise-featured-city.component.scss'],
})
export class EnterpriseFeaturedCityComponent {

  @Input() title: string;

  public desc = 'See why ProCity is one of the best friends for exploring the city.';

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
