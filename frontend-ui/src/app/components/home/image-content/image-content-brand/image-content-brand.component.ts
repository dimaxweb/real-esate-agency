import { Component } from '@angular/core';
import { brand } from '../../../../shared/interface/property';
import { PropertyMockService } from '../../../../shared/services/property-mock.service';

@Component({
  selector: 'app-image-content-brand',
  templateUrl: './image-content-brand.component.html',
  styleUrls: ['./image-content-brand.component.scss'],
})
export class ImageContentBrandComponent {

  public title = 'image_content';

  public brandData: brand[] = [];

  constructor(private propertyService: PropertyMockService) {}

  ngOnInit() {
    this.propertyService.brandData().subscribe((response) => {
      this.brandData = response.brand.filter((item) => item.type == this.title);
    });
  }
}
