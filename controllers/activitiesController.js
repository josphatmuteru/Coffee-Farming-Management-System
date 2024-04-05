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
    res.status(200).json({ status: "success", data });
  }
}
export async function deleteActivity(req, res) {
  const activityId = req.params.activityId;

  const { data, error } = await supabase
    .from("schedule_activities")
    .delete()
    .eq("activity_id", activityId)
    .select();

  if (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success" });
  }
}
export async function updateActivity(req, res) {
  const activityId = req.params.activityId;
  const activityData = req.body;

  const { data, error } = await supabase
    .from("schedule_activities")
    .update(activityData)
    .eq("activity_id", activityId)
    .select();

  if (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success" });
  }
}

export async function getScheduleActivities(req, res) {
  const farmId = req.farmId;
  const { data, error } = await supabase
    .from("schedule_activities")
    .select("*")
    .eq("activity_status", "pending")
    .eq("farm_id", farmId);

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
