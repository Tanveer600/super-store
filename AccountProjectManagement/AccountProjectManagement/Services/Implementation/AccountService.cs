using AccountProjectManagement.DAL.InterfacesRepositories;
using AccountProjectManagement.Services.IService;
using accountprojects.Models;

namespace AccountProjectManagement.Services.Implementation
{
    public class AccountService: IAccountService
{
    private readonly IAccountRepository _repository;

    public AccountService(IAccountRepository repository)
    {
        _repository = repository;
    }

    public Task<List<Account>> GetAllAsync() => _repository.GetAllAsync();
    public Task<Account> GetByIdAsync(int id) => _repository.GetByIdAsync(id);
    public Task<Account> AddAsync(Account account) => _repository.AddAsync(account);
    public Task<Account> UpdateAsync(Account account) => _repository.UpdateAsync(account);
    public Task<bool> DeleteAsync(int id) => _repository.DeleteAsync(id);
}
   
}
