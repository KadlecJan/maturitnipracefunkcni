import { sql } from "./sql";

export async function getCategories() {
  let response = await sql(`SELECT * FROM pre_pzop_category`);
  return response;
}
