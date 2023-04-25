export interface ListProps {
    data: ListItem[];
}
export interface ListItem {
    slug: string;
    senses: Senses[];
}
export interface Senses {
    english_definitions: string[];
}
export class ListPropsImpl implements ListProps {
    constructor(public data: ListItem[]) {}
}
export class ListItemImpl implements ListItem {
    constructor(public slug: string, public senses: Senses[]) {}
}

export class SensesImpl implements Senses {
    constructor(public english_definitions: string[]) {}
}