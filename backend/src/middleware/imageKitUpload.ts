import { NextFunction, Request, Response } from 'express';
import { IImageProps, imagekit } from '../config/imagekit';

interface IRequest extends Request {
  photos?: IImageProps[];
}

export default async function (request: IRequest, response: Response, next: NextFunction): Promise<any> {
  const files = request.files as Express.Multer.File[];

  if (!files) {
    next();
    return;
  }

  const uploadedFiles = await Promise.all(files.map(async (file) => {
    return await imagekit.upload({
      file: file.buffer,
      fileName: file.originalname,
      folder: process.env.IMAGEKIT_FOLDER || '/',
    });
  }));

  request.photos = uploadedFiles;

  next();
}
