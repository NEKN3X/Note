import { queryType } from '@nexus/schema'

export const Query = queryType({
  definition(t) {
    // User
    t.list.field('allUsers', {
      type: 'User',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.user.findMany({})
      },
    })
    t.crud.user()
    t.crud.users()

    // Note
    t.list.field('allNotes', {
      type: 'Note',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.note.findMany({})
      },
    })
    t.crud.note()
    t.crud.notes()
  },
})
