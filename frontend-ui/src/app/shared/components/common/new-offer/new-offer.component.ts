import { Component, Input } from '@angular/core';
import { MockPropertyService } from '../../../services/mock-property.service';
import { newOffer } from '../../../interface/property';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.scss']
})
export class NewOfferComponent {

  @Input() title: string = '';

  public newOfferData: newOffer[] = [];

  public Options = {
  loop: true,
  nav: false,
  dots:false,
  responsive: {
    0: {
      items: 1,
    },
    1024 : {
      items : 2
    },
  }
}

  constructor(private propertyService : MockPropertyService) { }

  ngOnInit(){
    this.propertyService.newOfferData().subscribe(response => {
      this.newOfferData = response.newOffer.filter(item => item.type.includes(this.title))
  });
}


}
