import { mutationType } from '@nexus/schema'

export const bigRedButton = mutationType({
  definition(t) {
    t.field('bigRedButton', {
      type: 'String',
      async resolve(_parent, _args, ctx) {
        const { count } = await ctx.prisma.user.deleteMany({})
        return `${count} user(s) destroyed. Thanos will be proud.`
      },
    })

    t.crud.createOneUser()
    t.crud.deleteOneUser()
    t.crud.deleteManyUser()
    t.crud.updateOneUser()
    t.crud.updateManyUser()
  },
})
