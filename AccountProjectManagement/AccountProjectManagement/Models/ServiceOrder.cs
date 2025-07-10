namespace accountprojects.Models
{
    public class ServiceOrder
    {
        public int ID { get; set; }
        public string? SoNo { get; set; }
        public DateTime? SoDate { get; set; }
        public int? CustomerID { get; set; }
        public int? ProjectID { get; set; }
        public int? TaskID { get; set; }
        public string? Description { get; set; }
        public int? UserID { get; set; }
    }
}
