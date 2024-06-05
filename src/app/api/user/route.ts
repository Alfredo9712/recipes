import { db } from "../../../../drizzle/db";
import { users } from "../../../../drizzle/schema";

export async function POST() {
  const newUser = await db
    .insert(users)
    .values({
      email: "alfredo98.rm@gmail.com",
    })
    .returning();

  return Response.json(newUser);
}
