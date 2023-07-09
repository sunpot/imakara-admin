export interface StreamerDetail {
    displayName: string,
    thumbnail: string,
    primaryLink: StreamerLink,
    otherLinks: Array<StreamerLink>,
    tags: Array<Tag>,
}

export interface Tag {
    key: string,
    value: string,
}

export interface StreamerLink {
    url: string,
    thumbnail: string,
}

