import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaService } from './categoria.service';
import { CategoriaDTO } from './dto/categoria.dto';
import { Categoria } from './entity/categoria.entity';

describe('CategoriaService', () => {
  let service: CategoriaService;

  const mockRepo = {
    save: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    findOne: jest.fn(),
    find: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriaService,
        {
          provide: getRepositoryToken(Categoria),
          useValue: mockRepo
        }],
    }).compile();

    service = module.get<CategoriaService>(CategoriaService);
  });

  it('should be defined...', () => {
    expect(service).toBeDefined();
  });

  it('should create a category', async () => {

    const c = new CategoriaDTO()
    c.nm_categoria = "Cartões"

    mockRepo.save.mockReturnValue({
      "nm_categoria": "Cartões",
      "id": 1
    })


    const ret = await service.create(c)

    expect(ret.id).toBe(1)
  });

  it('should retrieve a category with name "Cartões"', async () => {

    const c = new CategoriaDTO()
    c.nm_categoria = "Cartões"

    mockRepo.findOne.mockReturnValue({
      "nm_categoria": "Cartões",
      "id": 1
    })

    const ret = await service.findById(1)

    expect(ret.nm_categoria).toBe('Cartões')
  });

  it('should update a category with name "Cartões"', async () => {

    const c = new CategoriaDTO()
    c.nm_categoria = "Cartões"

    mockRepo.update.mockReturnValue({
      "generatedMaps": [],
      "affected": 1
    })

    const ret = await service.update(1, c)

    expect(ret.affected).toBeGreaterThan(0)
  });

  it('should delete a category ', async () => {

    const c = new CategoriaDTO()
    c.nm_categoria = "Cartões"

    mockRepo.delete.mockReturnValue({
      "affected": 1
    })

    const ret = await service.delete(1)

    expect(ret.affected).toBeGreaterThan(0)
  });


  it('should retrieve an array of category ', async () => {

    const c = new CategoriaDTO()
    c.nm_categoria = "Cartões"
    c.id = 0

    mockRepo.find.mockReturnValue(
      [
        {
          "id": 1,
          "nm_categoria": "Cartões"
        }
      ]
    )

    const ret = await service.findAllOrQuery({})

    expect(ret.length).toBeGreaterThan(0)
  });

});
