class AuthRepository {
  async findByEmail() {
    throw new Error("AuthRepository.findByEmail belum memiliki implementasi database.");
  }

  async create() {
    throw new Error("AuthRepository.create belum memiliki implementasi database.");
  }
}

module.exports = { AuthRepository };

