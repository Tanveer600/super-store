using Microsoft.EntityFrameworkCore;

namespace accountprojects.Models
{
    public class DatabaseContext: DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext>options):base(options) { }
                      
        public DbSet<User> Users { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Bill> Bills { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Task> Tasks { get; set; }
        public DbSet<Designation> Designations { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<CompanyInformation> CompanyInformations { get; set; }
        public DbSet<Invoice> Invoices { get; set; }
        public DbSet<ServiceOrder> ServiceOrders { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Payment> Payments { get; set; }
        }
    }

