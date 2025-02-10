import { Component, Input } from '@angular/core';
import { latestForRent } from '../../../../shared/interface/property';
import { MockPropertyService } from '../../../../shared/services/mock-property.service';

@Component({
  selector: 'app-related-property',
  templateUrl: './related-property.component.html',
  styleUrls: ['./related-property.component.scss'],
})
export class RelatedPropertyComponent {

  @Input() type: string;
  @Input() totalData: number;

  public latestForRentData: latestForRent[] = [];

  constructor(private propertyService: MockPropertyService) {}

  ngOnInit() {
    this.propertyService.latestForRentData().subscribe((response) => {
      this.latestForRentData = response.latestForRent.filter((item) =>
        item.type.includes('slider_filter_search')
      );
    });
  }
}
