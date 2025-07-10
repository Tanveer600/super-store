namespace accountprojects.Models
{
    public class Role
    {
        public int ID { get; set; }
        public string? Name { get; set; }
        public bool? CanViewDashboard { get; set; }
        public bool? CanViewEmployees { get; set; }
        public bool? CanViewAccounts { get; set; }
        public bool? CanViewUsers { get; set; }
        public bool? CanViewCustomers { get; set; }
        public bool? CanViewBills { get; set; }
        public bool? CanViewTasks { get; set; }
        public bool? CanViewProjects { get; set; }
        public bool? CanViewTransactions { get; set; }
        public bool? CanViewuserRole { get; set; }
    }
}
