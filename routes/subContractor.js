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

router.post("/subPhone/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { subPhoneName, subPhoneRole, subPhoneNumber } = req.body;
    console.log(id, subPhoneName, subPhoneRole, subPhoneNumber);
    //destructure the body here
    //console.log(subName);

    const response = await pool.query(
      "INSERT INTO arch.sub_contract_phone (sub_contractor_id,sub_phone_name,sub_role,sub_phone_number) VALUES (?,?,?,?)",
      [id, subPhoneName, subPhoneRole, subPhoneNumber]
    );
    res.json(response[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.post("/subAddress/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const {
      addressLine01,
      addressLine02,
      addressLine03,
      province,
      district,
      city,
    } = req.body;
    //destructure the body here
    //console.log(subName);

    const response = await pool.query(
      "INSERT INTO arch.sub_contractor_address (sub_contractor_id,address_line_01,address_line_02,address_line_03,province_id,district_id,city_id) VALUES (?,?,?,?,?,?,?)",
      [
        id,
        addressLine01,
        addressLine02,
        addressLine03,
        province,
        district,
        city,
      ]
    );
    res.json(response[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.post("/subBank/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { bankAccountName, bankAccountNumber, bank, branch } = req.body;
    //destructure the body here
    //console.log(subName);

    const response = await pool.query(
      "INSERT INTO arch.sub_bank_accounts (sub_contractor_id,sub_account_name,sub_account_number,bank_code,branch_id) VALUES (?,?,?,?,?)",
      [id, bankAccountName, bankAccountNumber, bank, branch]
    );

    res.json(response[0]);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
