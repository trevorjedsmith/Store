using SportsStoreAngular2TypeScript.Data;
using SportsStoreAngular2TypeScript.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace SportsStoreAngular2TypeScript.Controllers.api
{
    public class ProductsController : ApiController
    {
        //Install DI container for this
        private ProductRepository repo { get; set; }

        public ProductsController()
        {
            repo = new ProductRepository();
        }
        
        public IHttpActionResult GetProducts()
        {
            return Ok(repo.GetAll());
        }

        [Route("api/products/categories")]
        public IHttpActionResult GetCategories()
        {
            return Ok(repo.GetAll().Select(x => x.Category).Distinct().OrderBy(x => x));
        }

        public IHttpActionResult GetProduct(int id)
        {
            var product = repo.GetAll().FirstOrDefault(p => p.Id == id);
            if (product == null)
                return NotFound();

            return Ok(product);
        }

        public async Task<IHttpActionResult> PostProduct(Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await repo.Save(product);
            return Ok(product);
        }

        public async Task<IHttpActionResult> DeleteProduct(int id)
        {
            var product = repo.GetAll().FirstOrDefault(p => p.Id == id);
            if (product == null)
                return NotFound();

            await repo.Delete(id);
            return Ok(string.Format("The product with Id {0} was deleted.", id));
        }
    }
}
