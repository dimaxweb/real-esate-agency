import { Observable } from "rxjs";
import { agencyData, agentsData, agentsDetails, bannerData, blogDetailsData, brandData, currency, faqData, featuredPropertyData, happyClientsData, homeSectionData, latestBlogData, latestForRent, latestForRentData, latestForSale, latestForSaleData, newOfferData, peopleSayData, pricingPlanData, privacyData, propertyCityData, propertyOfDayData, providedServicesData, sliderData, termsData } from '../interface/property';
export interface IPropertyService {
    currencyItem: any;
    currency: currency;
    Currency: { name: string, currency: string, symbol: string, price: number };
  
    homeSliderData(): Observable<homeSectionData>;
    propertyData(): Observable<latestForSaleData>;
    featuredPropertyData(): Observable<featuredPropertyData>;
    latestForRentData(): Observable<latestForRentData>;
    newOfferData(): Observable<newOfferData>;
    propertyInCityData(): Observable<propertyCityData>;
    bannerData(): Observable<bannerData>;
    agentsData(): Observable<agentsData>;
    happyClientsData(): Observable<happyClientsData>;
    brandData(): Observable<brandData>;
    providesServices(): Observable<providedServicesData>;
    pricingPlanData(): Observable<pricingPlanData>;
    latestBlogData(): Observable<latestBlogData>;
    propertyOfDayData(): Observable<propertyOfDayData>;
    peopleSayData(): Observable<peopleSayData>;
    propertyDetailsData(): Observable<any>;
    blogDetailsData(): Observable<blogDetailsData>;
    agencyData(): Observable<agencyData>;
    faqData(): Observable<faqData>;
    termsConditionData(): Observable<termsData>;
    privacyPolicyData(): Observable<privacyData>;
    agentsDetailsData(): Observable<agentsDetails>;
    getSliderData(): Observable<sliderData>;
    filterPropertyData(filter: any): Observable<any>;
    getImage(id: any): Observable<any>;
    getPropertyDetail(id: number): Observable<latestForRent[]>;
    getPager(totalItems: number, currentPage?: number, pageSize?: number): {
      totalItems: number;
      currentPage: number;
      pageSize: number;
      totalPages: number;
      startPage: number;
      endPage: number;
      startIndex: number;
      endIndex: number;
      pages: number[];
    };
  }
  