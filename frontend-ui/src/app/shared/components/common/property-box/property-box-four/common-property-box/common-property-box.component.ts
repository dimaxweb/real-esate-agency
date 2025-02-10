import { Component, Input } from '@angular/core';
import { latestForRent } from '../../../../../../shared/interface/property';
import { MockPropertyService } from '../../../../../services/mock-property.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-common-property-box',
  templateUrl: './common-property-box.component.html',
  styleUrls: ['./common-property-box.component.scss'],
})
export class CommonPropertyBoxComponent {

  @Input() propertyData: latestForRent;

  constructor(
    public propertyService: MockPropertyService,
    private route: ActivatedRoute,
    private router: Router) {}

  getDetails(id:number){
    this.router.navigate(['/property/image-box'], {
      relativeTo: this.route,
      queryParams: { id : id },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false, // do trigger navigation
    });
  }

}
