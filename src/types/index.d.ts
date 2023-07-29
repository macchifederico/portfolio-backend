declare global {
    namespace Express {
      interface Request {
        userId: string;
      }
      interface JwtPayload {
        _id: number;
      }
    }
  }
  export {};