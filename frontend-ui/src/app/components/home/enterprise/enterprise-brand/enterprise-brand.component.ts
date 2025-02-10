import { Component } from '@angular/core';
import { brand } from '../../../../shared/interface/property';
import { MockPropertyService } from '../../../../shared/services/mock-property.service';

@Component({
  selector: 'app-enterprise-brand',
  templateUrl: './enterprise-brand.component.html',
  styleUrls: ['./enterprise-brand.component.scss'],
})
export class EnterpriseBrandComponent {

  public title = 'enterprise';

  public brandData: brand[] = [];

  constructor(private propertyService: MockPropertyService) {}

  ngOnInit() {
    this.propertyService.brandData().subscribe((response) => {
      this.brandData = response.brand.filter((item) => item.type == this.title);
    });
  }
}
