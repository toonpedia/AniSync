"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const _1 = __importDefault(require("."));
class ComicK extends _1.default {
    id = "comick";
    url = "https://comick.app";
    formats = ["MANGA" /* Format.MANGA */, "ONE_SHOT" /* Format.ONE_SHOT */];
    api = "https://api.comick.app";
    async search(query) {
        const data = (await (0, axios_1.default)(`${this.api}/v1.0/search?q=${encodeURIComponent(query)}&limit=25&page=1`)).data;
        const results = [];
        data.map((result) => {
            let cover = result.md_covers ? result.md_covers[0] : null;
            if (cover && cover.b2key != undefined) {
                cover = "https://meo.comick.pictures/" + cover.b2key;
            }
            results.push({
                id: result.slug,
                title: result.title ?? result.slug,
                altTitles: result.md_titles ? result.md_titles.map((title) => title.title) : [],
                img: cover,
                year: result.created_at ? new Date(result.created_at).getFullYear() : 0,
                providerId: this.id,
            });
        });
        return results;
    }
}
exports.default = ComicK;
