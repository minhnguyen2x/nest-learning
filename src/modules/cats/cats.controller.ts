import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { AddNewCatRequestDto } from './dto/add-new-cat.request.dto';
import { GetAllCatsRequestQueryDto } from './dto/get-all-cats.request.dto';

@Controller('cats')
export class CatsController {
  @Get()
  async getAllCats(@Query() query: GetAllCatsRequestQueryDto): Promise<string> {
    const { limit } = query;
    return `This action returns all cats include ${limit} items`;
  }

  @Post()
  async addNewCat(@Body() body: AddNewCatRequestDto): Promise<string> {
    const { name, age, breed } = body;
    return `This action adds a new cat ${name}/${age}/${breed}`;
  }

  @Get(':id')
  async getCatById(@Param('id') id: string): Promise<string> {
    return `This action returns a cat with id ${id}`;
  }

  @Put(':id')
  async updateCatById(
    @Param('id') id: string,
    @Body() body: AddNewCatRequestDto,
  ): Promise<string> {
    const { name, age, breed } = body;
    return `This action updates a cat with id ${id} to ${name}/${age}/${breed}`;
  }

  @Delete(':id')
  async deleteCatById(@Param('id') id: string): Promise<string> {
    return `This action removes a cat with id ${id}`;
  }
}
