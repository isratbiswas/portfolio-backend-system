import app from "./app";
import { envVars } from "./app/config/env";

const PORT = envVars.PORT || 5000;
app.listen(envVars.PORT, () => {
  console.log(`Server running on port ${envVars.PORT}`);
});
