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
 * Extracted base interface for common timestamp fields
 */
export interface ITimestamps {
  createdAt?: Date | string; // Renamed for camelCase consistency
  updatedAt?: Date | string;
}

/**
 * Users Table
 */
export interface IUser extends ITimestamps {
  id?: number;
  name: II18nText;
  email: string;
  password_hash: string;
}

/**
 * Clients Table
 */
export interface IClient extends ITimestamps {
  id?: number;
  user_id: number;
  is_potential?: boolean;
}

/**
 * Agents Table
 */
export interface IAgent extends ITimestamps {
  id?: number;
  user_id: number;
  agency_name: II18nText;
  phone?: string;
}

/**
 * Properties Table
 */
export interface IProperty extends ITimestamps {
  id?: number;
  title: II18nText;
  description?: II18nText;
  min_price: number;
  max_price: number;
  number_of_rooms: number;
  bathrooms: number;
  area_details: IAreaDetails;
  listing_type: "sale" | "rent";
  status: "active" | "sold";
  agent_id?: number;
  pictures?: string[];
  videos?: string[];
  year_built?: number;
  amenities?: II18nText;
  property_type?: II18nText;
  property_address?: IPropertyAddress;
  property_media:IPropertyMedia;
}

/**
 * Media Interface for Property
 */
export interface IPropertyMedia extends ITimestamps {
  id: number; // Unique identifier for the media group (media context for a property)

  property_id: number; // ID of the associated property

  pictures: IPicture[]; // List of picture objects

  videos: IVideo[]; // List of video objects

  main_picture?: IPicture; // The main (featured) picture object

  main_video?: IVideo; // The main (featured) video object
}

/**
 * Picture Interface
 */
export interface IPicture extends ITimestamps {
  id: number; // Unique identifier for the picture

  file_url: string; // URL of the picture file

  description?: string; // Optional description for the picture

  is_main: boolean; // Indicates if this is the main picture for the property
}

/**
 * Video Interface
 */
export interface IVideo extends ITimestamps {
  id: number; // Unique identifier for the video

  file_url: string; // URL of the video file

  description?: string; // Optional description for the video

  is_main: boolean; // Indicates if this is the main video for the property
}


/**
 * WishList Table
 */
export interface IWishList extends ITimestamps {
  id?: number;
  user_id: number;
  property_id: number;
}

/**
 * FeaturedProperties Table
 */
export interface IFeaturedProperty extends ITimestamps {
  id?: number;
  property_id: number;
  feature_start_date: Date | string;
  feature_end_date: Date | string;
}

/**
 * Inquiries Table
 */
export interface IInquiry extends ITimestamps {
  id?: number;
  client_id: number;
  message?: II18nText;
  inquiry_date?: Date | string;
  propertyAddress: IPropertyAddress[];
  min_price?: number;
  max_price?: number;
  number_of_rooms?: number;
}

/**
 * Property Address Table
 */
export interface IPropertyAddress extends ITimestamps {
  id?: number;
  property_id: number;
  address_line1: II18nText;
  address_line2?: II18nText;
  city_id: number;
  region_id: number;
  country_id: number;
  postal_code: string;
}

// Extracted type for media fields
export interface IMedia {
  pictures?: IPicture[];
  videos?: IVideo[];
}

// Extracted type for property size details
export interface IAreaDetails {
  area: number;
  lotSize?: number;
  floorNumber?: number;
  parkingSpaces?: number;
}


/**
 * Cities Table
 */
export interface ICity extends ITimestamps {
  id: number;
  name: II18nText; // Multilingual city name
  state_id: number; // Associated state ID
  country_id: number; // Associated country ID
}

/**
 * Regions Table
 */
export interface IRegion extends ITimestamps {
  id: number;
  name: II18nText; // Multilingual region name
  country_id: number; // Associated country ID
}


/**
 * Countries Table
 */
export interface ICountry extends ITimestamps {
  id: number;
  name: II18nText; // Multilingual country name
  code: string; // ISO country code (e.g., "US", "CA", "RU")
  phone_code?: string; // Phone code (e.g., "+1", "+972")
}
