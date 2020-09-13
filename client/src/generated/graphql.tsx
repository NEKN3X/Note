import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type User = {
  __typename?: 'User'
  id: Scalars['Int']
  name: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  allUsers: Array<User>
  user?: Maybe<User>
  users: Array<User>
}

export type QueryUserArgs = {
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<UserWhereUniqueInput>
  after?: Maybe<UserWhereUniqueInput>
}

export type Mutation = {
  __typename?: 'Mutation'
  bigRedButton: Scalars['String']
  createOneUser: User
  deleteOneUser?: Maybe<User>
  deleteManyUser: BatchPayload
  updateOneUser?: Maybe<User>
  updateManyUser: BatchPayload
}

export type MutationCreateOneUserArgs = {
  data: UserCreateInput
}

export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput
}

export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>
}

export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput
  where: UserWhereUniqueInput
}

export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput
  where?: Maybe<UserWhereInput>
}

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>
}

export type UserCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  name: Scalars['String']
  role?: Maybe<Role>
  notes?: Maybe<NoteCreateManyWithoutAuthorInput>
}

export type BatchPayload = {
  __typename?: 'BatchPayload'
  count: Scalars['Int']
}

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>
  OR?: Maybe<Array<UserWhereInput>>
  NOT?: Maybe<Array<UserWhereInput>>
  id?: Maybe<IntFilter>
  createdAt?: Maybe<DateTimeFilter>
  name?: Maybe<StringFilter>
  role?: Maybe<Role>
  notes?: Maybe<NoteListRelationFilter>
}

export type UserUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  role?: Maybe<Role>
  notes?: Maybe<NoteUpdateManyWithoutAuthorInput>
}

export type UserUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  role?: Maybe<Role>
}

export enum Role {
  User = 'USER',
  Admin = 'ADMIN',
}

export type NoteCreateManyWithoutAuthorInput = {
  create?: Maybe<Array<NoteCreateWithoutAuthorInput>>
  connect?: Maybe<Array<NoteWhereUniqueInput>>
}

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Scalars['Int']>>
  notIn?: Maybe<Array<Scalars['Int']>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  not?: Maybe<NestedIntFilter>
}

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Scalars['DateTime']>>
  notIn?: Maybe<Array<Scalars['DateTime']>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeFilter>
}

export type StringFilter = {
  equals?: Maybe<Scalars['String']>
  in?: Maybe<Array<Scalars['String']>>
  notIn?: Maybe<Array<Scalars['String']>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  contains?: Maybe<Scalars['String']>
  startsWith?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  not?: Maybe<NestedStringFilter>
}

export type NoteListRelationFilter = {
  every?: Maybe<NoteWhereInput>
  some?: Maybe<NoteWhereInput>
  none?: Maybe<NoteWhereInput>
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>
}

export type NoteUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<NoteCreateWithoutAuthorInput>>
  connect?: Maybe<Array<NoteWhereUniqueInput>>
  set?: Maybe<Array<NoteWhereUniqueInput>>
  disconnect?: Maybe<Array<NoteWhereUniqueInput>>
  delete?: Maybe<Array<NoteWhereUniqueInput>>
  update?: Maybe<Array<NoteUpdateWithWhereUniqueWithoutAuthorInput>>
  updateMany?: Maybe<Array<NoteUpdateManyWithWhereNestedInput>>
  deleteMany?: Maybe<Array<NoteScalarWhereInput>>
  upsert?: Maybe<Array<NoteUpsertWithWhereUniqueWithoutAuthorInput>>
}

export type NoteCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  title: Scalars['String']
  content: Scalars['String']
}

export type NoteWhereUniqueInput = {
  id?: Maybe<Scalars['String']>
}

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Scalars['Int']>>
  notIn?: Maybe<Array<Scalars['Int']>>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  not?: Maybe<NestedIntFilter>
}

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>
  in?: Maybe<Array<Scalars['DateTime']>>
  notIn?: Maybe<Array<Scalars['DateTime']>>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  not?: Maybe<NestedDateTimeFilter>
}

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>
  in?: Maybe<Array<Scalars['String']>>
  notIn?: Maybe<Array<Scalars['String']>>
  lt?: Maybe<Scalars['String']>
  lte?: Maybe<Scalars['String']>
  gt?: Maybe<Scalars['String']>
  gte?: Maybe<Scalars['String']>
  contains?: Maybe<Scalars['String']>
  startsWith?: Maybe<Scalars['String']>
  endsWith?: Maybe<Scalars['String']>
  not?: Maybe<NestedStringFilter>
}

export type NoteWhereInput = {
  AND?: Maybe<Array<NoteWhereInput>>
  OR?: Maybe<Array<NoteWhereInput>>
  NOT?: Maybe<Array<NoteWhereInput>>
  id?: Maybe<StringFilter>
  createdAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  title?: Maybe<StringFilter>
  author?: Maybe<UserWhereInput>
  authorId?: Maybe<IntFilter>
  content?: Maybe<StringFilter>
}

export type NoteUpdateWithWhereUniqueWithoutAuthorInput = {
  where: NoteWhereUniqueInput
  data: NoteUpdateWithoutAuthorDataInput
}

export type NoteUpdateManyWithWhereNestedInput = {
  where: NoteScalarWhereInput
  data: NoteUpdateManyDataInput
}

export type NoteScalarWhereInput = {
  AND?: Maybe<Array<NoteScalarWhereInput>>
  OR?: Maybe<Array<NoteScalarWhereInput>>
  NOT?: Maybe<Array<NoteScalarWhereInput>>
  id?: Maybe<StringFilter>
  createdAt?: Maybe<DateTimeFilter>
  updatedAt?: Maybe<DateTimeFilter>
  title?: Maybe<StringFilter>
  authorId?: Maybe<IntFilter>
  content?: Maybe<StringFilter>
}

export type NoteUpsertWithWhereUniqueWithoutAuthorInput = {
  where: NoteWhereUniqueInput
  update: NoteUpdateWithoutAuthorDataInput
  create: NoteCreateWithoutAuthorInput
}

export type NoteUpdateWithoutAuthorDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  title?: Maybe<StringFieldUpdateOperationsInput>
  content?: Maybe<StringFieldUpdateOperationsInput>
}

export type NoteUpdateManyDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>
  title?: Maybe<StringFieldUpdateOperationsInput>
  content?: Maybe<StringFieldUpdateOperationsInput>
}

export type AllUsersQueryVariables = Exact<{ [key: string]: never }>

export type AllUsersQuery = { __typename?: 'Query' } & {
  allUsers: Array<{ __typename?: 'User' } & Pick<User, 'id' | 'name'>>
}

export const AllUsersDocument = gql`
  query AllUsers {
    allUsers {
      id
      name
    }
  }
`

export function useAllUsersQuery(
  options: Omit<Urql.UseQueryArgs<AllUsersQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<AllUsersQuery>({ query: AllUsersDocument, ...options })
}
