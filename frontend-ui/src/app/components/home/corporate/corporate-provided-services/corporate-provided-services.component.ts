import { Component, Input } from '@angular/core';
import { providedServices } from '../../../../shared/interface/property';
import { PropertyMockService } from '../../../../shared/services/property-mock.service';

@Component({
  selector: 'app-corporate-provided-services',
  templateUrl: './corporate-provided-services.component.html',
  styleUrls: ['./corporate-provided-services.component.scss']
})
export class CorporateProvidedServicesComponent {

  @Input() tagClass: string;
  @Input() svgClass: boolean;

  public title = 'corporate';
  public desc = "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";

  public providedServices : providedServices[] = []

  constructor(private propertyService : PropertyMockService) { }

  ngOnInit(){
    this.propertyService.providesServices().subscribe(response => {
      this.providedServices = response.services.filter(item => item.type == this.title)
  });
  }
}
