import { mutationType } from '@nexus/schema'

export const Mutation = mutationType({
  definition(t) {
    // User
    t.crud.createOneUser()
    t.crud.deleteOneUser()
    t.crud.updateOneUser()
    t.crud.updateManyUser()

    // Note
    t.crud.createOneNote()
    t.crud.deleteOneNote()
    t.crud.deleteManyNote()
    t.crud.updateOneNote()
    t.crud.updateManyNote()
  },
})
