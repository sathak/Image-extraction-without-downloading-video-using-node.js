import { app } from "./app";

const port = process.env.PORT || 8081;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
