namespace accountprojects.Models
{
    public class Account
    {
        public int ID { get; set; }
        public string? Name { get; set; }  // Already nullable
        public double? OpeningBalance { get; set; }
        public DateTime? OpeningDate { get; set; }
        public DateTime? CreatedOn { get; set; }
        public int? UserID { get; set; }
        public string? CostCenter { get; set; }  // Already nullable
    }
}
