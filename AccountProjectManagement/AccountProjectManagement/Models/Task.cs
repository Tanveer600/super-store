namespace accountprojects.Models
{
    public class Task
    {
        public int ID { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public int? ProjectID { get; set; }
        public int? EmployeeID { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? CompletedOn { get; set; }
        public int? UserID { get; set; }
    }
}
