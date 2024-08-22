/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/Schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://babaAI_owner:wcM6JgHESo1G@ep-flat-field-a516ecpe.us-east-2.aws.neon.tech/babaAI?sslmode=require",
  },
};
