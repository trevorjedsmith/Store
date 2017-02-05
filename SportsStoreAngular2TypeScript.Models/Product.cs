using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportsStoreAngular2TypeScript.Models
{
    public class Product
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        [Range(1, 100000)]
        public decimal Price { get; set; }
        [Required]
        public string Category { get; set; }
        //image uplodaing
        public byte[] ImageData { get; set; }
        public string ImageMimeType { get; set; }
    }
}
