namespace accountprojects.Models
{
    public class Invoice
    {
        public int ID { get; set; }
        public string? InvoiceNo { get; set; }
        public DateTime? InvoiceDate { get; set; }
        public int? ProjectID { get; set; }
        public int? TaskID { get; set; }
        public int? CustomerID { get; set; }
        public int? UserID { get; set; }
    }
}
