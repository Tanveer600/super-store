using Microsoft.EntityFrameworkCore;
using TransactionProject.Models; // assuming CartItem is here


namespace TransactionProject.DAL
{
    public class CratItemDAL
    {
        private readonly DatabaseContext _context;

        public CratItemDAL(DatabaseContext context)
        {
            _context = context;
        }

        // CREATE
        public async Task<ResponseDataModel> CreateAsync(CartItem cartItem)
        {
            var resp = new ResponseDataModel();
            try
            {
                _context.CartItems.Add(cartItem);
                await _context.SaveChangesAsync();

                resp.IsSuccess = true;
                resp.Data = new List<CartItem> { cartItem };
            }
            catch (Exception ex)
            {
                resp.IsSuccess = false;
                resp.Message = ex.Message;
                resp.ErrorResponse = ex;
            }

            return resp;
        }

        public async Task<ResponseDataModel> ReadAsync(CartItem model)
        {
            var resp = new ResponseDataModel();
            try
            {
                var query = _context.CartItems.AsQueryable();

                if (model.CartItemID > 0)
                    query = query.Where(x => x.CartItemID == model.CartItemID);

               
                var result = await query.ToListAsync();
                resp.IsSuccess = true;
                resp.Data = result;
            }
            catch (Exception ex)
            {
                resp.IsSuccess = false;
                resp.Message = ex.Message;
                resp.ErrorResponse = ex;
            }

            return resp;
        }

        // UPDATE
        public async Task<ResponseDataModel> UpdateAsync(CartItem model)
        {
            var resp = new ResponseDataModel();
            try
            {
                var existing = await _context.CartItems.FindAsync(model.CartItemID);
                if (existing != null)
                {
                    existing.ProductID = model.ProductID;
                    existing.Quantity = model.Quantity;
                    existing.CartID = model.CartID;

                    _context.CartItems.Update(existing);
                    await _context.SaveChangesAsync();

                    resp.IsSuccess = true;
                    resp.Data = new List<CartItem> { existing };
                }
                else
                {
                    resp.IsSuccess = false;
                    resp.Message = "Cart item not found";
                }
            }
            catch (Exception ex)
            {
                resp.IsSuccess = false;
                resp.Message = ex.Message;
                resp.ErrorResponse = ex;
            }

            return resp;
        }

        // DELETE
        public async Task<ResponseDataModel> DeleteAsync(int id)
        {
            var resp = new ResponseDataModel();
            try
            {
                var item = await _context.CartItems.FindAsync(id);
                if (item != null)
                {
                    _context.CartItems.Remove(item);
                    await _context.SaveChangesAsync();

                    resp.IsSuccess = true;
                    resp.Data = new List<CartItem> { item };
                }
                else
                {
                    resp.IsSuccess = false;
                    resp.Message = "Cart item not found";
                }
            }
            catch (Exception ex)
            {
                resp.IsSuccess = false;
                resp.Message = ex.Message;
                resp.ErrorResponse = ex;
            }

            return resp;
        }
        // ✅ GET BY ID
        public async Task<ResponseDataModel> GetByIDAsync(int id)
        {
            var resp = new ResponseDataModel();
            try
            {
                var item = await _context.CartItems.FindAsync(id);
                if (item != null)
                {
                    resp.IsSuccess = true;
                    resp.Data = new List<CartItem> { item };
                }
                else
                {
                    resp.IsSuccess = false;
                    resp.Message = "Cart item not found";
                }
            }
            catch (Exception ex)
            {
                resp.IsSuccess = false;
                resp.Message = ex.Message;
                resp.ErrorResponse = ex;
            }

            return resp;
        }
        // OPTIONAL: Get all without filter
        public async Task<List<CartItem>> GetAllAsync()
        {
            return await _context.CartItems.ToListAsync();
        }
    }
}
