import { catchAsync } from "../utils/catchAsync.js";
import supabase from "./supabase.js";

export const signup = async (req, res) => {
  // const name = req.body.name;

  const password = req.body.password;
  const email = req.body.email;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    res.status(error.status).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success" });
  }
};
export const login = async (req, res) => {
  const password = req.body.password;
  const email = req.body.email;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    res.status(error.status).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success" });
  }
};
