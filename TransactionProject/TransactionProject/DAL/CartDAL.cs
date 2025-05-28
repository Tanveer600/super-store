using Microsoft.EntityFrameworkCore;
using TransactionProject.Models;

namespace TransactionProject.DAL
{
    public class CartDAL
    {
        private readonly DatabaseContext _context;
        public CartDAL(DatabaseContext context)
        {
            _context = context;
        }

        public async Task<List<Cart>> GetAllAsync() => await _context.Carts.ToListAsync();

        public async Task<Cart?> GetByIdAsync(int id) => await _context.Carts.FindAsync(id);

        public async Task<Cart> CreateAsync(Cart cart)
        {
            _context.Carts.Add(cart);
            await _context.SaveChangesAsync();
            return cart;
        }

        public async Task<Cart> UpdateAsync(Cart cart)
        {
            _context.Carts.Update(cart);
            await _context.SaveChangesAsync();
            return cart;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var cart = await _context.Carts.FindAsync(id);
            if (cart == null) return false;

            _context.Carts.Remove(cart);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}

