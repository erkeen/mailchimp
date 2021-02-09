import { supabase } from "../utils/supabaseClient";

export const insertEmails = (tableName, name, email) =>
  supabase.from(tableName).insert([
    {
      name,
      email_address: email,
    },
  ]);
