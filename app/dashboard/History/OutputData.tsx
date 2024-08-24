import { db } from "@/utils/db";
import { AIOutput } from "@/utils/Schema";
export const fetchAIOutputData = async () => {
  try {
    const data = await db.select().from(AIOutput).execute();
    return data;
  } catch (error) {
    console.error("Error fetching AI output data:", error);
    throw error;
  }
};
