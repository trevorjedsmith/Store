using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportsStoreAngular2TypeScript.Data
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAll();
        Task<int> Save(T entity);
        Task<T> Delete(int id);
    }
}
