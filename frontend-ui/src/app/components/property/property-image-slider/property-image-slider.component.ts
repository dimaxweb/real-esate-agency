import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { latestForRent, propertyDetailsData } from '../../../shared/interface/property';
import { MockPropertyService } from '../../../shared/services/mock-property.service';
import { propertyState } from '../../../shared/store/states/property-detail.state';
import { getPropertyDetails } from '../../../shared/store/actions/property-detail.action';

@Component({
  selector: 'app-property-image-slider',
  templateUrl: './property-image-slider.component.html',
  styleUrls: ['./property-image-slider.component.scss'],
})
export class PropertyImageSliderComponent {

  public themeLogo = 'assets/images/logo/4.png';
  public darkHeaderLogo = 'assets/images/logo/9.png'
  public footerLogo = 'assets/images/logo/footer-logo.png';

  public propertyDetailsData: propertyDetailsData;
  public propertyData: propertyDetailsData;
  public propertyId: number;
  public propertyDetails: latestForRent;

  public dataArray = ['about','feature','gallery','video','floor_plan','location'];

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  @Select(propertyState.property) property$: Observable<latestForRent[]>;

  constructor(
    private propertyService: MockPropertyService,
    private store: Store,
    private route: ActivatedRoute)
    {
      this.route.queryParams.subscribe((params) => {
        this.propertyId = params['id'];

      })

     this.store.dispatch(new getPropertyDetails(this.propertyId));

      this.property$.subscribe((res) => {
        this.propertyDetails = res[0]
      })
  }

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.propertyDetailsData().subscribe((response) => {
      this.propertyData = response;

      if (Array.isArray(this.dataArray)) {
        if (Array.isArray(response.data)) {
          this.propertyDetailsData = response.data.filter(
            (tabData: { value: string }) =>
              this.dataArray?.includes(tabData.value)
          );
        }
      }
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
