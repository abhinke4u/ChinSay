using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GreenVegetables.Models
{
    public class VegetableModel
    {
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; } = decimal.Zero;
    }
    public class VegetableServerModel : VegetableModel
    {
        public int ID { get; set; } = 0;
    }
}