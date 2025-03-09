import { Component } from '@angular/core';
import { brand } from '../../../../shared/interface/property';
import { PropertyMockService } from '../../../../shared/services/property-mock.service';

@Component({
  selector: 'app-slider-filter-brand',
  templateUrl: './slider-filter-brand.component.html',
  styleUrls: ['./slider-filter-brand.component.scss']
})
export class SliderFilterBrandComponent {

  public title = 'slider_filter_search';

  public brandData : brand[] = []

  constructor(private propertyService : PropertyMockService) { }

  ngOnInit(){
    this.propertyService.brandData().subscribe(response => {
      this.brandData = response.brand.filter(item => item.type == this.title)
  });

}
 }
