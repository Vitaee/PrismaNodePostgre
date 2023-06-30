import User from "../user/userGet";
export {};

declare global {
  namespace Express {
    export interface Request {
      currentUser?: User;
    }
  }
}