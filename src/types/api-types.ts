import {UserDataTypeAuth} from "./auth-types";
import {ResultCodesEnum} from "../api/api";

export type ApiGetAuthUserDataType = {
    data: UserDataTypeAuth,
    resultCode: ResultCodesEnum,
    message: Array<string>
}

export type ApiFollowedType = {
    resultCode: ResultCodesEnum,
    messages: Array<string>,
    data: Object
}

export type ApiUpdateUserStatusType = {
    resultCode: ResultCodesEnum,
    messages: Array<string>,
    data: Object
}