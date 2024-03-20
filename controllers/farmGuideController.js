import supabase from "../api/supabase.js";

export async function getFertilizerApplicationGuideData(req, res) {
  const { data, error } = await supabase
    .from("fertilizer_application_guide")
    .select("*");

  if (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success", data });
  }
}
export async function getPestManagementGuideData(req, res) {
  const { data, error } = await supabase
    .from("pest_management_guide")
    .select("*");

  if (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success", data });
  }
}
export async function getFarmingActivityData(req, res) {
  const activity = req.params.activity;

  const { data, error } = await supabase
    .from("coffee_farming_activities")
    .select("*")
    .eq("activity_name", activity);

  if (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success", data });
  }
}
