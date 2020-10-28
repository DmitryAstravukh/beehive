export type UserType = {
    items: Array<UserItemType>,
    totalCount: number,
    error: string
}

export type UsersPhotoType = {
    small: string | null,
    large: string | null
}

export type UserItemType = {
    id: number,
    name: string,
    status?: string,
    photos: UsersPhotoType,
    followed: boolean
}