"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class TokenService {
    constructor() {
    }
    verifyToken(req, res, next) {
        if (!req.headers.authorization) {
            return res.status(401).send('Request no autorizado');
        }
        const token = req.headers.authorization.split(' ')[1];
        if (token === 'null') {
            return res.status(401).send('Request no autorizado');
        }
        const payload = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        req.userId = payload._id;
        next();
    }
}
exports.tokenService = new TokenService();
exports.default = exports.tokenService;
