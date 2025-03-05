/**
 * model-classes.ts
 *
 * Class implementations for the interfaces defined in model-interfaces.ts
 */

import {
  II18nText,
  IUser,
  IClient,
  IAgent,
  IProperty,
  IPropertyAddress,
  IWishList,
  IFeaturedProperty,
  IInquiry,
  IAreaDetails, ICity, IRegion, ICountry, IPropertyMedia
} from "./model-interfaces";

/**
 * Class for User, implementing IUser
 */
export class User implements IUser {
    id?: number;
    name: II18nText;
    email: string;
    password_hash: string;
    created_at?: Date | string;
    updated_at?: Date | string;

    constructor(props: Omit<IUser, "id" | "created_at" | "updated_at"> & Partial<IUser>) {
        this.id = props.id;
        this.name = props.name;
        this.email = props.email;
        this.password_hash = props.password_hash;
        this.created_at = props.createdAt?? new Date().toISOString();
        this.updated_at = props.updatedAt ?? new Date().toISOString();
    }
}

/**
 * Class for Client, implementing IClient
 */
export class Client implements IClient {
    id?: number;
    user_id: number;
    is_potential?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;

    constructor(props:Partial<IClient>) {
        this.id = props.id;
        this.user_id = props.user_id;
        this.is_potential = props.is_potential ?? true;
        this.created_at = props.createdAt ?? new Date().toISOString();
        this.updated_at = props.updatedAt ?? new Date().toISOString();
    }
}

/**
 * Class for Agent, implementing IAgent
 */
export class Agent implements IAgent {
    id?: number;
    user_id: number;
    agency_name: II18nText;
    phone?: string;
    created_at?: Date | string;
    updated_at?: Date | string;

    constructor(props: Partial<IAgent>) {
        this.id = props.id;
        this.user_id = props.user_id;
        this.agency_name = props.agency_name;
        this.phone = props.phone;
        this.created_at = props.createdAt;
        this.updated_at = props.updatedAt;
}
}
// Refactored Property class implementing the updated IProperty
export class Property implements IProperty {
  id?: number;
  title: II18nText;
  description?: II18nText;
  min_price:number;
  max_price:number;
  number_of_rooms: number;
  bathrooms: number;
  listing_type:"sale" | "rent";
  status: "active" | "sold";
  agentId?: number;
  yearBuilt?: number;
  amenities?: II18nText;
  propertyType?: II18nText;
  property_media:IPropertyMedia
  area_details:IAreaDetails;
  property_address?: IPropertyAddress;
  createdAt?: Date | string;
  updatedAt?: Date | string;

  constructor(props:  Partial<IProperty>) {
    this.id = props.id;
    this.title = props.title;
    this.description = props.description;
    this.min_price = props.min_price;
    this.max_price = props.max_price;
    this.number_of_rooms = props.number_of_rooms;
    this.bathrooms = props.bathrooms;
    this.listing_type = props.listing_type;
    this.status = props.status;
    this.agentId = props.agent_id;
    this.yearBuilt = props.year_built;
    this.amenities = props.amenities;
    this.propertyType = props.property_type;
    this.area_details = props.area_details;
    this.property_media = props.property_media;
    this.property_address = props.property_address;
    this.createdAt = props.createdAt ?? new Date().toISOString();
    this.updatedAt = props.updatedAt ?? new Date().toISOString();
  }
}

/**
 * Class for PropertyAddress, implementing IPropertyAddress
 */
export class PropertyAddress implements IPropertyAddress {
    id?: number;
    property_id: number;
    address_line1: II18nText;
    address_line2?: II18nText;
    city_id: number;
    region_id:number;
    country_id:number;
    postal_code: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;

    constructor(
        props: Partial<IPropertyAddress>
    ) {
        this.id = props.id;
        this.property_id = props.property_id;
        this.address_line1 = props.address_line1;
        this.address_line2 = props.address_line2;
        this.city_id= props.city_id;
        this.region_id= props.region_id;
        this.country_id=props.country_id;
        this.postal_code = props.postal_code;
        this.createdAt = props.createdAt ?? new Date().toISOString();
        this.updatedAt = props.updatedAt ?? new Date().toISOString();
    }
}

/**
 * Class for WishList, implementing IWishList
 */
export class WishList implements IWishList {
    id?: number;
    user_id: number;
    property_id: number;
    created_at?: Date | string;
    updated_at?: Date | string;

    constructor(props:  Partial<IWishList>) {
        this.id = props.id;
        this.user_id = props.user_id;
        this.property_id = props.property_id;
        this.created_at = props.createdAt ?? new Date().toISOString();
        this.updated_at = props.updatedAt ?? new Date().toISOString();
    }
}

/**
 * Class for FeaturedProperty, implementing IFeaturedProperty
 */
export class FeaturedProperty implements IFeaturedProperty {
    id?: number;
    property_id: number;
    feature_start_date: Date | string;
    feature_end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;

    constructor(
        props: Omit<IFeaturedProperty, "id" | "created_at" | "updated_at"> & Partial<IFeaturedProperty>
    ) {
        this.id = props.id;
        this.property_id = props.property_id;
        this.feature_start_date = props.feature_start_date;
        this.feature_end_date = props.feature_end_date;
    }
}

/**
 * Class for Inquiry, implementing IInquiry
 */
export class Inquiry implements IInquiry {
    id?: number;
    client_id: number;
    message?: II18nText;
    inquiry_date?: Date | string;
    propertyAddress: IPropertyAddress[];
    min_price?: number;
    max_price?: number;
    number_of_rooms?: number;
    created_at?: Date | string;
    updated_at?: Date | string;

    constructor(props: Omit<IInquiry, "id" | "created_at" | "updated_at"> & Partial<IInquiry>) {
        this.id = props.id;
        this.client_id = props.client_id;
        this.message = props.message;
        this.inquiry_date = props.inquiry_date ?? new Date().toISOString();
        this.propertyAddress = props.propertyAddress;
        this.min_price = props.min_price;
        this.max_price = props.max_price;
        this.number_of_rooms = props.number_of_rooms;
    }
}
/**
 * Country Entity
 */
export class Country implements ICountry {
  id: number; // Unique identifier for the country

  name: II18nText; // Multilingual country name

  code: string; // ISO country code (e.g., "US", "IN")

  phone_code?: string; // Optional country phone code (e.g., "+1", "+91")

  createdAt?: Date | string; // Timestamp for record creation

  updatedAt?: Date | string; // Timestamp for record updates
}

/**
 * Region Entity
 */
export class Region implements IRegion {
  id: number; // Unique identifier for the region

  name: II18nText; // Multilingual region name

  country_id: number; // ID of the associated country

  createdAt?: Date | string; // Timestamp for record creation

  updatedAt?: Date | string; // Timestamp for record updates
}

/**
 * City Entity
 */
export class City implements ICity {
  id: number; // Unique identifier for the city

  name: II18nText; // Multilingual city name

  state_id: number; // ID of the associated region or state

  country_id: number; // ID of the associated country

  createdAt?: Date | string; // Timestamp for record creation

  updatedAt?: Date | string; // Timestamp for record updates
}
