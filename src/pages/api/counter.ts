import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export default async function countHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { amount = 1 } = req.body;

  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  res.json({ data: amount });
}
