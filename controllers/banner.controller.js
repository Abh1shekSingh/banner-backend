import db from "../config/db.js";

const updateBanner = async (req, res) => {
  const { descr, timer_hour, timer_min, timer_sec, is_active, link } = req.body;
  console.log(req.body)
  const query = "UPDATE banner SET `descr` = ?, `timer_hour` = ?,`timer_min` = ?,`timer_sec` = ?, `is_active` = ?, `link` = ? WHERE id = 1";
  db.query(query, [descr, timer_hour, timer_min, timer_sec, is_active, link], (err, data) => {
    if (err) {
      return res.status(500).json(err.message);
    } else {
      return res.status(200).json("Banner updated successfully");
    }
  });
};


const getBannerData = async(req, res) => {
    const query = "SELECT * FROM banner";
    db.query(query, (err, data) => {
        if(err) {
            return res.status(500).json(err);
        }
        return res.status(200).json(data);
    })
}

export {getBannerData,updateBanner};