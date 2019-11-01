declare type Item = {
    text: string;
    defaultType?: 'ghost' | 'link' | 'default' | 'primary' | 'dashed' | 'danger';
    color: string;
    borderColor: string;
    iconCode: string;
};
declare const actionmaps: {
    add: Item;
    delete: Item;
    import: Item;
    export: Item;
    download: Item;
    create: Item;
    refresh: Item;
};
export default actionmaps;
