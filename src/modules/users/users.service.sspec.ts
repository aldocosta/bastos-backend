import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsersDTO } from './dto/users.dto';
import { Users } from './entity/users.entity';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  const mockRepo = {
    save: jest.fn(),
    query: jest.fn()
  }


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(Users),
          useValue: mockRepo
        }],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should retrive a category', async () => {

    //mocando um valor
    mockRepo.save.mockReturnValue(
      {
        "email": "santos@hotmail.com",
        "name": "santos",
        "password": "123456",
        "id": 3
      }
    )

    const u = new UsersDTO()
    u.email = "santos@hotmail.com"
    u.name = "santos"
    u.password = "123456"


    const svc: UsersService = service

    const user = await svc.create(u)

    expect(user.id).toBe(3)
  });


});
