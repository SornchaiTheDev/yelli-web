import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
const SECRET_KEY = process.env.RECAPTCHA_PRIVATE_KEY;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token } = req.body;
  const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`;

  try {
    const recaptchaRes = await axios.post(verifyURL);

    res.status(200).json(recaptchaRes.data);
  } catch (err) {
    res.status(400).send("Something went Wrong please try again later!");
  }
}
