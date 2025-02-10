/**
 * model-interfaces.ts
 *
 * Interfaces for your PostgreSQL tables,
 * with 'I' prefix to distinguish them clearly.
 */

/**
 * Helper interface for multilingual fields (English, Hebrew, Russian).
 * Example: { en: "English text", he: "טקסט בעברית", ru: "Текст на русском" }
 */
export interface II18nText {
    en?: string;
    he?: string;
    ru?: string;
}

/**
 * Users Table
 */
export interface IUser {
    id?: number;
    name: II18nText;
    email: string;
    password_hash: string;
    created_at?: Date | string;
    updated_at?: Date | string;
}

/**
 * Clients Table
 */
export interface IClient {
    id?: number;
    user_id: number;
    is_potential?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
}

/**
 * Agents Table
 */
export interface IAgent {
    id?: number;
    user_id: number;
    agency_name: II18nText;
    phone?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
}

/**
 * Properties Table
 */
export interface IProperty {
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
}

/**
 * PropertyAddress Table
 */
export interface IPropertyAddress {
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
}

/**
 * WishList Table
 */
export interface IWishList {
    id?: number;
    user_id: number;
    property_id: number;
    created_at?: Date | string;
    updated_at?: Date | string;
}

/**
 * FeaturedProperties Table
 */
export interface IFeaturedProperty {
    id?: number;
    property_id: number;
    feature_start_date: Date | string;
    feature_end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
}

/**
 * Inquiries Table
 */
export interface IInquiry {
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
}
