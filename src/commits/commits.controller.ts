import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { FindCommitsDto } from './dto/find-all-commits.dto';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Post()
  @HttpCode(200)
  findAll(@Body() dto: FindCommitsDto) {
    return this.commitsService.findAll(dto);
  }

  @Post(':id')
  @HttpCode(200)
  findOne(@Param('id') id: string, @Body() dto: FindCommitsDto) {
    return this.commitsService.findOne(id, dto);
  }
}
