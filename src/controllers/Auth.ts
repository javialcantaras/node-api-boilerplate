import { JsonController, Get, Req, Res, Post, Body } from 'routing-controllers'
import { Request, Response } from 'express'
import User from '../models/User'


@JsonController()
export default class AuthController {
  
  @Post("/signin")
  signin(@Body({ validate: true }) user: User, @Res() res: Response) {
    return res.status(200).send()
  }

  @Get('/signout')
  signout(@Req() req: Request, @Res() res: Response) {}


  @Post('/signup')
  signup(@Req() req: Request, @Res() res: Response) {}
}