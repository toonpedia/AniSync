import MangaProvider from ".";
import { Format, Result } from "../..";
export default class ComicK extends MangaProvider {
    id: string;
    url: string;
    formats: Format[];
    private api;
    search(query: string): Promise<Result[] | undefined>;
}
