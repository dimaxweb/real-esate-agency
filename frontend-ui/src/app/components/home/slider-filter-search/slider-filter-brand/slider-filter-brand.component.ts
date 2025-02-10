import { Component } from '@angular/core';
import { brand } from '../../../../shared/interface/property';
import { MockPropertyService } from '../../../../shared/services/mock-property.service';

@Component({
  selector: 'app-slider-filter-brand',
  templateUrl: './slider-filter-brand.component.html',
  styleUrls: ['./slider-filter-brand.component.scss']
})
export class SliderFilterBrandComponent {

  public title = 'slider_filter_search';

  public brandData : brand[] = []

  constructor(private propertyService : MockPropertyService) { }

  ngOnInit(){
    this.propertyService.brandData().subscribe(response => {
      this.brandData = response.brand.filter(item => item.type == this.title)
  });

}
 }
