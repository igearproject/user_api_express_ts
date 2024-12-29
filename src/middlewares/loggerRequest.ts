import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";

const loggerRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const now = new Date();
  const formattedDate = now.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const formattedTime = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  logger.info(
    `${req.method} > ${req.url} --- ${formattedDate} ${formattedTime}`
  );
  next();
};

export default loggerRequest;
