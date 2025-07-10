using AccountProjectManagement.DAL.InterfacesRepositories;
using accountprojects.Models;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.EntityFrameworkCore;

namespace AccountProjectManagement.DAL.ServiceRepositories
{
    public class AccountRepositories: IAccountRepository
    {
        private readonly DatabaseContext _context;

        public AccountRepositories(DatabaseContext context)
        {
            _context = context;
        }

        public async Task<List<Account>> GetAllAsync()
        {
       var getall=     await _context.Accounts.ToListAsync();
            return getall;
        }
           

        public async Task<Account> GetByIdAsync(int id)
            => await _context.Accounts.FindAsync(id);

        public async Task<Account> AddAsync(Account account)
        {
            _context.Accounts.Add(account);
            await _context.SaveChangesAsync();
            return account;
        }

        public async Task<Account> UpdateAsync(Account account)
        {
            _context.Accounts.Update(account);
            await _context.SaveChangesAsync();
            return account;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var account = await _context.Accounts.FindAsync(id);
            if (account == null) return false;

            _context.Accounts.Remove(account);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
