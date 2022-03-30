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
    FOREIGN KEY(sub_contractor_id) REFERENCES sub_contractors(id)
};

CREATE TABLE IF NOT EXISTS bank_accounts{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sub_contractor_id INTEGER NOT NULL,
    sub_account_name VARCHAR(255) NOT NULL,
    sub_account_number VARCHAR(255) NOT NULL,
    sub_bank VARCHAR(55) NOT NULL,
    sub_branch VARCHAR(55) NOT NULL,
    FOREIGN KEY(sub_contractor_id) REFERENCES sub_contractors(id)
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

CREATE TABLE IF NOT EXISTS rate_schedules{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rate_schedule_name VARCHAR(255) NOT NULL,
};

--works

CREATE TABLE IF NOT EXISTS civil_works{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    civil_work VARCHAR(255) NOT NULL,
};

CREATE TABLE IF NOT EXISTS plumbing_works{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    plumbing_work VARCHAR(255) NOT NULL,
};

CREATE TABLE IF NOT EXISTS electrical_works{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    electrical_work VARCHAR(255) NOT NULL,
};

CREATE TABLE IF NOT EXISTS wood_works{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    wood_work VARCHAR(255) NOT NULL,
};

CREATE TABLE IF NOT EXISTS tile_works{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tile_work VARCHAR(255) NOT NULL,
};

CREATE TABLE IF NOT EXISTS paint_works{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    paint_work VARCHAR(255) NOT NULL,
};

CREATE TABLE IF NOT EXISTS aluminium_works{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    aluminium_work VARCHAR(255) NOT NULL,
};

--general rates

CREATE TABLE IF NOT EXISTS general_civil_rates{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rate_schedule_id INTEGER NOT NULL,
    civil_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(rate_schedule_id) REFERENCES rate_schedules(id),
    FOREIGN KEY(civil_work_id) REFERENCES civil_works(id)
};

CREATE TABLE IF NOT EXISTS general_plumbing_rates{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rate_schedule_id INTEGER NOT NULL,
    plumbing_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(rate_schedule_id) REFERENCES rate_schedules(id),
    FOREIGN KEY(plumbing_work_id) REFERENCES plumbing_works(id)
};

CREATE TABLE IF NOT EXISTS general_electrical_rates{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rate_schedule_id INTEGER NOT NULL,
    electrical_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(rate_schedule_id) REFERENCES rate_schedules(id),
    FOREIGN KEY(electrical_work_id) REFERENCES electrical_works(id)
};

CREATE TABLE IF NOT EXISTS general_wood_rates{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rate_schedule_id INTEGER NOT NULL,
    wood_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(rate_schedule_id) REFERENCES rate_schedules(id),
    FOREIGN KEY(wood_work_id) REFERENCES wood_works(id)
};

CREATE TABLE IF NOT EXISTS general_tile_rates{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rate_schedule_id INTEGER NOT NULL,
    tile_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(rate_schedule_id) REFERENCES rate_schedules(id),
    FOREIGN KEY(tile_work_id) REFERENCES tile_works(id)
};

CREATE TABLE IF NOT EXISTS general_paint_rates{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rate_schedule_id INTEGER NOT NULL,
    paint_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(rate_schedule_id) REFERENCES rate_schedules(id),
    FOREIGN KEY(paint_work_id) REFERENCES paint_works(id)
};

CREATE TABLE IF NOT EXISTS general_aluminium_rates{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rate_schedule_id INTEGER NOT NULL,
    aluminium_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(rate_schedule_id) REFERENCES rate_schedules(id),
    FOREIGN KEY(aluminium_work_id) REFERENCES aluminium_works(id)
};








--custom rates

CREATE TABLE IF NOT EXISTS custom_civil_rates{
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rate_schedule_id INTEGER NOT NULL,
    project_id INTEGER NOT NULL,
    sub_contractor_id INTEGER NOT NULL,
    civil_work_id INTEGER NOT NULL,
    rate FLOAT NOT NULL,
    FOREIGN KEY(rate_schedule_id) REFERENCES rate_schedules(id),
    FOREIGN KEY(project_id) REFERENCES projects(id),
    FOREIGN KEY(sub_contractor_id) REFERENCES sub_contractors(id),
    FOREIGN KEY(civil_work_id) REFERENCES civil_works(id)
};







