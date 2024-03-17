import { showAlert } from "./alert.js";

export async function post(req) {
  const data = JSON.stringify(req.data);
  console.log(data);
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
      return result;
    } else {
      showAlert("error", result.message);
      return result;
    }
  } catch (err) {
    console.log("err", err);
  }
}

export async function get(req) {
  console.log(req);
  try {
    const res = await fetch(`/api/v1/${req.url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    if (result.status === "success") {
      return result.data;
    } else {
      return {};
    }
  } catch (err) {
    console.log(err);
  }
}
export async function sendDelete(req) {
  try {
    // showAlert("loading", req.loadingMessage);
    const res = await fetch(`/api/v1/${req.url}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}
