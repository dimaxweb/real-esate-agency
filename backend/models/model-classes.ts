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
    IInquiry
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
        this.created_at = props.created_at ?? new Date().toISOString();
        this.updated_at = props.updated_at ?? new Date().toISOString();
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

    constructor(props: Omit<IClient, "id" | "created_at" | "updated_at"> & Partial<IClient>) {
        this.id = props.id;
        this.user_id = props.user_id;
        this.is_potential = props.is_potential ?? true;
        this.created_at = props.created_at ?? new Date().toISOString();
        this.updated_at = props.updated_at ?? new Date().toISOString();
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

    constructor(props: Omit<IAgent, "id" | "created_at" | "updated_at"> & Partial<IAgent>) {
        this.id = props.id;
        this.user_id = props.user_id;
        this.agency_name = props.agency_name;
        this.phone = props.phone;
        this.created_at = props.created_at ?? new Date().toISOString();
        this.updated_at = props.updated_at ?? new Date().toISOString();
    }
}

/**
 * Class for Property, implementing IProperty
 */
export class Property implements IProperty {
    id?: number;
    title: II18nText;
    description?: II18nText;
    min_price: number;
    max_price: number;
    number_of_rooms: number;
    bathrooms: number;
    area: number;
    listing_type: "sale" | "rent";
    status: "active" | "sold";
    agent_id?: number;

    pictures?: string[];
    videos?: string[];

    year_built?: number;
    parking_spaces?: number;
    lot_size?: number;
    floor_number?: number;

    amenities?: II18nText;
    property_type?: II18nText;

    created_at?: Date | string;
    updated_at?: Date | string;

    constructor(props: Omit<IProperty, "id" | "created_at" | "updated_at"> & Partial<IProperty>) {
        this.id = props.id;
        this.title = props.title;
        this.description = props.description;
        this.min_price = props.min_price;
        this.max_price = props.max_price;
        this.number_of_rooms = props.number_of_rooms;
        this.bathrooms = props.bathrooms;
        this.area = props.area;
        this.listing_type = props.listing_type;
        this.status = props.status;
        this.agent_id = props.agent_id;

        this.pictures = props.pictures ?? [];
        this.videos = props.videos ?? [];

        this.year_built = props.year_built;
        this.parking_spaces = props.parking_spaces;
        this.lot_size = props.lot_size;
        this.floor_number = props.floor_number;

        this.amenities = props.amenities;
        this.property_type = props.property_type;

        this.created_at = props.created_at ?? new Date().toISOString();
        this.updated_at = props.updated_at ?? new Date().toISOString();
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
    city: II18nText;
    state: II18nText;
    country: II18nText;
    postal_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;

    constructor(
        props: Omit<IPropertyAddress, "id" | "created_at" | "updated_at"> & Partial<IPropertyAddress>
    ) {
        this.id = props.id;
        this.property_id = props.property_id;
        this.address_line1 = props.address_line1;
        this.address_line2 = props.address_line2;
        this.city = props.city;
        this.state = props.state;
        this.country = props.country;
        this.postal_code = props.postal_code;
        this.created_at = props.created_at ?? new Date().toISOString();
        this.updated_at = props.updated_at ?? new Date().toISOString();
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

    constructor(props: Omit<IWishList, "id" | "created_at" | "updated_at"> & Partial<IWishList>) {
        this.id = props.id;
        this.user_id = props.user_id;
        this.property_id = props.property_id;
        this.created_at = props.created_at ?? new Date().toISOString();
        this.updated_at = props.updated_at ?? new Date().toISOString();
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
        this.created_at = props.created_at ?? new Date().toISOString();
        this.updated_at = props.updated_at ?? new Date().toISOString();
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
    property_location?: II18nText;
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
        this.property_location = props.property_location;
        this.min_price = props.min_price;
        this.max_price = props.max_price;
        this.number_of_rooms = props.number_of_rooms;
        this.created_at = props.created_at ?? new Date().toISOString();
        this.updated_at = props.updated_at ?? new Date().toISOString();
    }
}
