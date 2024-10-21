import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  async addNewCat(cat: Cat): Promise<string> {
    this.cats.push(cat);
    return `This action adds a new cat with name ${cat.name}`;
  }

  findAllCats(): Cat[] {
    return this.cats;
  }
}
