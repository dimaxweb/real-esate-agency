import { Component, Input } from '@angular/core';
import { propertyOfDay } from '../../../../shared/interface/property';
import { MockPropertyService } from '../../../services/mock-property.service';

@Component({
  selector: 'app-property-of-day',
  templateUrl: './property-of-day.component.html',
  styleUrls: ['./property-of-day.component.scss'],
})
export class PropertyOfDayComponent {

  @Input() propertyOfDay: propertyOfDay[];

  constructor(public propertyService: MockPropertyService){}

  public Options = {
    loop: true,
    nav: true,
    dots: true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive : {
      0 : {
        items : 1
      }
    }
  };
}
