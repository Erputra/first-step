import { Controller, Get, Query, Param, Header, Body, Ip } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  findOne(
    @Param('id') id: string,       // Route parameter
    @Query('search') search: string, // Query parameter
    @Ip() ip: string,
  ): string {
    return `Cat ID: ${id}, Search: ${search} IP: ${ip}`;
  }

  @Get('breed/:id/:name')
  findBreed(@Param() {id, name}: any): string {
    return `kucing dengan id ${id} dan nama ${name}`
  }
}
