use arch;
SELECT cities.id,
    cities.name_en
FROM provinces
    INNER JOIN districts ON provinces.id = districts.province_id
    INNER JOIN cities ON districts.id = cities.district_id
WHERE districts.name_en = 'kandy'