import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const secretKey = 'your-secret-key'; 

export function generateToken(payload: object): string {
  return jwt.sign(payload, secretKey, { expiresIn: "10h" });
}

export function verifyToken(token: string): any {
  return jwt.verify(token, secretKey);
}

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

export async function comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}