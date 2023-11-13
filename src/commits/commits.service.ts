import { Injectable, NotFoundException } from '@nestjs/common';

import { Octokit } from 'octokit';
import { FindCommitsDto } from './dto/find-all-commits.dto';

@Injectable()
export class CommitsService {
  private octokit: Octokit;
  constructor() {
    this.octokit = new Octokit({
      auth: process.env.TOKEN,
    });
  }

  async findAll(dto: FindCommitsDto) {
    try {
      const result = await this.octokit.request(
        'GET /repos/{owner}/{repo}/commits',
        {
          owner: dto.owner,
          repo: dto.repo,
        },
      );

      return result;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async findOne(id: string, dto: FindCommitsDto) {
    try {
      const result = await this.octokit.request(
        'GET /repos/{owner}/{repo}/commits/{ref}',
        {
          owner: dto.owner,
          repo: dto.repo,
          ref: id,
        },
      );

      return result;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
