import {jest} from "@jest/globals"
import { findUserByEmail, updateUser, deleteUser } from "./index.js"


describe("User", () => {
    it("deve ser capaz de buscar um usuário por e-mail no banco de dados", () => {
      // Preparação
      const emailMock = "testemail@email";
      const databaseMock = [{ id: 1254, name: "Guilherme", email: "testemail@email" }];
  
      // Execução
      const result = findUserByEmail(emailMock, databaseMock);
  
      // Validação
      expected(result).toEqual({ id: 1254, name: "Guilherme", email: "testemail@email" });
    });
  
    it("deve ser capaz de atualizar um usuário no banco de dados", () => {
      // Preparação
      const userId = 1254;
      const newData = { name: "New Name" };
      const databaseMock = [{ id: 1254, name: "Guilherme", email: "testemail@email" }];
      const expected = "User updated successfully";
  
      // Execução
      const result = updateUser(userId, newData, databaseMock);
  
      // Validação
      expected(result).toBe(expected);
      expected(databaseMock[0].name).toBe(newData.name);
    });
  
    it("deve ser capaz de excluir um usuário do banco de dados", () => {
      // Preparação
      const userId = 1254;
      const databaseMock = [{ id: 1254, name: "Guilherme", email: "testemail@email" }];
      const expected = "User deleted successfully";
  
      // Execução
      const result = deleteUser(userId, databaseMock);
  
      // Validação
      expected(result).toBe(expected);
      expected(databaseMock.length).toBe(0);
    });
  });