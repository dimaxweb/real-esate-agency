import { Component, Input } from '@angular/core';
import { happyClients } from '../../../../shared/interface/property';
import { MockPropertyService } from '../../../../shared/services/mock-property.service';

@Component({
  selector: 'app-slider-filter-happy-client',
  templateUrl: './slider-filter-happy-client.component.html',
  styleUrls: ['./slider-filter-happy-client.component.scss']
})
export class SliderFilterHappyClientComponent {

  @Input() tagClass: string = '';
  @Input() title: string;

  public happyClientsData: happyClients[] = [];

  constructor(private propertyService : MockPropertyService) { }

  ngOnInit(){
    this.propertyService.happyClientsData().subscribe(response => {
      this.happyClientsData = response.clients.filter(item => item.type.includes(this.title))
  });
}
}
