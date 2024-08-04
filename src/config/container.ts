import { container } from 'tsyringe'; // Container allow us to instance the entities only once instead to instance everey time we need it
// Import the services so we can instance them
import UserService from '../services/userService';
import UserRepository from '../repositories/userRepository';
import ProductRepository from '../repositories/productRepository';
import ProductService from '../services/productService';

// We convert the services and repositories in a singleton
container.registerSingleton<UserRepository>(UserRepository);
container.registerSingleton<UserService>(UserService);
container.registerSingleton<ProductRepository>(ProductRepository);
container.registerSingleton<ProductService>(ProductService);