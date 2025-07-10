using accountprojects.Models;

namespace AccountProjectManagement.DAL.InterfacesRepositories
{
    public interface IAccountRepository
    {
        Task<List<Account>> GetAllAsync();
        Task<Account> GetByIdAsync(int id);
        Task<Account> AddAsync(Account account);
        Task<Account> UpdateAsync(Account account);
        Task<bool> DeleteAsync(int id);
    }
}
