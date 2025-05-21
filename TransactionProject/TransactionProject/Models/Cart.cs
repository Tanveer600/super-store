namespace TransactionProject.Models
{
    public class Cart
    {
        public int CartID { get; set; }

        public int CustomerID { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
