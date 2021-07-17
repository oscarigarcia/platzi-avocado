import { IncomingMessage, ServerResponse } from "http";

import DB from "@database";

async function allAvos(request: IncomingMessage, response: ServerResponse) {
  const database = new DB();
  const allEntries = await database.getAll();
  const length = allEntries.length;

  response.statusCode = 200;
  response.setHeader("Content-type", "application/json");
  response.end(JSON.stringify({ length, data: allEntries }));
}

export default allAvos;
