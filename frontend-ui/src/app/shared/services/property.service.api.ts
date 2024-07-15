import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { agencyData, agentsData, agentsDetails, bannerData, blogDetailsData, brandData, currency, faqData, featuredPropertyData, happyClientsData, homeSectionData, latestBlogData, latestForRent, latestForRentData, latestForSale, latestForSaleData, newOfferData, peopleSayData, pricingPlanData, privacyData, propertyCityData, propertyOfDayData, providedServicesData, sliderData, termsData } from '../interface/property';
import { IPropertyService } from './propery-service-interface';

@Injectable({
  providedIn: 'root',
})

export class PropertyServiceApi implements IPropertyService {
    currencyItem: any;
    currency: currency;
    Currency: { name: string; currency: string; symbol: string; price: number; };
    homeSliderData(): Observable<homeSectionData> {
        throw new Error('Method not implemented.');
    }
    propertyData(): Observable<latestForSaleData> {
        throw new Error('Method not implemented.');
    }
    featuredPropertyData(): Observable<featuredPropertyData> {
        throw new Error('Method not implemented.');
    }
    latestForRentData(): Observable<latestForRentData> {
        throw new Error('Method not implemented.');
    }
    newOfferData(): Observable<newOfferData> {
        throw new Error('Method not implemented.');
    }
    propertyInCityData(): Observable<propertyCityData> {
        throw new Error('Method not implemented.');
    }
    bannerData(): Observable<bannerData> {
        throw new Error('Method not implemented.');
    }
    agentsData(): Observable<agentsData> {
        throw new Error('Method not implemented.');
    }
    happyClientsData(): Observable<happyClientsData> {
        throw new Error('Method not implemented.');
    }
    brandData(): Observable<brandData> {
        throw new Error('Method not implemented.');
    }
    providesServices(): Observable<providedServicesData> {
        throw new Error('Method not implemented.');
    }
    pricingPlanData(): Observable<pricingPlanData> {
        throw new Error('Method not implemented.');
    }
    latestBlogData(): Observable<latestBlogData> {
        throw new Error('Method not implemented.');
    }
    propertyOfDayData(): Observable<propertyOfDayData> {
        throw new Error('Method not implemented.');
    }
    peopleSayData(): Observable<peopleSayData> {
        throw new Error('Method not implemented.');
    }
    propertyDetailsData(): Observable<any> {
        throw new Error('Method not implemented.');
    }
    blogDetailsData(): Observable<blogDetailsData> {
        throw new Error('Method not implemented.');
    }
    agencyData(): Observable<agencyData> {
        throw new Error('Method not implemented.');
    }
    faqData(): Observable<faqData> {
        throw new Error('Method not implemented.');
    }
    termsConditionData(): Observable<termsData> {
        throw new Error('Method not implemented.');
    }
    privacyPolicyData(): Observable<privacyData> {
        throw new Error('Method not implemented.');
    }
    agentsDetailsData(): Observable<agentsDetails> {
        throw new Error('Method not implemented.');
    }
    getSliderData(): Observable<sliderData> {
        throw new Error('Method not implemented.');
    }
    filterPropertyData(filter: any): Observable<any> {
        throw new Error('Method not implemented.');
    }
    getImage(id: any): Observable<any> {
        throw new Error('Method not implemented.');
    }
    getPropertyDetail(id: number): Observable<latestForRent[]> {
        throw new Error('Method not implemented.');
    }
    getPager(totalItems: number, currentPage?: number, pageSize?: number): { totalItems: number; currentPage: number; pageSize: number; totalPages: number; startPage: number; endPage: number; startIndex: number; endIndex: number; pages: number[]; } {
        throw new Error('Method not implemented.');
    }
    
}