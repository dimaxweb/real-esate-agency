import { Component } from '@angular/core';
import { agencyAgent, propertyDetailsData } from '../../../../shared/interface/property';
import { MockPropertyService } from '../../../../shared/services/mock-property.service';

@Component({
  selector: 'app-agency-grid',
  templateUrl: './agency-grid.component.html',
  styleUrls: ['./agency-grid.component.scss'],
})
export class AgencyGridComponent {
  
  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-pages/submit-property.jpg';
  public title = 'Agency Grid';
  public parent = 'Home';
  public child = 'Agency Grid';

  public agencyData: agencyAgent[];
  public propertyData: propertyDetailsData;

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyService: MockPropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.agencyData().subscribe((response) => {
      this.agencyData = response.allAgencyData;
    });

    this.propertyService.propertyDetailsData().subscribe((response) => {
      this.propertyData = response;
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
