CREATE DATABASE IF NOT EXISTS arch;
use arch;
CREATE TABLE IF NOT EXISTS sub_contract_type(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sub_contract_type VARCHAR(255) NOT NULL
);
-- Sub Contractor Info
CREATE TABLE IF NOT EXISTS sub_contractors (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sub_name VARCHAR(255) NOT NULL,
    sub_contract_type_id INTEGER NOT NULL,
    sub_nick_name VARCHAR(255) NOT NULL,
    sub_address VARCHAR(255),
    province_id INTEGER,
    district_id INTEGER,
    city_id INTEGER,
    FOREIGN KEY(province_id) REFERENCES provinces(id),
    FOREIGN KEY(district_id) REFERENCES districts(id),
    FOREIGN KEY(city_id) REFERENCES cities(id)
);
CREATE TABLE IF NOT EXISTS sub_contact_numbers(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sub_contractor_id INTEGER NOT NULL,
    sub_contact_owner_name VARCHAR(255) NOT NULL,
    sub_role VARCHAR(255) NOT NULL,
    sub_contact_number VARCHAR(55) NOT NULL,
    FOREIGN KEY(sub_contractor_id) REFERENCES sub_contractors(id)
);
-- banks info
CREATE TABLE IF NOT EXISTS banks(
    bank_code INT NOT NULL,
    bank_name VARCHAR(250),
    PRIMARY KEY(bank_code)
);
CREATE TABLE IF NOT EXISTS branches(
    branch_id INT AUTO_INCREMENT,
    bank_code INT NOT NULL,
    branch_code INT,
    branch_location VARCHAR(250),
    PRIMARY key(branch_id),
    FOREIGN KEY (bank_code) REFERENCES banks(bank_code)
);
CREATE TABLE IF NOT EXISTS sub_bank_accounts(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sub_contractor_id INTEGER NOT NULL,
    sub_account_name VARCHAR(255) NOT NULL,
    bank_code INTEGER NOT NULL,
    branch_id INTEGER NOT NULL,
    sub_account_number VARCHAR(255) NOT NULL,
    FOREIGN KEY(sub_contractor_id) REFERENCES sub_contractors(id),
    FOREIGN KEY(bank_code) REFERENCES banks(bank_code),
    FOREIGN KEY(branch_id) REFERENCES branches(branch_id)
);
-- project Info
CREATE TABLE IF NOT EXISTS projects(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    client_name VARCHAR(255) NOT NULL,
    client_address VARCHAR(255),
    province_id INTEGER,
    district_id INTEGER,
    city_id INTEGER,
    FOREIGN KEY(province_id) REFERENCES provinces(id),
    FOREIGN KEY(district_id) REFERENCES districts(id),
    FOREIGN KEY(city_id) REFERENCES cities(id)
);
-- rate schedule
CREATE TABLE IF NOT EXISTS sub_rate_schedules(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sub_rate_schedule_name VARCHAR(255) NOT NULL
);
-- works
CREATE TABLE IF NOT EXISTS sub_civil_works(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    civil_work VARCHAR(255) NOT NULL
);
CREATE TABLE IF NOT EXISTS sub_plumbing_works(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    plumbing_work VARCHAR(255) NOT NULL
);
CREATE TABLE IF NOT EXISTS sub_electrical_works(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    electrical_work VARCHAR(255) NOT NULL
);
CREATE TABLE IF NOT EXISTS sub_wood_works(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    wood_work VARCHAR(255) NOT NULL
);
CREATE TABLE IF NOT EXISTS sub_tile_works(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    tile_work VARCHAR(255) NOT NULL
);
CREATE TABLE IF NOT EXISTS sub_paint_works(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    paint_work VARCHAR(255) NOT NULL
);
CREATE TABLE IF NOT EXISTS sub_aluminium_works(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    aluminium_work VARCHAR(255) NOT NULL
);
-- general rates
CREATE TABLE IF NOT EXISTS general_sub_civil_rates(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sub_rate_schedule_id INTEGER NOT NULL,
    sub_civil_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(sub_rate_schedule_id) REFERENCES sub_rate_schedules(id),
    FOREIGN KEY(sub_civil_work_id) REFERENCES sub_civil_works(id)
);
CREATE TABLE IF NOT EXISTS general_sub_plumbing_rates(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sub_rate_schedule_id INTEGER NOT NULL,
    sub_plumbing_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(sub_rate_schedule_id) REFERENCES sub_rate_schedules(id),
    FOREIGN KEY(sub_plumbing_work_id) REFERENCES sub_plumbing_works(id)
);
CREATE TABLE IF NOT EXISTS general_sub_electrical_rates(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sub_rate_schedule_id INTEGER NOT NULL,
    sub_electrical_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(sub_rate_schedule_id) REFERENCES sub_rate_schedules(id),
    FOREIGN KEY(sub_electrical_work_id) REFERENCES sub_electrical_works(id)
);
CREATE TABLE IF NOT EXISTS general_sub_wood_rates(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sub_rate_schedule_id INTEGER NOT NULL,
    sub_wood_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(sub_rate_schedule_id) REFERENCES sub_rate_schedules(id),
    FOREIGN KEY(sub_wood_work_id) REFERENCES sub_wood_works(id)
);
CREATE TABLE IF NOT EXISTS general_sub_tile_rates(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sub_rate_schedule_id INTEGER NOT NULL,
    sub_tile_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(sub_rate_schedule_id) REFERENCES sub_rate_schedules(id),
    FOREIGN KEY(sub_tile_work_id) REFERENCES sub_tile_works(id)
);
CREATE TABLE IF NOT EXISTS general_sub_paint_rates(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sub_rate_schedule_id INTEGER NOT NULL,
    sub_paint_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(sub_rate_schedule_id) REFERENCES sub_rate_schedules(id),
    FOREIGN KEY(sub_paint_work_id) REFERENCES sub_paint_works(id)
);
CREATE TABLE IF NOT EXISTS general_sub_aluminium_rates(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sub_rate_schedule_id INTEGER NOT NULL,
    sub_aluminium_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(sub_rate_schedule_id) REFERENCES sub_rate_schedules(id),
    FOREIGN KEY(sub_aluminium_work_id) REFERENCES sub_aluminium_works(id)
);
-- custom rates
CREATE TABLE IF NOT EXISTS custom_sub_civil_rates(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sub_rate_schedule_id INTEGER NOT NULL,
    project_id INTEGER NOT NULL,
    sub_contractor_id INTEGER NOT NULL,
    sub_civil_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(sub_rate_schedule_id) REFERENCES sub_rate_schedules(id),
    FOREIGN KEY(project_id) REFERENCES projects(id),
    FOREIGN KEY(sub_contractor_id) REFERENCES sub_contractors(id),
    FOREIGN KEY(sub_civil_work_id) REFERENCES sub_civil_works(id)
);
CREATE TABLE IF NOT EXISTS custom_sub_plumbing_rates(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sub_rate_schedule_id INTEGER NOT NULL,
    project_id INTEGER NOT NULL,
    sub_contractor_id INTEGER NOT NULL,
    sub_plumbing_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(sub_rate_schedule_id) REFERENCES sub_rate_schedules(id),
    FOREIGN KEY(project_id) REFERENCES projects(id),
    FOREIGN KEY(sub_contractor_id) REFERENCES sub_contractors(id),
    FOREIGN KEY(sub_plumbing_work_id) REFERENCES sub_plumbing_works(id)
);
CREATE TABLE IF NOT EXISTS custom_sub_electrical_rates(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sub_rate_schedule_id INTEGER NOT NULL,
    project_id INTEGER NOT NULL,
    sub_contractor_id INTEGER NOT NULL,
    sub_electrical_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(sub_rate_schedule_id) REFERENCES sub_rate_schedules(id),
    FOREIGN KEY(project_id) REFERENCES projects(id),
    FOREIGN KEY(sub_contractor_id) REFERENCES sub_contractors(id),
    FOREIGN KEY(sub_electrical_work_id) REFERENCES sub_electrical_works(id)
);
CREATE TABLE IF NOT EXISTS custom_sub_wood_rates(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sub_rate_schedule_id INTEGER NOT NULL,
    project_id INTEGER NOT NULL,
    sub_contractor_id INTEGER NOT NULL,
    sub_wood_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(sub_rate_schedule_id) REFERENCES sub_rate_schedules(id),
    FOREIGN KEY(project_id) REFERENCES projects(id),
    FOREIGN KEY(sub_contractor_id) REFERENCES sub_contractors(id),
    FOREIGN KEY(sub_wood_work_id) REFERENCES sub_wood_works(id)
);
CREATE TABLE IF NOT EXISTS custom_sub_tile_rates(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sub_rate_schedule_id INTEGER NOT NULL,
    project_id INTEGER NOT NULL,
    sub_contractor_id INTEGER NOT NULL,
    sub_tile_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(sub_rate_schedule_id) REFERENCES sub_rate_schedules(id),
    FOREIGN KEY(project_id) REFERENCES projects(id),
    FOREIGN KEY(sub_contractor_id) REFERENCES sub_contractors(id),
    FOREIGN KEY(sub_tile_work_id) REFERENCES sub_tile_works(id)
);
CREATE TABLE IF NOT EXISTS custom_sub_paint_rates(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sub_rate_schedule_id INTEGER NOT NULL,
    project_id INTEGER NOT NULL,
    sub_contractor_id INTEGER NOT NULL,
    sub_paint_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(sub_rate_schedule_id) REFERENCES sub_rate_schedules(id),
    FOREIGN KEY(project_id) REFERENCES projects(id),
    FOREIGN KEY(sub_contractor_id) REFERENCES sub_contractors(id),
    FOREIGN KEY(sub_paint_work_id) REFERENCES sub_paint_works(id)
);
CREATE TABLE IF NOT EXISTS custom_sub_aluminium_rates(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sub_rate_schedule_id INTEGER NOT NULL,
    project_id INTEGER NOT NULL,
    sub_contractor_id INTEGER NOT NULL,
    sub_aluminium_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(sub_rate_schedule_id) REFERENCES sub_rate_schedules(id),
    FOREIGN KEY(project_id) REFERENCES projects(id),
    FOREIGN KEY(sub_contractor_id) REFERENCES sub_contractors(id),
    FOREIGN KEY(sub_aluminium_work_id) REFERENCES sub_aluminium_works(id)
);
-- contract infomation
CREATE TABLE IF NOT EXISTS sub_contracts(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    contract_name VARCHAR(255) NOT NULL,
    project_id INTEGER NOT NULL,
    sub_contractor_id INTEGER NOT NULL,
    sub_rate_schedule_id INTEGER NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    FOREIGN KEY(sub_rate_schedule_id) REFERENCES sub_rate_schedules(id),
    FOREIGN KEY(project_id) REFERENCES projects(id),
    FOREIGN KEY(sub_contractor_id) REFERENCES sub_contractors(id),
);
-- bills
CREATE TABLE IF NOT EXISTS sub_contracts_bills(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sub_contract_id INTEGER NOT NULL,
    sub_contract_bill VARCHAR(255) NOT NULL,
) -- payments
CREATE TABLE IF NOT EXISTS sub_contracts(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    sub_contract_id INTEGER NOT NULL,
    sub_contract_bill_id INTEGER NOT NULL,
    sub_bank_account_id INTEGER NOT NULL,
    date DATE NOT NULL,
    amount FLOAT NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    FOREIGN KEY(sub_contract_id) REFERENCES sub_contracts(id),
    FOREIGN KEY(sub_bank_account_id) REFERENCES sub_bank_accounts(id),
    FOREIGN KEY(sub_contract_bill_id) REFERENCES sub_contracts_bills(id),
);