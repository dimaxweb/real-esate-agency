CREATE TABLE property_status (
    id SERIAL PRIMARY KEY,
    status VARCHAR(20) NOT NULL
);

INSERT INTO property_status (status) VALUES ('For Sale'), ('For Rent');

CREATE TABLE transaction_type (
    id SERIAL PRIMARY KEY,
    type VARCHAR(20) NOT NULL
);

INSERT INTO transaction_type (type) VALUES ('Purchase'), ('Rental');

CREATE TABLE property (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(15, 2),
    bedrooms INTEGER,
    bathrooms DECIMAL(4, 2),
    area DECIMAL(10, 2),
    location VARCHAR(255),
    status_id INTEGER REFERENCES property_status(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE agent (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    bio TEXT
);

CREATE TABLE property_agent (
    property_id INTEGER REFERENCES property(id),
    agent_id INTEGER REFERENCES agent(id),
    PRIMARY KEY (property_id, agent_id)
);

CREATE TABLE transaction (
    id SERIAL PRIMARY KEY,
    property_id INTEGER REFERENCES property(id),
    buyer_or_tenant_name VARCHAR(100),
    transaction_type_id INTEGER REFERENCES transaction_type(id),
    transaction_date DATE,
    price_paid DECIMAL(15, 2)
);
CREATE TABLE property_media (
    id SERIAL PRIMARY KEY,
    property_id INTEGER REFERENCES property(id),
    media_type VARCHAR(10) NOT NULL,
    media_url TEXT NOT NULL
);
