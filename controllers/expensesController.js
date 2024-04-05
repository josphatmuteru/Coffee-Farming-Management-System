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
    res.status(200).json({ status: "success", data });
  }
}
export async function getAllExpenses(req, res, next) {
  const farmId = req.farmId;

  let { data, error } = await supabase
    .from("expense_details")
    .select("*")
    .eq("farm_id", farmId);

  if (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  } else {
    data = data.reduce((acc, obj) => {
      const exepenseType = obj.expense_type;

      if (!acc[exepenseType]) {
        acc[exepenseType] = [];
      }
      acc[exepenseType].push(obj);
      return acc;
    }, {});

    console.log(data);

    res.expenses = data;
  }

  next();
}

export async function deleteLabourExpense(req, res) {
  const activityId = req.params.activityId;

  const { data, error } = await supabase
    .from("expenses")
    .delete()
    .eq("expense_type", "labour")
    .eq("activity_id", activityId)
    .select();

  if (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success" });
  }
}

export async function getBudget(req, res, next) {
  const farmId = req.farmId;
  let { data, error } = await supabase
    .from("budget")
    .select("*")
    .eq("farm_id", farmId);
  console.log("data", data);

  if (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success", data });
  }

  next();
}
export async function createBudget(req, res, next) {
  const budgetData = req.body;
  let { data, error } = await supabase
    .from("budget")
    .insert(budgetData)
    .select();
  console.log("data", data);

  if (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success" });
  }

  next();
}
