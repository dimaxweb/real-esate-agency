import { Component, Input } from '@angular/core';
import {
  propertyOfDay
} from '../../../../shared/interface/property';
import { PropertyMockService } from '../../../../shared/services/property-mock.service';

@Component({
  selector: 'app-enterprise-property-of-day',
  templateUrl: './enterprise-property-of-day.component.html',
  styleUrls: ['./enterprise-property-of-day.component.scss'],
})
export class EnterprisePropertyOfDayComponent {
  @Input() title: string;

  public desc = 'Discover New York’s best things to do, restaurants, theatre, nightlife and more';

  public propertyOfDay: propertyOfDay[] = [];

  constructor(public propertyService: PropertyMockService) {}

  ngOnInit() {
    this.propertyService.propertyOfDayData().subscribe((response) => {
      this.propertyOfDay = response.propertyOfDay.filter((item) =>
        item.type.includes(this.title)
      );
    });
  }
}
