import { showAlert } from "./alert.js";

export async function post(req) {
  const data = JSON.stringify(req.data);

  try {
    showAlert("loading", req.loadingMessage);
    const res = await fetch(`/api/v1/${req.url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    const result = await res.json();

    if (result.status === "success") {
      showAlert("success", req.successMessage);
    } else {
      showAlert("error", result.message);
    }
  } catch (err) {
    console.log("err", err);
  }
}
