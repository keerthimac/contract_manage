CREATE TABLE IF NOT EXISTS supplier_type (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    supplier_type VARCHAR(255) NOT NULL
);

INSERT INTO supplier_type (supplier_type) VALUES ('individual', 'company');

CREATE TABLE IF NOT EXISTS suppliers (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    supplier_type_id INTEGER NOT NULL,
    supplier_name VARCHAR(255) NOT NULL,
    sup_nick_name VARCHAR(255) NOT NULL,
    FOREIGN KEY(supplier_type_id) REFERENCES supplier_type(id),
);

CREATE TABLE IF NOT EXISTS supplier_address (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    supplier_id INTEGER NOT NULL,
    address_line_01 VARCHAR(255),
    address_line_02 VARCHAR(255),
    address_line_03 VARCHAR(255),
    province_id INTEGER,
    district_id INTEGER,
    city_id INTEGER,
    FOREIGN KEY(supplier_id) REFERENCES suppliers(id),
    FOREIGN KEY(province_id) REFERENCES provinces(id),
    FOREIGN KEY(district_id) REFERENCES districts(id),
    FOREIGN KEY(city_id) REFERENCES cities(id)
);

CREATE TABLE IF NOT EXISTS supplier_phone(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    supplier_id INTEGER NOT NULL,
    sup_phone_name VARCHAR(255) NOT NULL,
    sup_role VARCHAR(255) NOT NULL,
    sup_phone_number VARCHAR(55),
    FOREIGN KEY(supplier_id) REFERENCES suppliers(id)
);

CREATE TABLE IF NOT EXISTS sup_bank_accounts(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    supplier_id INTEGER NOT NULL,
    sup_account_name VARCHAR(255) NOT NULL,
    bank_code INTEGER NOT NULL,
    branch_id INTEGER NOT NULL,
    sup_account_number VARCHAR(255) NOT NULL,
    FOREIGN KEY(supplier_id) REFERENCES suppliers(id),
    FOREIGN KEY(bank_code) REFERENCES banks(bank_code),
    FOREIGN KEY(branch_id) REFERENCES branches(branch_id)
);