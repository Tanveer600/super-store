using Microsoft.AspNetCore.Mvc;
using TransactionProject.DAL;
using TransactionProject.Models;

namespace TransactionProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly CartDAL _dal;

        public CartController(CartDAL dal)
        {
            _dal = dal;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var carts = await _dal.GetAllAsync();
            return Ok(carts);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var cart = await _dal.GetByIdAsync(id);
            if (cart == null) return NotFound();
            return Ok(cart);
        }

        [HttpPost("create")]
        public async Task<IActionResult> Create([FromBody] Cart cart)
        {
            var created = await _dal.CreateAsync(cart);
            return Ok(created);
        }

        [HttpPut("update/{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Cart cart)
        {
            var existing = await _dal.GetByIdAsync(id);
            if (existing == null) return NotFound();

            existing.CustomerID = cart.CustomerID;
            existing.CreatedAt = cart.CreatedAt;

            var updated = await _dal.UpdateAsync(existing);
            return Ok(updated);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var deleted = await _dal.DeleteAsync(id);
            if (!deleted) return NotFound();

            return Ok(new { Message = "Deleted successfully" });
        }
    }
}
