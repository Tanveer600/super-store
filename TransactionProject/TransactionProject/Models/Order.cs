﻿namespace TransactionProject.Models
{
    public class Order
    {
        public int OrderID { get; set; }
        public int CustomerID { get; set; }

        public DateTime OrderDate { get; set; } = DateTime.Now;

        public decimal TotalAmount { get; set; }

        public string Status { get; set; } = "Pending";
    }
}
