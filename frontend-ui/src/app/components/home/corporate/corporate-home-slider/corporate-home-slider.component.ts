import { Component } from '@angular/core';
import { homeSectionSlider } from '../../../../shared/interface/property';
import { PropertyMockService } from '../../../../shared/services/property-mock.service';

@Component({
  selector: 'app-corporate-home-slider',
  templateUrl: './corporate-home-slider.component.html',
  styleUrls: ['./corporate-home-slider.component.scss']
})
export class CorporateHomeSliderComponent {

  public title = 'corporate';

  public homeSectionSliderData: homeSectionSlider[] = [];

  constructor(private propertyService: PropertyMockService) { }

  ngOnInit(){
    this.propertyService.homeSliderData().subscribe(response => {
      this.homeSectionSliderData = response.homeSection.filter(item => item.type == this.title)
    });
  }

}
