using Microsoft.AspNetCore.Mvc;
using TransactionProject.DAL;
using TransactionProject.Models;

namespace TransactionProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartItemController : ControllerBase
    {
        private readonly CratItemDAL _dal;

        public CartItemController(CratItemDAL dal)
        {
            _dal = dal;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var response = new ResponseDataModel();
            try
            {
                var items = await _dal.GetAllAsync();
                response.IsSuccess = true;
                response.Data = items;
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = ex.Message;
                response.ErrorResponse = ex;
            }
            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var response = await _dal.GetByIDAsync(id);
            if (!response.IsSuccess || response.Data == null || !response.Data.Any())
            {
                return NotFound(response);
            }
            return Ok(response);
        }

        [HttpPost("create")]
        public async Task<IActionResult> Create([FromBody] CartItem cartItem)
        {
            var response = await _dal.CreateAsync(cartItem);
            return Ok(response);
        }

        [HttpPut("update")]
        public async Task<IActionResult> Update([FromBody] CartItem cartItem)
        {
            var response = await _dal.UpdateAsync(cartItem);
            if (!response.IsSuccess)
            {
                return NotFound(response);
            }
            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var response = await _dal.DeleteAsync(id);
            if (!response.IsSuccess)
            {
                return NotFound(response);
            }
            return Ok(response);
        }
    }
}
