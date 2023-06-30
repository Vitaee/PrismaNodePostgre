import { PrismaClient, Prisma } from "@prisma/client";


type User = Prisma.UserGetPayload<{}>
export default User;