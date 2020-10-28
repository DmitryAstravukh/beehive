import {UsersPhotoType} from "./users-types";

export type UserDataContactsType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null
}

export type UserDataType = {
    userId: number | null,
    aboutMe: string | null,
    contacts: UserDataContactsType,
    fullName: string | null,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    photos: UsersPhotoType
}