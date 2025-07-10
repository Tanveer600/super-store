namespace accountprojects.Models
{
    public class Payment
    {
        public int ID { get; set; }
        public DateTime? PaymentDate { get; set; }
        public double? Amount { get; set; }
        public int? CustomerID { get; set; }
        public int? UserID { get; set; }
        public int? InvoiceID { get; set; }
        public int? SoID { get; set; }
        public string? PaymentMode { get; set; }
    }
}
