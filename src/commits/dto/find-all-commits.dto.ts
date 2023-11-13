import { IsString } from 'class-validator';

export class FindCommitsDto {
  @IsString()
  owner: string;
  @IsString()
  repo: string;
}
