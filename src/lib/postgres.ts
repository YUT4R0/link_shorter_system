import postgres from "postgres";

const URL = "postgresql://docker:docker@localhost:5432/shortlinks"
export const sql = postgres(URL)
