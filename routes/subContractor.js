const router = require("express").Router();
const pool = require("../db");

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
