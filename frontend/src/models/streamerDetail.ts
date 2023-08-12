export interface StreamerDetail {
    id: string,
    displayName: string,
    thumbnail: string,
    primaryLink: StreamerLink,
    otherLinks: Array<StreamerLink>,
    tags: Array<Tag>,
}

export interface Tag {
    value: string,
}

export interface StreamerLink {
    url: string,
    thumbnail: string,
}

export class StreamerDetailImpl implements StreamerDetail {
    id: string;
    displayName: string;
    thumbnail: string;
    otherLinks: Array<StreamerLink>;
    primaryLink: StreamerLink;
    tags: Array<Tag>;

    constructor(id: string, displayName: string, thumbnail: string, primaryLink: string, tags: string[] = []) {
        this.id = id;
        this.displayName = displayName;
        this.thumbnail = thumbnail;
        this.primaryLink = new StreamerLinkImpl(primaryLink);
        this.otherLinks = [];
        this.tags = tags.map(_ => {return new TagImpl(_)});
    }

    addTag(value: string): void {
        this.tags.push(new TagImpl(value));
    }
}

export class TagImpl implements Tag {
    value: string;
    constructor(value: string) {
        this.value = value;
    }
}

export class StreamerLinkImpl implements StreamerLink {
    constructor(url: string) {
        this.url = url;
        this.thumbnail = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/320px-YouTube_full-color_icon_%282017%29.svg.png";
    }

    thumbnail: string;
    url: string;
}