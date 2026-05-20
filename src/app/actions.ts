"use server";

import fs from "fs";
import path from "path";

/**
 * Saves a subscriber's email to a local text file `emails.txt` in the root directory.
 */
export async function subscribeEmail(email: string) {
  try {
    const filePath = path.join(process.cwd(), "emails.txt");
    const timestamp = new Date().toLocaleString("fr-FR");
    const entry = `[${timestamp}] ${email}\n`;
    
    // Append the email address to the file (creates the file if it doesn't exist)
    await fs.promises.appendFile(filePath, entry, "utf8");
    return { success: true };
  } catch (error) {
    console.error("Failed to save email subscription:", error);
    return { success: false };
  }
}
