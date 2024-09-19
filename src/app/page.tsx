import { sql } from "drizzle-orm";

import db from "@/db";

export default async function Home() {
  const result = await db.execute(sql`SELECT * FROM pg_catalog.pg_tables`);

  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}
