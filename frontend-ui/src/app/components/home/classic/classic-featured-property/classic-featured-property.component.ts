import { Component } from '@angular/core';
import { featuredProperty } from '../../../../shared/interface/property';
import { MockPropertyService } from '../../../../shared/services/mock-property.service';

@Component({
  selector: 'app-classic-featured-property',
  templateUrl: './classic-featured-property.component.html',
  styleUrls: ['./classic-featured-property.component.scss'],
})
export class ClassicFeaturedPropertyComponent {

  public title = 'classic';
  public featuredProperty: featuredProperty[] = [];

  constructor(public propertyService: MockPropertyService) {}

  ngOnInit() {
    this.propertyService.featuredPropertyData().subscribe((response) => {
      this.featuredProperty = response.featuredProperty.filter(
        (item) => item.type == this.title
      );
    });
  }

}
