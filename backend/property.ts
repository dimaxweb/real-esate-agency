// property.ts
import pool from './db.js';


interface Property {
  id?: number;
  title: string;
  description: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  location: string;
}

import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';



export class PropertyService {


  private query<T>(sql: string, params?: any[]): Observable<T[]> {
    return from(pool.query(sql, params)).pipe(map(result => result.rows));
  }

  homeSliderData(): Observable<Property[]> {
    return this.query<Property>('SELECT * FROM properties WHERE type = $1', ['home_slider']);
  }

  propertyData(): Observable<Property[]> {
    return this.query<Property>('SELECT * FROM properties WHERE type = $1', ['sale']);
  }

  featuredPropertyData(): Observable<Property[]> {
    return this.query<Property>('SELECT * FROM properties WHERE is_featured = true');
  }

  latestForRentData(): Observable<Property[]> {
    return this.query<Property>('SELECT * FROM properties WHERE type = $1', ['rent']);
  }

  newOfferData(): Observable<Property[]> {
    return this.query<Property>('SELECT * FROM properties WHERE type = $1', ['new_offer']);
  }

  propertyInCityData(city: string): Observable<Property[]> {
    return this.query<Property>('SELECT * FROM properties WHERE city = $1', [city]);
  }

  bannerData(): Observable<Property[]> {
    return this.query<Property>('SELECT * FROM properties WHERE type = $1', ['banner']);
  }



  propertyOfDayData(): Observable<Property[]> {
    return this.query<Property>('SELECT * FROM properties WHERE type = $1', ['property_of_day']);
  }


  propertyDetailsData(id: number): Observable<Property> {
    return this.query<Property>('SELECT * FROM properties WHERE id = $1', [id]).pipe(
      map(properties => properties[0])
    );
  }

  filterPropertyData(filter: any): Observable<Property[]> {
    const filterKeys = Object.keys(filter);
    const filterValues = Object.values(filter);

    let query = 'SELECT * FROM properties WHERE ';
    query += filterKeys.map((key, index) => `${key} = $${index + 1}`).join(' AND ');

    return this.query<Property>(query, filterValues);
  }

  getImage(id: number): Observable<Property> {
    return this.propertyDetailsData(id);
  }

  getPropertyDetail(id: number): Observable<Property[]> {
    return this.query<Property>('SELECT * FROM properties WHERE id = $1', [id]);
  }

  public getPager(
    totalItems: number,
    currentPage: number = 1,
    pageSize: number = 6
  ) {
    let totalPages = Math.ceil(totalItems / pageSize);
    let paginateRange = 3;

    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number, endPage: number;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage < paginateRange - 1) {
      startPage = 1;
      endPage = startPage + paginateRange - 1;
    } else {
      startPage = currentPage - 1;
      endPage = currentPage + 1;
    }

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
      (i) => startPage + i
    );

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }
}



export default new PropertyService();
