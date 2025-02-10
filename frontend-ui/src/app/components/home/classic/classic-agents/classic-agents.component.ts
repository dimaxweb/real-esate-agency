import { Component } from '@angular/core';
import { agents } from '../../../../shared/interface/property';
import { MockPropertyService } from '../../../../shared/services/mock-property.service';

@Component({
  selector: 'app-classic-agents',
  templateUrl: './classic-agents.component.html',
  styleUrls: ['./classic-agents.component.scss'],
})
export class ClassicAgentsComponent {
  public desc = 'Residences can be classified into different type of housing tenure can used for same physical type.';
  public title = 'classic';
  public agentsData: agents[] = [];

  constructor(private propertyService: MockPropertyService) {}

  ngOnInit() {
    this.propertyService.agentsData().subscribe((response) => {
      this.agentsData = response.agents.filter((item) => item.type == this.title);
    });
  }
}
