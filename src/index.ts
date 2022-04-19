import app from "./server";
import dotenv from "dotenv";

dotenv.config();

const port = parseInt(<string>process.env.PORT, 10) || 4000;

app.listen(port, () => {
  console.log(`Express server listening on port: ${port}`);
});
