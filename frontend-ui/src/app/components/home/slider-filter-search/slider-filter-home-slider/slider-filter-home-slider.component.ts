import { Component } from '@angular/core';
import { homeSectionSlider } from '../../../../shared/interface/property';
import { PropertyMockService } from '../../../../shared/services/property-mock.service';

@Component({
  selector: 'app-slider-filter-home-slider',
  templateUrl: './slider-filter-home-slider.component.html',
  styleUrls: ['./slider-filter-home-slider.component.scss']
})
export class SliderFilterHomeSliderComponent {

  public title = 'slider_filter_search';

  public homeSectionSliderData : homeSectionSlider[] = [];

  constructor(private propertyService : PropertyMockService) { }

  ngOnInit(){
    this.propertyService.homeSliderData().subscribe(response => {
      this.homeSectionSliderData = response.homeSection.filter(item => item.type == this.title);
  });
}

}
