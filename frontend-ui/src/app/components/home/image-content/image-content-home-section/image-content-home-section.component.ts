import { Component } from '@angular/core';
import { slider, sliderImagesData } from '../../../../shared/interface/property';
import { MockPropertyService } from '../../../../shared/services/mock-property.service';

@Component({
  selector: 'app-image-content-home-section',
  templateUrl: './image-content-home-section.component.html',
  styleUrls: ['./image-content-home-section.component.scss']
})
export class ImageContentHomeSectionComponent {

  public sliderImages : sliderImagesData[];

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    autoplay : true,
    autoplayTimeOut : 1500,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  constructor(private propertyService: MockPropertyService){
    this.propertyService.getSliderData().subscribe((response) => {
      this.sliderImages = response.slider;
    })
  }

}
