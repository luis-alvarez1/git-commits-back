import { Injectable } from '@nestjs/common';
import { CreateCommitDto } from './dto/create-commit.dto';
import { UpdateCommitDto } from './dto/update-commit.dto';
import { Octokit } from 'octokit';

@Injectable()
export class CommitsService {
  create(createCommitDto: CreateCommitDto) {
    return 'This action adds a new commit';
  }

  async findAll() {
    const octokit = new Octokit({
      auth: process.env.TOKEN,
    });

    try {
      const result = await octokit.request(
        'GET /repos/{owner}/{repo}/commits',
        {
          owner: 'luis-alvarez1',
          repo: 'Spoon-Knife',
        },
      );
    } catch (error) {
      console.log(
        `Error! Status: ${error.status}. Message: ${error.response.data.message}`,
      );
    }

    return `This action returns all commits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commit`;
  }

  update(id: number, updateCommitDto: UpdateCommitDto) {
    return `This action updates a #${id} commit`;
  }

  remove(id: number) {
    return `This action removes a #${id} commit`;
  }
}
