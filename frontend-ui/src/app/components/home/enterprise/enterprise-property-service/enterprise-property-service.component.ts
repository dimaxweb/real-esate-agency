import { Component, Input } from '@angular/core';
import { providedServices } from '../../../../shared/interface/property';
import { MockPropertyService } from '../../../../shared/services/mock-property.service';

@Component({
  selector: 'app-enterprise-property-service',
  templateUrl: './enterprise-property-service.component.html',
  styleUrls: ['./enterprise-property-service.component.scss'],
})
export class EnterprisePropertyServiceComponent {
  @Input() title: string;

  public desc = 'Discover New York’s best things to do, restaurants, theatre, nightlife and more';

  public providedServices: providedServices[] = [];

  constructor(private propertyService: MockPropertyService) {}

  ngOnInit() {
    this.propertyService.providesServices().subscribe((response) => {
      this.providedServices = response.services.filter((item) =>
        item.type.includes(this.title)
      );
    });
  }
}
