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

export const TOKEN_KEY = "@maximus-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token: any) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

async function validateData(formData: FormData): Promise<Array<string>> {
  const errors = [];
  const emails = ["used@email.com"];

  if(emails.includes(formData.doctorEmail)) {
    errors.push("Email already used");
  }
  return errors;
}
