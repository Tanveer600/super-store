namespace accountprojects.Models
{
    public class Project
    {
        public int ID { get; set; }
        public string? ProjectName { get; set; }
        public int? CustomerID { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? DueDate { get; set; }
        public string? Status { get; set; }
        public int? EmployeeID { get; set; }
        public string? Source { get; set; }
        public int? UserID { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string? CostCenter { get; set; }
        public double? Budget { get; set; }
        public string? CostType { get; set; }
        public DateTime? CompletionDate { get; set; }
        public string? ProjectContract { get; set; }
    }
}
