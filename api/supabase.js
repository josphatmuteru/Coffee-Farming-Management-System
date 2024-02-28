import { createClient } from "@supabase/supabase-js";

// const createClient = require("@supabase/supabase-js");

const supabaseUrl = "https://lrdykizhsavmbuwjxsbj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyZHlraXpoc2F2bWJ1d2p4c2JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1MzY5MDUsImV4cCI6MjAyMjExMjkwNX0.fUhOw3t5HaObseDfRY73_8iGtYXSR6m5bLdgk_GOVXk";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
