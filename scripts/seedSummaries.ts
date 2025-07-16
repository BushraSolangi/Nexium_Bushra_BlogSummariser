// scripts/seedsummaries.ts
import { createClient } from "@supabase/supabase-js";
import { summaries } from "../utils/summaries";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // 🔐 Only used in backend scripts
);

async function seedSummaries() {
  const documents = Object.entries(summaries).map(([topic, value]) => ({
    topic,
    en: value.en,
    ur: value.ur,
  }));

  try {
    // optional: clear old data
    await supabase.from("summaries").delete().neq("topic", "");

    // insert new data
    const { error } = await supabase.from("summaries").upsert(documents, {
      onConflict: "topic", // avoid duplicates
    });

    if (error) throw error;

    console.log("✅ Seeded summaries to Supabase");
  } catch (err) {
    console.error("❌ Seeding failed:", err);
  }
}

seedSummaries();
