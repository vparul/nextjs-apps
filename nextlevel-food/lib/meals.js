import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((response) => setTimeout(response, 5000));
  // throw new Error("Loading meals failed")
  return db.prepare("SELECT * FROM meals").all();
}
