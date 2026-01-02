import { PrismaClient } from '@/generated/client/client'

const prismaClientSingleton = () => {
    return new PrismaClient({
        datasources: {
            db: {
                url: "file:/Users/ananddesai/projects/labs/prisma/dev.db"
            }
        }
    })
}

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const db = globalThis.prismaGlobal ?? prismaClientSingleton()

export default db

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = db
