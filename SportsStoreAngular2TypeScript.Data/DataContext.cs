using SportsStoreAngular2TypeScript.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportsStoreAngular2TypeScript.Data
{
    public class DataContext : DbContext
    {
        public DataContext() : base("SportsStoreAngular2") { }

        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderLine> OrderLines { get; set; }
    }
}
