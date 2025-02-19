import { Component } from '@angular/core';
import { brand } from '../../../../shared/interface/property';
import { PropertyMockService } from '../../../../shared/services/property-mock.service';

@Component({
  selector: 'app-classic-brand',
  templateUrl: './classic-brand.component.html',
  styleUrls: ['./classic-brand.component.scss'],
})
export class ClassicBrandComponent {

  public title = 'classic';
  public brandData: brand[] = [];

  constructor(private propertyService: PropertyMockService) {}

  ngOnInit() {
    this.propertyService.brandData().subscribe((response) => {
      this.brandData = response.brand.filter((item) => item.type == this.title);
    });
  }
}
