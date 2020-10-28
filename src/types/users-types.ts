export type UsersPhotoType = {
    small: string | null,
    large: string | null
}

export type UserType = {
    id: number,
    name: string,
    status?: string,
    photos: UsersPhotoType,
    followed: boolean
}