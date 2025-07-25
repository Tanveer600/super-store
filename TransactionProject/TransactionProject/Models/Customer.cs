﻿namespace TransactionProject.Models
{
    public class Customer
    {
        public int CustomerID { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string PasswordHash { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
