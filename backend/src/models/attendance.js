const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
     userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["present", "absent"],
      default: "absent",
    },
    remarks: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("attendance", AttendanceSchema);