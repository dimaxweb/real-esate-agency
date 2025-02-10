import { Injectable } from '@angular/core';
import {IPropertyService} from "./propery-service-interface";
import {
  agencyData,
  agentsData,
  agentsDetails,
  bannerData,
  blogDetailsData,
  brandData,
  currency,
  faqData,
  featuredPropertyData,
  happyClientsData,
  homeSectionData,
  latestBlogData,
  latestForRent,
  latestForRentData,
  latestForSaleData,
  newOfferData,
  peopleSayData,
  pricingPlanData,
  privacyData,
  propertyCityData,
  propertyOfDayData, providedServicesData,
  sliderData, termsData
} from "../interface/property";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PropertyService implements IPropertyService{

  constructor() { }

  Currency: { name: string; currency: string; symbol: string; price: number };
  currency: currency;
  currencyItem: any;

  agencyData(): Observable<agencyData> {
    throw new Error('Not implemented')
  }

  agentsData(): Observable<agentsData> {
    throw new Error('Not implemented')
  }

  agentsDetailsData(): Observable<agentsDetails> {
    throw new Error('Not implemented')
  }

  bannerData(): Observable<bannerData> {
    throw new Error('Not implemented')
  }

  blogDetailsData(): Observable<blogDetailsData> {
    throw new Error('Not implemented')
  }

  brandData(): Observable<brandData> {
    throw new Error('Not implemented')
  }

  faqData(): Observable<faqData> {
    throw new Error('Not implemented')
  }

  featuredPropertyData(): Observable<featuredPropertyData> {
    throw new Error('Not implemented')
  }

  filterPropertyData(filter: any): Observable<any> {
    throw new Error('Not implemented')
  }

  getImage(id: any): Observable<any> {
    throw new Error('Not implemented')
  }

  getPager(totalItems: number, currentPage?: number, pageSize?: number): {
    totalItems: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
    startPage: number;
    endPage: number;
    startIndex: number;
    endIndex: number;
    pages: number[]
  } {
    return {
      currentPage: 0,
      endIndex: 0,
      endPage: 0,
      pageSize: 0,
      pages: [],
      startIndex: 0,
      startPage: 0,
      totalItems: 0,
      totalPages: 0
    };
  }

  getPropertyDetail(id: number): Observable<latestForRent[]> {
    throw new Error('Not implemented')
  }

  getSliderData(): Observable<sliderData> {
    throw new Error('Not implemented')
  }

  happyClientsData(): Observable<happyClientsData> {
    throw new Error('Not implemented')
  }

  homeSliderData(): Observable<homeSectionData> {
    throw new Error('Not implemented')
  }

  latestBlogData(): Observable<latestBlogData> {
    throw new Error('Not implemented')
  }

  latestForRentData(): Observable<latestForRentData> {
    throw new Error('Not implemented')
  }

  newOfferData(): Observable<newOfferData> {
    throw new Error('Not implemented')
  }

  peopleSayData(): Observable<peopleSayData> {
    throw new Error('Not implemented')
  }

  pricingPlanData(): Observable<pricingPlanData> {
    throw new Error('Not implemented')
  }

  privacyPolicyData(): Observable<privacyData> {
    throw new Error('Not implemented')
  }

  propertyData(): Observable<latestForSaleData> {
    throw new Error('Not implemented')
  }

  propertyDetailsData(): Observable<any> {
    throw new Error('Not implemented')
  }

  propertyInCityData(): Observable<propertyCityData> {
    throw new Error('Not implemented')
  }

  propertyOfDayData(): Observable<propertyOfDayData> {
    throw new Error('Not implemented')
  }

  providesServices(): Observable<providedServicesData> {
    throw new Error('Not implemented')
  }

  termsConditionData(): Observable<termsData> {
    throw new Error('Not implemented')
  }
}
