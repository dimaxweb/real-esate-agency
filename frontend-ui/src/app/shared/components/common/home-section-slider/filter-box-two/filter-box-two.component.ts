import { Component } from '@angular/core';
import { baths, beds, propertyType, rooms } from '../../../../data/advance-filter';


@Component({
  selector: 'app-filter-box-two',
  templateUrl: './filter-box-two.component.html',
  styleUrls: ['./filter-box-two.component.scss']
})
export class FilterBoxTwoComponent {

  public propertyType = propertyType;
  public rooms = rooms;
  public beds = beds;
  public baths = baths;

  public filter = {
    propertyType: propertyType[0].value,
    rooms: rooms[0].value,
    beds: beds[0].value,
    baths: baths[0].value
  };
}


