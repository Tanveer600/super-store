using AccountProjectManagement.Models;
using AccountProjectManagement.Services.IService;
using accountprojects.Models;
using Microsoft.AspNetCore.Mvc;

namespace AccountProjectManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _service;

        public AccountController(IAccountService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var response = new ResponseDataModel();
            try
            {
                var data = await _service.GetAllAsync();
                response.IsSuccess = true;
                response.Data = data;
                response.Message = "Accounts fetched successfully.";
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = "Error occurred while fetching accounts.";
                response.ErrorResponse = ex;
                return StatusCode(500, response);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var response = new ResponseDataModel();
            try
            {
                var data = await _service.GetByIdAsync(id);
                if (data == null)
                {
                    response.IsSuccess = false;
                    response.Message = "Account not found.";
                    return NotFound(response);
                }

                response.IsSuccess = true;
                response.Data = new[] { data };
                response.Message = "Account fetched successfully.";
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = "Error occurred while fetching account.";
                response.ErrorResponse = ex;
                return StatusCode(500, response);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] Account account)
        {
            var response = new ResponseDataModel();
            try
            {
                var added = await _service.AddAsync(account);
                response.IsSuccess = true;
                response.Data = new[] { added };
                response.Message = "Account created successfully.";
                return CreatedAtAction(nameof(GetById), new { id = added.ID }, response);
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = "Error occurred while creating account.";
                response.ErrorResponse = ex;
                return StatusCode(500, response);
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] Account account)
        {
            var response = new ResponseDataModel();
            try
            {
                var updated = await _service.UpdateAsync(account);
                response.IsSuccess = true;
                response.Data = new[] { updated };
                response.Message = "Account updated successfully.";
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = "Error occurred while updating account.";
                response.ErrorResponse = ex;
                return StatusCode(500, response);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var response = new ResponseDataModel();
            try
            {
                var result = await _service.DeleteAsync(id);
                if (!result)
                {
                    response.IsSuccess = false;
                    response.Message = "Account not found or could not be deleted.";
                    return NotFound(response);
                }

                response.IsSuccess = true;
                response.Message = "Account deleted successfully.";
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = "Error occurred while deleting account.";
                response.ErrorResponse = ex;
                return StatusCode(500, response);
            }
        }
    }
}
