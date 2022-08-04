import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ContactCreateArgs>({
  contact: {
    one: { data: { name: 'String', email: 'String', messsage: 'String' } },
    two: { data: { name: 'String', email: 'String', messsage: 'String' } },
  },
})

export type StandardScenario = typeof standard
