import { Component } from '@angular/core';
import { brand } from '../../../../shared/interface/property';
import { MockPropertyService } from '../../../../shared/services/mock-property.service';

@Component({
  selector: 'app-image-content-brand',
  templateUrl: './image-content-brand.component.html',
  styleUrls: ['./image-content-brand.component.scss'],
})
export class ImageContentBrandComponent {

  public title = 'image_content';

  public brandData: brand[] = [];

  constructor(private propertyService: MockPropertyService) {}

  ngOnInit() {
    this.propertyService.brandData().subscribe((response) => {
      this.brandData = response.brand.filter((item) => item.type == this.title);
    });
  }
}
