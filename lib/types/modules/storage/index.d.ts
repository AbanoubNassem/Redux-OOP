export interface IStorageActionProvider {
    load: () => void;
    clear: () => void;
    saveOrUpdate: (object: any) => void;
    remove: (keys: string | Array<string>) => void;
}
export interface IAsyncStorageActionProvider {
    load: () => Promise<any>;
    clear: () => Promise<any>;
    saveOrUpdate: (object: any) => Promise<any>;
    remove: (keys: string | Array<string>) => Promise<any>;
}
