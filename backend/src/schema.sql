-- 1. Users Table
CREATE TABLE IF NOT EXISTS Users (
                                     id SERIAL PRIMARY KEY,
    -- Name in two languages (ru, he).
    -- Example: { "ru": "Имя пользователя", "he": "שם המשתמש" }
                                     name JSONB NOT NULL,

                                     email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- 2. Clients Table
CREATE TABLE IF NOT EXISTS Clients (
                                       id SERIAL PRIMARY KEY,
                                       user_id INTEGER REFERENCES Users(id) ON DELETE CASCADE,

    is_potential BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- 3. Agents Table
CREATE TABLE IF NOT EXISTS Agents (
                                      id SERIAL PRIMARY KEY,
                                      user_id INTEGER REFERENCES Users(id) ON DELETE CASCADE,

    -- Agency name in two languages
    agency_name JSONB NOT NULL,

    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- 4. Properties Table
CREATE TABLE IF NOT EXISTS Properties (
    id SERIAL PRIMARY KEY,

    -- title and description are JSONB with keys: { "ru": "...", "he": "..." }
    title JSONB NOT NULL,
    description JSONB,
    min_price DECIMAL(15, 2) NOT NULL,
    max_price DECIMAL(15, 2) NOT NULL,
    number_of_rooms INTEGER NOT NULL,
    bathrooms INTEGER NOT NULL,
    area DECIMAL(10, 2) NOT NULL,
    listing_type VARCHAR(10) CHECK (listing_type IN ('sale', 'rent')) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('active', 'sold')) NOT NULL,
    agent_id INTEGER REFERENCES Agents(id) ON DELETE SET NULL,
    pictures JSONB,  -- e.g., ["pic1.jpg", "pic2.jpg"]
    videos JSONB,    -- e.g., ["vid1.mp4", "vid2.mp4"]
    year_built INTEGER,
    parking_spaces INTEGER,
    lot_size DECIMAL(10, 2),
    floor_number INTEGER,
    -- For textual amenities or property type, also i18n:
    amenities JSONB,     -- { "ru": "...", "he": "..." }
    property_type JSONB, -- { "ru": "...", "he": "..." }
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- 5. PropertyAddress Table
CREATE TABLE IF NOT EXISTS PropertyAddress (
                                               id SERIAL PRIMARY KEY,
                                               property_id INTEGER REFERENCES Properties(id) ON DELETE CASCADE,

    address_line1 JSONB NOT NULL, -- { "ru": "...", "he": "..." }
    address_line2 JSONB,          -- { "ru": "...", "he": "..." }
    city JSONB NOT NULL,          -- { "ru": "...", "he": "..." }
    state JSONB NOT NULL,         -- { "ru": "...", "he": "..." }
    country JSONB NOT NULL,       -- { "ru": "...", "he": "..." }

    postal_code VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- 6. WishList Table
CREATE TABLE IF NOT EXISTS WishList (
                                        id SERIAL PRIMARY KEY,
                                        user_id INTEGER REFERENCES Users(id) ON DELETE CASCADE,
    property_id INTEGER REFERENCES Properties(id) ON DELETE CASCADE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- 7. FeaturedProperties Table
CREATE TABLE IF NOT EXISTS FeaturedProperties (
                                                  id SERIAL PRIMARY KEY,
                                                  property_id INTEGER REFERENCES Properties(id) ON DELETE CASCADE,

    feature_start_date TIMESTAMP NOT NULL,
    feature_end_date TIMESTAMP NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- 8. Inquiries Table
CREATE TABLE IF NOT EXISTS Inquiries (
                                         id SERIAL PRIMARY KEY,

                                         client_id INTEGER REFERENCES Clients(id) ON DELETE CASCADE,

    -- A textual message in two languages
    message JSONB,  -- { "ru": "...", "he": "..." }

    inquiry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    -- Additional optional i18n or numeric fields if the inquiry is not tied to a specific existing property
    property_location JSONB,  -- { "ru": "...", "he": "..." }
    min_price DECIMAL(15, 2),
    max_price DECIMAL(15, 2),
    number_of_rooms INTEGER,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS Leads (
    id SERIAL PRIMARY KEY,
    name JSONB NOT NULL,           -- e.g. { "en": "John Doe", "he": "ג'ון דו", "ru": "Джон Доу" }
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    message JSONB,                 -- Multilingual message
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
