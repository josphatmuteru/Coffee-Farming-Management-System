import supabase from "../api/supabase.js";

export async function createExpense(req, res) {
  const expenseDetails = req.body;

  const { data, error } = await supabase
    .from("expenses")
    .insert(expenseDetails)
    .select();

  if (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success" });
  }
}
