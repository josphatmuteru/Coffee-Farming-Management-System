import supabase from "../api/supabase.js";

export const getHarvestData = async (req, res, next) => {
  let { data, error } = await supabase
    .from("coffee_yield_monthly_view")
    .select("month, total_yield_amount");

  if (error) {
    res.status(error.status).json({ status: "error", message: error.message });
  } else {
    req.harvestData = data;
  }
  next();
};
