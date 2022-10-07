import mongoose from "mongoose";

const transactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    form: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Transact = mongoose.models.Transact || mongoose.model("Transact", transactSchema);
export default Transact;
