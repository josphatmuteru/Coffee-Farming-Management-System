import { getLoginPage } from "../controllers/viewsController.js";
import { catchAsync } from "../utils/catchAsync.js";
import supabase from "./supabase.js";

export const signup = async (req, res) => {
  // const name = req.body.name;

  const password = req.body.password;
  const email = req.body.email;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    res.status(error.status).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success" });
  }
};
export const login = async (req, res, next) => {
  const password = req.body.password;
  const email = req.body.email;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    res.status(error.status).json({ status: "error", message: error.message });
  } else {
    console.log("data", data);
    res.status(200).json({ status: "success" });
  }
};

export const protect = async (req, res, next) => {
  const { data: session, error } = await supabase.auth.getSession();

  if (!session.session) {
    req.user = null;

    const currentPageUrl = req.originalUrl;

    res.render("login", {
      currentPageUrl,
      noSidebar: true,
      redirectedFromAuthentication: true,
    });
  } else {
    if (session.session.user.role === "authenticated") {
      const { user } = session.session;
      const { id: userId, user_metadata: userMetadata } = user;

      const farmId = userMetadata.farm_id;

      req.user = user;
      req.userId = userId;
      req.farmId = farmId;

      next();
    } else {
      const currentPageUrl = req.originalUrl;

      res.render("login", {
        currentPageUrl,
        noSidebar: true,
        redirectedFromAuthentication: true,
      });
    }
  }

  // next();
};

export const logout = async (req, res) => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    res.status(error.status).json({ status: "error", message: error.message });
  } else {
    res.status(200).json({ status: "success" });
  }
};
