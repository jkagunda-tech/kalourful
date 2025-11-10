import { serve } from "inngest/next";
import { syncUserCreation, syncUserUpdate, syncUserDeletion } from "../../../inngest/function";
import { inngest } from "../../../inngest/client";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    /* your functions will be passed here later! */
    syncUserCreation,
    syncUserUpdate,
    syncUserDeletion,
  ],
});