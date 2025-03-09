import { Component, Input } from '@angular/core';
import { happyClients } from '../../../../shared/interface/property';
import { PropertyMockService } from '../../../../shared/services/property-mock.service';

@Component({
  selector: 'app-corporate-clients',
  templateUrl: './corporate-clients.component.html',
  styleUrls: ['./corporate-clients.component.scss']
})
export class CorporateClientsComponent {

  @Input() tagClass: string;
  @Input() svgClass: boolean;

  public desc = "Residences can be classified into different type of housing tenure can used for same physical type.";
  public title = 'corporate';

  public happyClientsData: happyClients[] = [];

  constructor(private propertyService : PropertyMockService) { }

  ngOnInit(){
    this.propertyService.happyClientsData().subscribe(response => {
      this.happyClientsData = response.clients.filter(item => item.type == this.title)
  });
}
}
