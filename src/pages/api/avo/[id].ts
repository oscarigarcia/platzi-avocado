import { NextApiResponse, NextApiRequest } from "next";

import DB from "@database";

async function getById(request: NextApiRequest, response: NextApiResponse) {
  const database = new DB();
  const id = request.query.id;

  const avo = await database.getById(id as string);

  response.status(200).json(avo);
}

export default getById;
