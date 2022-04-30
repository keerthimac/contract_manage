const router = require("express").Router();
const pool = require("../db");

router.get("/province", async (req, res) => {
  try {
    const response = await pool.query(
      // "SELECT bank_name,branch_code,branch_location FROM banks AS bk LEFT JOIN branches AS br ON bk.bank_code = br.bank_code WHERE bank_name like ?",
      // ["%bank%"]
      // "SELECT * FROM provinces ORDER BY name_en ASC"
      "SELECT id as province_id,name_en as province_name FROM provinces ORDER BY name_en ASC"
    );
    res.json(response[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/district/:id", async (req, res) => {
  try {
    const { id } = req.params;
    //console.log(code);
    const response = await pool.query(
      // "SELECT bank_name,branch_code,branch_location FROM banks AS bk LEFT JOIN branches AS br ON bk.bank_code = br.bank_code WHERE bank_name like ?",
      // ["%bank%"]
      "SELECT districts.id as district_id, districts.name_en as district_name FROM provinces JOIN districts ON provinces.id=districts.province_id WHERE provinces.id= ? ORDER BY districts.name_en ASC;",
      [id]
    );
    res.json(response[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// router.get("/city/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     //console.log(code);
//     const response = await pool.query(
//       // "SELECT bank_name,branch_code,branch_location FROM banks AS bk LEFT JOIN branches AS br ON bk.bank_code = br.bank_code WHERE bank_name like ?",
//       // ["%bank%"]
//       "SELECT cities.id as city_id ,cities.name_en as city_name FROM districts JOIN cities ON districts.id=cities.district_id WHERE districts.id=? ORDER BY cities.name_en ASC;",
//       [id]
//     );
//     res.json(response[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });
router.get("/city/:id/:pro_id", async (req, res) => {
  try {
    const { id, pro_id } = req.params;
    //console.log(code);
    const response = await pool.query(
      // "SELECT bank_name,branch_code,branch_location FROM banks AS bk LEFT JOIN branches AS br ON bk.bank_code = br.bank_code WHERE bank_name like ?",
      // ["%bank%"]
      "SELECT cities.id as city_id ,cities.name_en as city_name FROM materials.provinces JOIN districts ON provinces.id=districts.province_id JOIN cities ON districts.id = cities.district_id WHERE provinces.id=? AND districts.id = ?;",
      [pro_id, id]
    );
    res.json(response[0]);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
