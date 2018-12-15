export interface IStorageActionProvider {
    load: () => Promise<any>;
    clear: () => Promise<any>;
    saveOrUpdate: (object: any) => Promise<any>;
    remove: (keys: string | Array<string>) => Promise<any>;
}
