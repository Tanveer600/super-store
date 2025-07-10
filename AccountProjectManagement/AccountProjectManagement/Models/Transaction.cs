namespace accountprojects.Models
{
    public class Transaction
    {
        public int ID { get; set; }
        public DateTime? TraDate { get; set; }
        public string TraDescription { get; set; }  // Already nullable unless nullable reference types are enabled
        public double? DebitAmount { get; set; }
        public double? CreditAmount { get; set; }
        public int? AccountID { get; set; }
        public DateTime? CreatedOn { get; set; }
        public int? UserID { get; set; }
    }
}
