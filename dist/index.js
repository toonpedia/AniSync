"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const worker_1 = __importDefault(require("./worker"));
const event_1 = __importStar(require("@/src/helper/event"));
const server_1 = require("./server");
event_1.default.on(event_1.Events.COMPLETED_SEASONAL_LOAD, (data) => {
    for (let i = 0; i < data.trending.length; i++) {
        worker_1.default.mappingQueue.add({ id: data.trending[i].aniListId, type: data.trending[i].type });
    }
    for (let i = 0; i < data.popular.length; i++) {
        worker_1.default.mappingQueue.add({ id: data.popular[i].aniListId, type: data.popular[i].type });
    }
    for (let i = 0; i < data.top.length; i++) {
        worker_1.default.mappingQueue.add({ id: data.top[i].aniListId, type: data.top[i].type });
    }
    for (let i = 0; i < data.seasonal.length; i++) {
        worker_1.default.mappingQueue.add({ id: data.seasonal[i].aniListId, type: data.seasonal[i].type });
    }
});
event_1.default.on(event_1.Events.COMPLETED_MAPPING_LOAD, (data) => {
    for (let i = 0; i < data.length; i++) {
        worker_1.default.createEntry.add({ toInsert: data[i], type: data[i].type });
    }
});
event_1.default.on(event_1.Events.COMPLETED_SEARCH_LOAD, (data) => {
    if (data[0].aniListId) {
        for (let i = 0; i < data.length; i++) {
            worker_1.default.mappingQueue.add({ id: data[i].aniListId, type: data[i].type });
        }
    }
});
worker_1.default.seasonQueue.start();
worker_1.default.mappingQueue.start();
worker_1.default.createEntry.start();
worker_1.default.searchQueue.start();
(0, server_1.start)();
