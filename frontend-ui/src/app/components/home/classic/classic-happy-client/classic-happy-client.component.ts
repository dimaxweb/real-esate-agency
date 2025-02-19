import { Component } from '@angular/core';
import { happyClients } from '../../../../shared/interface/property';
import { PropertyMockService } from '../../../../shared/services/property-mock.service';

@Component({
  selector: 'app-classic-happy-client',
  templateUrl: './classic-happy-client.component.html',
  styleUrls: ['./classic-happy-client.component.scss'],
})
export class ClassicHappyClientComponent {
  public desc = 'Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening';
  public title = 'classic';
  public happyClientsData: happyClients[] = [];

  constructor(private propertyService: PropertyMockService) {}

  ngOnInit() {
    this.propertyService.happyClientsData().subscribe((response) => {
      this.happyClientsData = response.clients.filter(
        (item) => item.type == this.title
      );
    });
  }
}
