import supabase from "../api/supabase.js";

export async function getAllFarmInputs(req, res) {
  const farmId = req.farmId;
  let { data, error } = await supabase
    .from("farm_inputs")
    .select("*")
    .eq("farm_id", farmId);

  if (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success", data });
  }
}
export async function createFarmInput(req, res) {
  const farmInputData = req.body;

  let { data, error } = await supabase
    .from("farm_inputs")
    .insert(farmInputData)
    .select("*");

  if (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success", data });
  }
}
export async function updateFarmInput(req, res) {
  const farm_input_id = req.params.id;
  const { farmInputData } = req.body;
  console.log(farmInputData);
  const { data, error } = await supabase
    .from("farm_inputs")
    .update(farmInputData)
    .eq("farm_input_id", farm_input_id)
    .select();

  if (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success", data });
  }
}
export async function deleteFarmInput(req, res) {
  const farm_input_id = req.params.id;

  const { data, error } = await supabase
    .from("farm_inputs")
    .delete()
    .eq("farm_input_id", farm_input_id)
    .select();

  if (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success", data });
  }
}
