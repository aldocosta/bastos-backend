import { HttpException, HttpStatus, PreconditionFailedException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './catetoria.controller';
import { CategoriaDTO } from './dto/categoria.dto';
import { Categoria } from './entity/categoria.entity';


describe('CatetoriaController', () => {
  let controller: CategoriaController;
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
      controllers: [CategoriaController],
      providers: [
        CategoriaService,
        {
          provide: getRepositoryToken(Categoria),
          useValue: mockRepo
        }
      ],
    }).compile();

    controller = module.get<CategoriaController>(CategoriaController);
    service = module.get<CategoriaService>(CategoriaService);
    jest.clearAllMocks()
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('save', async () => {
    const cat = new CategoriaDTO()
    cat.id = 1
    cat.nm_categoria = "Cartao"

    mockRepo.save.mockReturnValue(cat)

    const ret = await controller.create(cat)

    expect(ret.id).toBe(1)
  });

  it('update', async () => {
    const cat = new CategoriaDTO()
    cat.id = 1
    cat.nm_categoria = "Cartao"

    mockRepo.update.mockReturnValue({ affected: 1 })

    const ret = await controller.update(1, cat)

    expect(ret.affected).toBeGreaterThan(0)

  });

  it('delete', async () => {
    const cat = new CategoriaDTO()
    cat.id = 1
    cat.nm_categoria = "Cartao"

    mockRepo.delete.mockReturnValue({ affected: 1 })

    const ret = await controller.delete(1)

    expect(ret.affected).toBeGreaterThan(0)

  });


  it('findById', async () => {

    mockRepo.findOne.mockReturnValue({
      "nm_categoria": "Cartões",
      "id": 1
    })
    const ret = await controller.findById(1)

    expect(ret.nm_categoria).toBe('Cartões')

  });


  it('findById exception', () => {

    jest.spyOn(service, 'findById').mockRejectedValueOnce(new HttpException("Error", HttpStatus.BAD_REQUEST))

    expect(controller.findById(1)).rejects.toThrow(new HttpException("Error", HttpStatus.BAD_REQUEST))

  });

  it('create exception by field required', async () => {
    jest.resetAllMocks()
    const cat = new CategoriaDTO()
    cat.id = 1
    

    let msg = 'Campo nm_categoria não pode ser vazio'
    let retorno = ''

    //mockRepo.save.mockReturnValue(cat)

    try {
      const ret = await controller.create(cat)
    } catch (error) {
      retorno = error.message
    }

    expect(retorno).toBe(msg)
  });

});
