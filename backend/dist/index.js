"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./database");
const cors_1 = __importDefault(require("cors"));
const database_2 = require("./database");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Declare a route with a response
app.get('/', (req, res) => {
    res.send("What's up doc?!");
});
// Start the server
app.listen(process.env.BACKEND_PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.BACKEND_PORT}`);
});
app.get("/", (req, res) => {
    res.send("HELLO FROM EXPRESS + TS!!!!");
});
app.post('/get-mine', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const { state, district, mine_name, mine_owner } = body;
        const data = yield (0, database_2.getMine)(state, district, mine_name, mine_owner);
        res.status(200).send({ response: data });
    }
    catch (e) {
        res.status(400).send('Error');
    }
}));
app.get('/get-mines', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req.body;
        const data = yield (0, database_1.getAllMines)();
        res.status(200).send({ response: data });
    }
    catch (e) {
        res.status(400).send('Error');
    }
}));
//# sourceMappingURL=index.js.map