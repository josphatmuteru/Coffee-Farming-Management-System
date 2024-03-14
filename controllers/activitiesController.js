import supabase from "../api/supabase.js";

export async function createActivity(req, res) {
  const activityData = req.body;

  const { data, error } = await supabase
    .from("schedule_activities")
    .insert(activityData)
    .select();

  if (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success" });
  }
}

export async function getScheduleActivities(req, res) {
  const { data, error } = await supabase
    .from("schedule_activities")
    .select("*");

  if (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success", data });
  }
}
export async function getCurrentMonthsRecommendedActivities(req, res) {
  const { data, error } = await supabase
    .from("recommended_activities")
    .select("*");

  if (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success", data });
  }
}
