namespace accountprojects.Models
{
    public class Bill
    {
        public int ID { get; set; }
        public string ? BillNo { get; set; }
        public DateTime? BillDate { get; set; }
        public int? CustomerID { get; set; }
        public int? ProjectID { get; set; }
        public string ? Description { get; set; }
        public DateTime? WeekStart { get; set; }
        public DateTime? WeekEnd { get; set; }
        public string? HoursBilled { get; set; }
        public int? UserID { get; set; }
        public DateTime? CreatedOn { get; set; }
    }
}
