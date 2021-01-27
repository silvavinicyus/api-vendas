import AppError from "@shared/errors/AppError";
import { getCustomRepository} from "typeorm";
import Customer from "../typeorm/entities/Customer";
import CustomersRepository from "../typeorm/repositories/CustomersRepository";

interface IRequest{
  name: string,
  email: string,
}

class CreateCustomerService{
  public async execute({name, email}: IRequest): Promise<Customer>{
    const costumersRepository = getCustomRepository(CustomersRepository);

    const emailExists = await costumersRepository.findByEmail(email);

    if(emailExists) {
      throw new AppError('Email address already used.');
    }

    const costumer = costumersRepository.create({
      name,
      email,
    })

    await costumersRepository.save(costumer);

    return costumer;
  }
}
export default CreateCustomerService;
