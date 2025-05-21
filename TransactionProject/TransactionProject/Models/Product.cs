﻿namespace TransactionProject.Models
{
    public class Product
    {
        public int ProductID { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }

        public int Stock { get; set; }

        public string ImageURL { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
