import app from "./server";
import "dotenv-safe/config";

const port = parseInt(process.env.PORT) || 4000;

app.listen(port, () => {
  console.log(`Express server listening on port: ${port}`);
});
