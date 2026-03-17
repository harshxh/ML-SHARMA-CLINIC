import { Router, type IRouter } from "express";
import { db, appointmentsTable } from "@workspace/db";
import { desc } from "drizzle-orm";
import {
  CreateAppointmentBody,
  ListAppointmentsResponse,
  ListAppointmentsResponseItem,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/appointments", async (_req, res): Promise<void> => {
  const rows = await db
    .select()
    .from(appointmentsTable)
    .orderBy(desc(appointmentsTable.createdAt));
  res.json(ListAppointmentsResponse.parse(rows));
});

router.post("/appointments", async (req, res): Promise<void> => {
  const parsed = CreateAppointmentBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [appointment] = await db
    .insert(appointmentsTable)
    .values(parsed.data)
    .returning();

  res.status(201).json(ListAppointmentsResponseItem.parse(appointment));
});

export default router;
