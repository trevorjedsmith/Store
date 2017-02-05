using SportsStoreAngular2TypeScript.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportsStoreAngular2TypeScript.Interfaces
{
    public interface IOrderProcessor
    {
        void ProcessOrder(Order order);
    }
}
