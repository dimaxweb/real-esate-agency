import { Component, Input } from '@angular/core';
import { banner } from '../../../../shared/interface/property';
import { MockPropertyService } from '../../../../shared/services/mock-property.service';

@Component({
  selector: 'app-slider-filter-banner',
  templateUrl: './slider-filter-banner.component.html',
  styleUrls: ['./slider-filter-banner.component.scss']
})
export class SliderFilterBannerComponent {

  @Input() tagClass: string = '';
  @Input() title: string;
  public bannerData: banner[] = []

  constructor(private propertyService : MockPropertyService) { }

  ngOnInit(){
    this.propertyService.bannerData().subscribe(response => {
      this.bannerData = response.banner.filter(item => item.type.includes(this.title))
  });
  }
}
