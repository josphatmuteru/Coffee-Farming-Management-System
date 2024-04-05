import supabase from "../api/supabase.js";

export const getHarvestData = async (req, res, next) => {
  const farmId = req.farmId;

  let { data, error } = await supabase
    .from("coffee_yield_monthly_view")
    .select("month, total_yield_amount")
    .eq("farm_id", farmId);

  if (error) {
    res.status(404).json({ status: "error", message: error.message });
  } else {
    req.harvestData = data;
  }
  next();
};
export const createHarvestData = async (req, res, next) => {
  const farmId = req.farmId;

  let harvestData = req.body;
  harvestData = { ...harvestData, farm_id: farmId };

  console.log(harvestData);

  let { data, error } = await supabase
    .from("coffee_yield")
    .insert(harvestData)
    .select();

  if (error) {
    res.status(404).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success", data });
  }
};

export const getFinancesOverviewData = async (req, res) => {
  const farmId = req.farmId;

  const { data, error } = await supabase
    .from("farm_finances_view")
    .select("*")
    .eq("farm_id", farmId);

  if (error) {
    res.status(404).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success", data });
  }
};

export const getIncomeData = async (req, res) => {
  const farmId = req.farmId;

  const { data, error } = await supabase
    .from("farm_revenue_view")
    .select("*")
    .eq("farm_id", farmId);

  if (error) {
    res.status(404).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success", data });
  }
};

export const getFarmProfile = async (req, res) => {
  const farmId = req.farmId;
  const { data, error } = await supabase
    .from("farm_profile")
    .select("*")
    .eq("farm_id", farmId);

  if (error) {
    res.status(404).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success", data });
  }
};
export const updateFarmProfile = async (req, res) => {
  const farmProfileData = req.body;
  const farmId = req.params.farmId;

  const { data, error } = await supabase
    .from("farm_profile")
    .update(farmProfileData)
    .eq("farm_id", farmId)
    .select("");

  if (error) {
    res.status(404).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success", data });
  }
};
