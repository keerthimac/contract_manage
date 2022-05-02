const router = require("express").Router();
const pool = require("../db");

router.get("/:name", async (req, res) => {
  try {
    const { name } = req.params;
    //console.log(code);
    const response = await pool.query(
      // "SELECT bank_name,branch_code,branch_location FROM banks AS bk LEFT JOIN branches AS br ON bk.bank_code = br.bank_code WHERE bank_name like ?",
      // ["%bank%"]
      "SELECT id FROM arch.sub_contractors WHERE sub_name = ? ;",
      [name]
    );
    res.json(response[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.post("/subName", async (req, res) => {
  try {
    const { subName, subNickName, subType } = req.body;
    //destructure the body here
    //console.log(subName);

    const response = await pool.query(
      "INSERT INTO arch.sub_contractors (sub_name,sub_nick_name,sub_contract_type_id) VALUES (?,?,?)",
      [subName, subNickName, subType]
    );
    res.json(response[0]);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
