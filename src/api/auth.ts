import { NextApiRequest, NextApiResponse } from "next";

interface FormData {
  doctorName: string,
  doctorEmail: string,
  doctorCRM: string,
  password: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const formData: FormData = req.body;

  const errors  = await validateData(formData);
  if(errors.length>0){
    res.status(400);
    res.json({errors});
    return;
  }

  res.status(201);
  res.json({message: "Success!"});
};

async function validateData(formData: FormData): Promise<Array<string>> {
  const errors = [];
  const emails = ["used@email.com"];

  if(emails.includes(formData.doctorEmail)) {
    errors.push("Email already used");
  }
  return errors;
}
