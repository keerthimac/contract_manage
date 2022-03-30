--Sub Contractor Info

CREATE TABLE IF NOT EXISTS sub_contractors{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sub_name VARCHAR(255) NOT NULL,
    sub_address VARCHAR(255),
    sub_city VARCHAR(255),
    sub_district VARCHAR(255),
};

CREATE TABLE IF NOT EXISTS contact_numbers{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sub_contractor_id INTEGER NOT NULL,
    sub_contact_owner_name VARCHAR(255) NOT NULL,
    sub_role VARCHAR(255) NOT NULL,
    sub_contact_number VARCHAR(255) NOT NULL,
    FOREIGN KEY(sub_contractor_id) REFERENCES sub_contractor(id)
};

CREATE TABLE IF NOT EXISTS bank_accounts{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sub_contractor_id INTEGER NOT NULL,
    sub_account_name VARCHAR(255) NOT NULL,
    sub_account_number VARCHAR(255) NOT NULL,
    sub_bank VARCHAR(55) NOT NULL,
    sub_branch VARCHAR(55) NOT NULL,
    FOREIGN KEY(sub_contractor_id) REFERENCES sub_contractor(id)
};


--project Info

CREATE TABLE IF NOT EXISTS projects{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_name VARCHAR(255) NOT NULL,
    client_address VARCHAR(255),
    client_city VARCHAR(255),
    client_district VARCHAR(255),
};

--rate schedule

CREATE TABLE IF NOT EXISTS rate_schedule{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rate_schedule_name VARCHAR(255) NOT NULL,

};

--custom rates

CREATE TABLE IF NOT EXISTS custom_civil_rates{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_name VARCHAR(255) NOT NULL,
    client_address VARCHAR(255),
    client_city VARCHAR(255),
    client_district VARCHAR(255),
};

