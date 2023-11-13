import { Body, Controller, Get, Param } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { FindCommitsDto } from './dto/find-all-commits.dto';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  findAll(@Body() dto: FindCommitsDto) {
    return this.commitsService.findAll(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Body() dto: FindCommitsDto) {
    return this.commitsService.findOne(id, dto);
  }
}
