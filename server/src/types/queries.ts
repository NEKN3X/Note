import { queryType } from '@nexus/schema'

export const allUsers = queryType({
  definition(t) {
    t.list.field('allUsers', {
      type: 'User',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.user.findMany({})
      },
    })
    t.crud.user()
    t.crud.users()
  },
})
