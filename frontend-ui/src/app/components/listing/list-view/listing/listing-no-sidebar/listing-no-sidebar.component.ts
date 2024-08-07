import { Component } from '@angular/core';
import { PropertyBoxGridService } from '../../../../../shared/services/property-box-grid.service';

@Component({
  selector: 'app-listing-no-sidebar',
  templateUrl: './listing-no-sidebar.component.html',
  styleUrls: ['./listing-no-sidebar.component.scss'],
})
export class ListingNoSidebarComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public bgImage = 'assets/images/inner-pages/submit-property.jpg';
  public title = 'No sidebar';
  public parent = 'Listing';
  public child = 'No sidebar';

  public listView: boolean = false;

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyBoxGridService: PropertyBoxGridService) {}
  
  ngOnInit() {
    document.documentElement.style.setProperty( '--theme-default', this.theme_default3);
    document.documentElement.style.setProperty( '--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty( '--theme-default4', this.theme_default4);
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }

  ngDoCheck() {
    this.listView = this.propertyBoxGridService.listView;
  }
}
