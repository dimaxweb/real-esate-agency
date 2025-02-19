import { Action, Selector, State, StateContext } from "@ngxs/store";
import { latestForRent } from "../../interface/property";
import { Injectable } from "@angular/core";
import { PropertyMockService } from "../../services/property-mock.service";
import { getPropertyDetails } from "../actions/property-detail.action";
import { tap } from "rxjs";



@State<propertyDetailsModel>({
  name: 'property',
  defaults: {
    data: {
      property: []
    }
  }
})
export class propertyDetailsModel{
  data: {
    property: latestForRent[]
  }
}


@Injectable()
export class propertyState{
  constructor(private propertyService: PropertyMockService){}

  @Selector()
  static property(state: propertyDetailsModel){
    return state.data.property
  }

  @Action(getPropertyDetails)
  getProperty(ctx: StateContext<propertyDetailsModel>, action: getPropertyDetails){
    return this.propertyService.getPropertyDetail(action.id).pipe(tap((res) => {
      ctx.setState({
        data: {
          property: res
        }
      })
    }))
  }
}
