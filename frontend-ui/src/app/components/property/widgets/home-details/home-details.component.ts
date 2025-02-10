import { Component, Input } from '@angular/core';
import { latestForRent } from '../../../../shared/interface/property';
import { MockPropertyService } from '../../../../shared/services/mock-property.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.scss'],
})
export class HomeDetailsComponent {

  @Input() propertyDetails: latestForRent

  constructor(public propertyService: MockPropertyService){}

  print(){
    window.print()
  }
}
