using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using TransactionProject.Models;
using System.IO;

[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly ProductsDAL _dal;
    private readonly IWebHostEnvironment _env;

    public ProductsController(ProductsDAL dal, IWebHostEnvironment env)
    {
        _dal = dal;
        _env = env;
    }

    [HttpPost("create")]
    public async Task<IActionResult> Create([FromForm] Product product, IFormFile image)
    {
        if (image != null && image.Length > 0)
        {
            string uploadsFolder = Path.Combine(_env.WebRootPath, "images");
            Directory.CreateDirectory(uploadsFolder); // Make sure folder exists
            string fileName = Guid.NewGuid().ToString() + Path.GetExtension(image.FileName);
            string filePath = Path.Combine(uploadsFolder, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await image.CopyToAsync(stream);
            }

            product.ImageURL = "/images/" + fileName; // relative path
        }

        var created = await _dal.CreateAsync(product);
        return Ok(created);
    }

    [HttpPut("update/{id}")]
    public async Task<IActionResult> Update(int id, [FromForm] Product product, IFormFile? image)
    {
        var existing = await _dal.GetByIdAsync(id);
        if (existing == null) return NotFound();

        existing.Name = product.Name;
        existing.Description = product.Description;
        existing.Price = product.Price;
        existing.Stock = product.Stock;

        if (image != null)
        {
            string uploadsFolder = Path.Combine(_env.WebRootPath, "images");
            string fileName = Guid.NewGuid().ToString() + Path.GetExtension(image.FileName);
            string filePath = Path.Combine(uploadsFolder, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await image.CopyToAsync(stream);
            }

            existing.ImageURL = "/images/" + fileName;
        }

        var updated = await _dal.UpdateAsync(existing);
        return Ok(updated);
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var products = await _dal.GetAllAsync();
        return Ok(products);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var product = await _dal.GetByIdAsync(id);
        if (product == null) return NotFound();
        return Ok(product);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleted = await _dal.DeleteAsync(id);
        if (!deleted) return NotFound();
        return Ok(new { Message = "Deleted successfully" });
    }
}
