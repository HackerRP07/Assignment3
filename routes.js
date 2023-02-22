const express =require('express');

const router = express.Router();

router.get("/showTable/:id/", async (req, res) => {
    let id = req.params.id;
    // let sql = "ALTER TABLE advisor ADD FOREIGN KEY (s_id) REFERENCES  instructor(ID);";
  //    + id;
    let sql = "select * from " + id;
  //   let sql = "delete from " + id;
  
    //Running the query
    con.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
      // res.send({ status: "success", result: result });
    });
  });
  
  //Student form
  router.post("/student", async (req, res) => {
  
    const profile = {
      ID: req.body.Id,
      name: req.body.name,
      dept_name: req.body.dept_name,
      tot_credit: req.body.tot_cred,
    };
    console.log(profile);
    let sql = "INSERT INTO student SET ?";
    let query = con.query(sql, profile, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send({ status: "success", message: "Info added" });
    });
    const instr = {
      s_id: req.body.Id,
      i_id: req.body.i_id,
    };
  
    sql = "INSERT INTO advisor SET ?";
    query = con.query(sql, instr, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.json({ status: "success", message: "Info added" });
    });
  });
  
  //Department form
  router.post("/department", async (req, res) => {
    
    const profile = {
      dept_name: req.body.dept_name,
      building: req.body.building,
      budget: req.body.budget,
    };
    let sql = "INSERT INTO department SET ?";
    let query = con.query(sql, profile, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send({ status: "success", message: "Info added" });
    });
  });
  
  //Course form
  router.post("/course", async (req, res) => {
    
  
    const info = {
      course_id: req.body.course_id,
      title: req.body.title,
      dept_name: req.body.dept_name,
      credits: req.body.credits,
    };
    let sql = "INSERT INTO course SET ?";
    let query = con.query(sql, info, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send({ status: "success", message: "Info added" });
    });
  
    const pre = {
      course_id: req.body.course_id,
      prereq_id: req.body.prereq_id,
    };
    sql = "INSERT INTO prereq SET ?";
    query = con.query(sql, pre, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send({ status: "success", message: "Info added" });
    });
  });
  
  //Instructor form
  router.post("/instructor", async (req, res) => {
  
    const info = {
      ID: req.body.Id,
      name: req.body.name,
      dept_name: req.body.dept_name,
      salary: req.body.salary,
    };
    let sql = "INSERT INTO instructor SET ?";
    let query = con.query(sql, info, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send({ status: "success", message: "Info added" });
    });
  });
  
  //classroom form
  router.post("/classroom", async (req, res) => {
    
  
    const info = {
      building: req.body.building,
      capacity: req.body.capacity,
      room_number: req.body.room_number,
    };
  
    let sql = "INSERT INTO instructor SET ?";
    let query = con.query(sql, info, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send({ status: "success", message: "Info added" });
    });
  });
  
  //section form
  router.post("/section", async (req, res) => {
    const info = {
      course_id: req.body.course_id,
      sec_id: req.body.sec_id,
      semester: req.body.semester,
      year: req.body.year,
      building: req.body.building,
      room_number: req.body.room_number,
      time_slot_id: req.body.time_slot_id,
    };
  
    let sql = "INSERT INTO section SET ?";
    let query = con.query(sql, info, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send({ status: "success", message: "Info added" });
    });
  });
  
  //Time slot form
  router.post("/timeslot", async (req, res) => {
    const info = {
      time_slot_id: req.body.time_slot_id,
      day: req.body.day,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
    };
  
    let sql = "INSERT INTO section SET ?";
    let query = con.query(sql, info, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send({ status: "success", message: "Info added" });
    });
  });
  
  //teaches
  router.post("/teaches", async (req, res) => {
    const info = {
      ID: req.body.Id,
      course_id: req.body.course_id,
      sec_id: req.body.sec_id,
      semester: req.body.semester,
      year: req.body.year,
    };
  
    let sql = "INSERT INTO teaches SET ?";
    let query = con.query(sql, info, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send({ status: "success", message: "Info added" });
    });
  });
  
  //takes
  router.post("/takes", async (req, res) => {
    const info = {
      ID: req.body.Id,
      course_id: req.body.course_id,
      sec_id: req.body.sec_id,
      semester: req.body.semester,
      year: req.body.year,
      grade: req.body.grade,
    };
  
    let sql = "INSERT INTO takes SET ?";
    let query = con.query(sql, info, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send({ status: "success", message: "Info added" });
    });
  });
  
module.exports = router; 