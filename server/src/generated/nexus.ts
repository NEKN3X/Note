/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as Context from "../context";

declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, "crud">;
    model: NexusPrisma<TypeName, "model">;
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  DateTimeFieldUpdateOperationsInput: {
    // input type
    set?: NexusGenScalars["DateTime"] | null; // DateTime
  };
  DateTimeFilter: {
    // input type
    equals?: NexusGenScalars["DateTime"] | null; // DateTime
    gt?: NexusGenScalars["DateTime"] | null; // DateTime
    gte?: NexusGenScalars["DateTime"] | null; // DateTime
    in?: NexusGenScalars["DateTime"][] | null; // [DateTime!]
    lt?: NexusGenScalars["DateTime"] | null; // DateTime
    lte?: NexusGenScalars["DateTime"] | null; // DateTime
    not?: NexusGenInputs["NestedDateTimeFilter"] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars["DateTime"][] | null; // [DateTime!]
  };
  IntFilter: {
    // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs["NestedIntFilter"] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  };
  NestedDateTimeFilter: {
    // input type
    equals?: NexusGenScalars["DateTime"] | null; // DateTime
    gt?: NexusGenScalars["DateTime"] | null; // DateTime
    gte?: NexusGenScalars["DateTime"] | null; // DateTime
    in?: NexusGenScalars["DateTime"][] | null; // [DateTime!]
    lt?: NexusGenScalars["DateTime"] | null; // DateTime
    lte?: NexusGenScalars["DateTime"] | null; // DateTime
    not?: NexusGenInputs["NestedDateTimeFilter"] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars["DateTime"][] | null; // [DateTime!]
  };
  NestedIntFilter: {
    // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs["NestedIntFilter"] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  };
  NestedStringFilter: {
    // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs["NestedStringFilter"] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  };
  NoteCreateManyWithoutAuthorInput: {
    // input type
    connect?: NexusGenInputs["NoteWhereUniqueInput"][] | null; // [NoteWhereUniqueInput!]
    create?: NexusGenInputs["NoteCreateWithoutAuthorInput"][] | null; // [NoteCreateWithoutAuthorInput!]
  };
  NoteCreateWithoutAuthorInput: {
    // input type
    content: string; // String!
    createdAt?: NexusGenScalars["DateTime"] | null; // DateTime
    id?: string | null; // String
    title: string; // String!
    updatedAt?: NexusGenScalars["DateTime"] | null; // DateTime
  };
  NoteListRelationFilter: {
    // input type
    every?: NexusGenInputs["NoteWhereInput"] | null; // NoteWhereInput
    none?: NexusGenInputs["NoteWhereInput"] | null; // NoteWhereInput
    some?: NexusGenInputs["NoteWhereInput"] | null; // NoteWhereInput
  };
  NoteScalarWhereInput: {
    // input type
    AND?: NexusGenInputs["NoteScalarWhereInput"][] | null; // [NoteScalarWhereInput!]
    authorId?: NexusGenInputs["IntFilter"] | null; // IntFilter
    content?: NexusGenInputs["StringFilter"] | null; // StringFilter
    createdAt?: NexusGenInputs["DateTimeFilter"] | null; // DateTimeFilter
    id?: NexusGenInputs["StringFilter"] | null; // StringFilter
    NOT?: NexusGenInputs["NoteScalarWhereInput"][] | null; // [NoteScalarWhereInput!]
    OR?: NexusGenInputs["NoteScalarWhereInput"][] | null; // [NoteScalarWhereInput!]
    title?: NexusGenInputs["StringFilter"] | null; // StringFilter
    updatedAt?: NexusGenInputs["DateTimeFilter"] | null; // DateTimeFilter
  };
  NoteUpdateManyDataInput: {
    // input type
    content?: NexusGenInputs["StringFieldUpdateOperationsInput"] | null; // StringFieldUpdateOperationsInput
    createdAt?: NexusGenInputs["DateTimeFieldUpdateOperationsInput"] | null; // DateTimeFieldUpdateOperationsInput
    id?: NexusGenInputs["StringFieldUpdateOperationsInput"] | null; // StringFieldUpdateOperationsInput
    title?: NexusGenInputs["StringFieldUpdateOperationsInput"] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs["DateTimeFieldUpdateOperationsInput"] | null; // DateTimeFieldUpdateOperationsInput
  };
  NoteUpdateManyWithWhereNestedInput: {
    // input type
    data: NexusGenInputs["NoteUpdateManyDataInput"]; // NoteUpdateManyDataInput!
    where: NexusGenInputs["NoteScalarWhereInput"]; // NoteScalarWhereInput!
  };
  NoteUpdateManyWithoutAuthorInput: {
    // input type
    connect?: NexusGenInputs["NoteWhereUniqueInput"][] | null; // [NoteWhereUniqueInput!]
    create?: NexusGenInputs["NoteCreateWithoutAuthorInput"][] | null; // [NoteCreateWithoutAuthorInput!]
    delete?: NexusGenInputs["NoteWhereUniqueInput"][] | null; // [NoteWhereUniqueInput!]
    deleteMany?: NexusGenInputs["NoteScalarWhereInput"][] | null; // [NoteScalarWhereInput!]
    disconnect?: NexusGenInputs["NoteWhereUniqueInput"][] | null; // [NoteWhereUniqueInput!]
    set?: NexusGenInputs["NoteWhereUniqueInput"][] | null; // [NoteWhereUniqueInput!]
    update?:
      | NexusGenInputs["NoteUpdateWithWhereUniqueWithoutAuthorInput"][]
      | null; // [NoteUpdateWithWhereUniqueWithoutAuthorInput!]
    updateMany?: NexusGenInputs["NoteUpdateManyWithWhereNestedInput"][] | null; // [NoteUpdateManyWithWhereNestedInput!]
    upsert?:
      | NexusGenInputs["NoteUpsertWithWhereUniqueWithoutAuthorInput"][]
      | null; // [NoteUpsertWithWhereUniqueWithoutAuthorInput!]
  };
  NoteUpdateWithWhereUniqueWithoutAuthorInput: {
    // input type
    data: NexusGenInputs["NoteUpdateWithoutAuthorDataInput"]; // NoteUpdateWithoutAuthorDataInput!
    where: NexusGenInputs["NoteWhereUniqueInput"]; // NoteWhereUniqueInput!
  };
  NoteUpdateWithoutAuthorDataInput: {
    // input type
    content?: NexusGenInputs["StringFieldUpdateOperationsInput"] | null; // StringFieldUpdateOperationsInput
    createdAt?: NexusGenInputs["DateTimeFieldUpdateOperationsInput"] | null; // DateTimeFieldUpdateOperationsInput
    id?: NexusGenInputs["StringFieldUpdateOperationsInput"] | null; // StringFieldUpdateOperationsInput
    title?: NexusGenInputs["StringFieldUpdateOperationsInput"] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs["DateTimeFieldUpdateOperationsInput"] | null; // DateTimeFieldUpdateOperationsInput
  };
  NoteUpsertWithWhereUniqueWithoutAuthorInput: {
    // input type
    create: NexusGenInputs["NoteCreateWithoutAuthorInput"]; // NoteCreateWithoutAuthorInput!
    update: NexusGenInputs["NoteUpdateWithoutAuthorDataInput"]; // NoteUpdateWithoutAuthorDataInput!
    where: NexusGenInputs["NoteWhereUniqueInput"]; // NoteWhereUniqueInput!
  };
  NoteWhereInput: {
    // input type
    AND?: NexusGenInputs["NoteWhereInput"][] | null; // [NoteWhereInput!]
    author?: NexusGenInputs["UserWhereInput"] | null; // UserWhereInput
    authorId?: NexusGenInputs["IntFilter"] | null; // IntFilter
    content?: NexusGenInputs["StringFilter"] | null; // StringFilter
    createdAt?: NexusGenInputs["DateTimeFilter"] | null; // DateTimeFilter
    id?: NexusGenInputs["StringFilter"] | null; // StringFilter
    NOT?: NexusGenInputs["NoteWhereInput"][] | null; // [NoteWhereInput!]
    OR?: NexusGenInputs["NoteWhereInput"][] | null; // [NoteWhereInput!]
    title?: NexusGenInputs["StringFilter"] | null; // StringFilter
    updatedAt?: NexusGenInputs["DateTimeFilter"] | null; // DateTimeFilter
  };
  NoteWhereUniqueInput: {
    // input type
    id?: string | null; // String
  };
  StringFieldUpdateOperationsInput: {
    // input type
    set?: string | null; // String
  };
  StringFilter: {
    // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs["NestedStringFilter"] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  };
  UserCreateInput: {
    // input type
    createdAt?: NexusGenScalars["DateTime"] | null; // DateTime
    name: string; // String!
    notes?: NexusGenInputs["NoteCreateManyWithoutAuthorInput"] | null; // NoteCreateManyWithoutAuthorInput
    role?: NexusGenEnums["Role"] | null; // Role
  };
  UserUpdateInput: {
    // input type
    createdAt?: NexusGenInputs["DateTimeFieldUpdateOperationsInput"] | null; // DateTimeFieldUpdateOperationsInput
    name?: NexusGenInputs["StringFieldUpdateOperationsInput"] | null; // StringFieldUpdateOperationsInput
    notes?: NexusGenInputs["NoteUpdateManyWithoutAuthorInput"] | null; // NoteUpdateManyWithoutAuthorInput
    role?: NexusGenEnums["Role"] | null; // Role
  };
  UserUpdateManyMutationInput: {
    // input type
    createdAt?: NexusGenInputs["DateTimeFieldUpdateOperationsInput"] | null; // DateTimeFieldUpdateOperationsInput
    name?: NexusGenInputs["StringFieldUpdateOperationsInput"] | null; // StringFieldUpdateOperationsInput
    role?: NexusGenEnums["Role"] | null; // Role
  };
  UserWhereInput: {
    // input type
    AND?: NexusGenInputs["UserWhereInput"][] | null; // [UserWhereInput!]
    createdAt?: NexusGenInputs["DateTimeFilter"] | null; // DateTimeFilter
    id?: NexusGenInputs["IntFilter"] | null; // IntFilter
    name?: NexusGenInputs["StringFilter"] | null; // StringFilter
    NOT?: NexusGenInputs["UserWhereInput"][] | null; // [UserWhereInput!]
    notes?: NexusGenInputs["NoteListRelationFilter"] | null; // NoteListRelationFilter
    OR?: NexusGenInputs["UserWhereInput"][] | null; // [UserWhereInput!]
    role?: NexusGenEnums["Role"] | null; // Role
  };
  UserWhereUniqueInput: {
    // input type
    id?: number | null; // Int
  };
}

export interface NexusGenEnums {
  Role: "ADMIN" | "USER";
}

export interface NexusGenScalars {
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenRootTypes {
  BatchPayload: {
    // root type
    count: number; // Int!
  };
  Mutation: {};
  Query: {};
  User: {
    // root type
    id: number; // Int!
    name: string; // String!
  };
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  DateTimeFieldUpdateOperationsInput: NexusGenInputs["DateTimeFieldUpdateOperationsInput"];
  DateTimeFilter: NexusGenInputs["DateTimeFilter"];
  IntFilter: NexusGenInputs["IntFilter"];
  NestedDateTimeFilter: NexusGenInputs["NestedDateTimeFilter"];
  NestedIntFilter: NexusGenInputs["NestedIntFilter"];
  NestedStringFilter: NexusGenInputs["NestedStringFilter"];
  NoteCreateManyWithoutAuthorInput: NexusGenInputs["NoteCreateManyWithoutAuthorInput"];
  NoteCreateWithoutAuthorInput: NexusGenInputs["NoteCreateWithoutAuthorInput"];
  NoteListRelationFilter: NexusGenInputs["NoteListRelationFilter"];
  NoteScalarWhereInput: NexusGenInputs["NoteScalarWhereInput"];
  NoteUpdateManyDataInput: NexusGenInputs["NoteUpdateManyDataInput"];
  NoteUpdateManyWithWhereNestedInput: NexusGenInputs["NoteUpdateManyWithWhereNestedInput"];
  NoteUpdateManyWithoutAuthorInput: NexusGenInputs["NoteUpdateManyWithoutAuthorInput"];
  NoteUpdateWithWhereUniqueWithoutAuthorInput: NexusGenInputs["NoteUpdateWithWhereUniqueWithoutAuthorInput"];
  NoteUpdateWithoutAuthorDataInput: NexusGenInputs["NoteUpdateWithoutAuthorDataInput"];
  NoteUpsertWithWhereUniqueWithoutAuthorInput: NexusGenInputs["NoteUpsertWithWhereUniqueWithoutAuthorInput"];
  NoteWhereInput: NexusGenInputs["NoteWhereInput"];
  NoteWhereUniqueInput: NexusGenInputs["NoteWhereUniqueInput"];
  StringFieldUpdateOperationsInput: NexusGenInputs["StringFieldUpdateOperationsInput"];
  StringFilter: NexusGenInputs["StringFilter"];
  UserCreateInput: NexusGenInputs["UserCreateInput"];
  UserUpdateInput: NexusGenInputs["UserUpdateInput"];
  UserUpdateManyMutationInput: NexusGenInputs["UserUpdateManyMutationInput"];
  UserWhereInput: NexusGenInputs["UserWhereInput"];
  UserWhereUniqueInput: NexusGenInputs["UserWhereUniqueInput"];
  Role: NexusGenEnums["Role"];
  String: NexusGenScalars["String"];
  Int: NexusGenScalars["Int"];
  Float: NexusGenScalars["Float"];
  Boolean: NexusGenScalars["Boolean"];
  ID: NexusGenScalars["ID"];
  DateTime: NexusGenScalars["DateTime"];
}

export interface NexusGenFieldTypes {
  BatchPayload: {
    // field return type
    count: number; // Int!
  };
  Mutation: {
    // field return type
    bigRedButton: string; // String!
    createOneUser: NexusGenRootTypes["User"]; // User!
    deleteManyUser: NexusGenRootTypes["BatchPayload"]; // BatchPayload!
    deleteOneUser: NexusGenRootTypes["User"] | null; // User
    updateManyUser: NexusGenRootTypes["BatchPayload"]; // BatchPayload!
    updateOneUser: NexusGenRootTypes["User"] | null; // User
  };
  Query: {
    // field return type
    allUsers: NexusGenRootTypes["User"][]; // [User!]!
    user: NexusGenRootTypes["User"] | null; // User
    users: NexusGenRootTypes["User"][]; // [User!]!
  };
  User: {
    // field return type
    id: number; // Int!
    name: string; // String!
  };
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneUser: {
      // args
      data: NexusGenInputs["UserCreateInput"]; // UserCreateInput!
    };
    deleteManyUser: {
      // args
      where?: NexusGenInputs["UserWhereInput"] | null; // UserWhereInput
    };
    deleteOneUser: {
      // args
      where: NexusGenInputs["UserWhereUniqueInput"]; // UserWhereUniqueInput!
    };
    updateManyUser: {
      // args
      data: NexusGenInputs["UserUpdateManyMutationInput"]; // UserUpdateManyMutationInput!
      where?: NexusGenInputs["UserWhereInput"] | null; // UserWhereInput
    };
    updateOneUser: {
      // args
      data: NexusGenInputs["UserUpdateInput"]; // UserUpdateInput!
      where: NexusGenInputs["UserWhereUniqueInput"]; // UserWhereUniqueInput!
    };
  };
  Query: {
    user: {
      // args
      where: NexusGenInputs["UserWhereUniqueInput"]; // UserWhereUniqueInput!
    };
    users: {
      // args
      after?: NexusGenInputs["UserWhereUniqueInput"] | null; // UserWhereUniqueInput
      before?: NexusGenInputs["UserWhereUniqueInput"] | null; // UserWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    };
  };
}

export interface NexusGenAbstractResolveReturnTypes {}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames =
  | "BatchPayload"
  | "Mutation"
  | "Query"
  | "User";

export type NexusGenInputNames =
  | "DateTimeFieldUpdateOperationsInput"
  | "DateTimeFilter"
  | "IntFilter"
  | "NestedDateTimeFilter"
  | "NestedIntFilter"
  | "NestedStringFilter"
  | "NoteCreateManyWithoutAuthorInput"
  | "NoteCreateWithoutAuthorInput"
  | "NoteListRelationFilter"
  | "NoteScalarWhereInput"
  | "NoteUpdateManyDataInput"
  | "NoteUpdateManyWithWhereNestedInput"
  | "NoteUpdateManyWithoutAuthorInput"
  | "NoteUpdateWithWhereUniqueWithoutAuthorInput"
  | "NoteUpdateWithoutAuthorDataInput"
  | "NoteUpsertWithWhereUniqueWithoutAuthorInput"
  | "NoteWhereInput"
  | "NoteWhereUniqueInput"
  | "StringFieldUpdateOperationsInput"
  | "StringFilter"
  | "UserCreateInput"
  | "UserUpdateInput"
  | "UserUpdateManyMutationInput"
  | "UserWhereInput"
  | "UserWhereUniqueInput";

export type NexusGenEnumNames = "Role";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames =
  | "Boolean"
  | "DateTime"
  | "Float"
  | "ID"
  | "Int"
  | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes:
    | NexusGenTypes["inputNames"]
    | NexusGenTypes["enumNames"]
    | NexusGenTypes["scalarNames"];
  allOutputTypes:
    | NexusGenTypes["objectNames"]
    | NexusGenTypes["enumNames"]
    | NexusGenTypes["unionNames"]
    | NexusGenTypes["interfaceNames"]
    | NexusGenTypes["scalarNames"];
  allNamedTypes:
    | NexusGenTypes["allInputTypes"]
    | NexusGenTypes["allOutputTypes"];
  abstractTypes: NexusGenTypes["interfaceNames"] | NexusGenTypes["unionNames"];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {}
  interface NexusGenPluginSchemaConfig {}
}