import { chain, union, map } from 'lodash';

import { KeyModel } from "./../models";

class KeysUtils {
    public static groupKeysByName(keys: KeyModel[]) : KeyModel[] {
        return chain<KeyModel>(keys).groupBy("name").map((dictionary, key) => {
            const views: string[] | undefined  = union(...map<KeyModel, keyof KeyModel>(dictionary, 'localesList'));
            const languages: string[] | undefined = union(...map<KeyModel, keyof KeyModel>(dictionary, 'templatesList'));
            const item: KeyModel = new KeyModel(key, views, languages);
            return item;
        }).value();
    }
}

export { KeysUtils };
