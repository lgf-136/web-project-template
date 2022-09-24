import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import usersMock from './users';

export function setupProdMockServer() {
  createProdMockServer([ ...usersMock ]);
}
