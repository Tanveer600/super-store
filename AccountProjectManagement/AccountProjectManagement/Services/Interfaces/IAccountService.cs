using accountprojects.Models;

namespace AccountProjectManagement.Services.IService
{
    public interface IAccountService
    {
        Task<List<Account>> GetAllAsync();
        Task<Account> GetByIdAsync(int id);
        Task<Account> AddAsync(Account account);
        Task<Account> UpdateAsync(Account account);
        Task<bool> DeleteAsync(int id);
    }
}
