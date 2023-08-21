class MockDatabase {
  connect = () => this;
  find = async (query) => dbData;
}