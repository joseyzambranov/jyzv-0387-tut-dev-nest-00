import { 
    Controller, 
    Get, 
    Req, 
    Post, 
    HttpCode,
    Header 
    } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get('ab*cd')
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Post()
  @Header('Cache-Control', 'none')
  //@HttpCode(204) // 
  create(): string {
    return 'This action adds a new cat';
  }
}