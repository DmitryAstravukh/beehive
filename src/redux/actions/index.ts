import * as authActions from './auth';
import * as usersActions from './users';
import * as profileActions from './profile';

//https://habr.com/ru/company/alfa/blog/452620/
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type AuthActionTypes = ReturnType<InferValueTypes<typeof authActions>>;
export type UsersActionTypes = ReturnType<InferValueTypes<typeof usersActions>>;
export type ProfileActionTypes = ReturnType<InferValueTypes<typeof profileActions>>;