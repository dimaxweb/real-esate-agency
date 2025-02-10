import { Component, Input } from '@angular/core';
import { currency, featuredProperty } from '../../../../../shared/interface/property';
import { MockPropertyService } from '../../../../services/mock-property.service';

@Component({
  selector: 'app-featured-property-one',
  templateUrl: './featured-property-one.component.html',
  styleUrls: ['./featured-property-one.component.scss'],
})
export class FeaturedPropertyOneComponent {

  @Input() title: string = '';
  @Input() featuredProperty: featuredProperty[];
  @Input() tagClass: string = '';
  @Input() currency:currency = this.propertyService.Currency;

  constructor(public propertyService: MockPropertyService) {}

  public Options = {
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
