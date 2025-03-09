import { Component, Input } from '@angular/core';
import { pricingPlan } from '../../../../shared/interface/property';
import { PropertyMockService } from '../../../../shared/services/property-mock.service';

@Component({
  selector: 'app-corporate-pricing-plan',
  templateUrl: './corporate-pricing-plan.component.html',
  styleUrls: ['./corporate-pricing-plan.component.scss']
})
export class CorporatePricingPlanComponent {

  @Input() tagClass: string;
  @Input() svgClass: boolean;

  public title = 'corporate';
  public desc = "Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening";

  public pricingPlan : pricingPlan[] = []

  constructor(public propertyService : PropertyMockService) { }

  ngOnInit(){
    this.propertyService.pricingPlanData().subscribe(response => {
      this.pricingPlan = response.pricingPlan.filter(item => item.type == this.title)
  });

}
}
