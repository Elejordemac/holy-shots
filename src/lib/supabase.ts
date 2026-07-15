import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://rvpsbarfkeavvccaqhmk.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2cHNiYXJma2VhdnZjY2FxaG1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwOTMxOTIsImV4cCI6MjA5OTY2OTE5Mn0.IEswTS5ZI9oo1QAPTSe_vQW1KSL7Y2zlm0wuZWojj8E";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
