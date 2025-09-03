 const Attendance  = require('../models/attendance');

 const getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({});
    res.json(attendance);
  } catch (error) {
    console.error("Error fetching attendance:", error.message);
    res.status(500).json({ message: "Server Error: Unable to fetch attendance" });
  }
};

 const updateAttendance = async(req, res) => {
    try{
        const {id} = req.params;

        const updateAttendance= await Attendance.findByIdAndUpdate(id,
            req.body,
            {new:true}
        )
        if(!updateAttendance) res.status(404).json("could not find the attendance");

        res.json(updateAttendance);
    }catch(error){
        console.log("error", error.message)
    }
};

const createAttendance = async (req, res) => {

  try {
    
    const { userId, date, status } = req.body;

    if (!userId || !date || !status ) {
      return res.status(400).json({ message: "User, date, and status are required" });
    }

    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

  
    let attendance = await Attendance.findOne({
      userId,
      date: { $gte: startOfDay, $lte: endOfDay },
    });

    if (attendance) {
      attendance.status = status;
      await attendance.save();
      return res.json({
        message: "Attendance updated successfully",
        attendance,
      });
    }


    attendance = new Attendance({ userId, date: startOfDay, status });
    const savedAttendance = await attendance.save();

    res.status(201).json({
      message: "Attendance created successfully",
      attendance: savedAttendance,
    });
  } catch (error) {
    console.error("Error creating attendance:", error.message, error.stack);
    res.status(500).json({ message: "Server error: " + error.message });
  }
};


 const deleteAttendance = (req, res) => {
   try {
     const {id} = req.params;

    const currentAttendance = Attendance.findByIdAndDelete(id);

    if(!currentAttendance) {res.status(404).json({message: "attendance not found"})
    }
    res.json({message: "attendance cleared succesfully"})
    }catch(error){
        res.status(500).json({ message: "Server error" });
    }
};
module.exports = {
    getAttendance,
    updateAttendance,
    createAttendance,
    deleteAttendance
}