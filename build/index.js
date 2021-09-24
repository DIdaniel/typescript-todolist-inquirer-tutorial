"use strict";
// https://www.youtube.com/watch?v=yA-KlmqjRT0&list=PLOSNUO27qFbsI9bAIVitBcq-klZae5GMi&index=10
// 4-2 User Interaction
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoConsole_1 = __importDefault(require("./view/TodoConsole"));
const todoConsole = new TodoConsole_1.default();
todoConsole.promptUser();
