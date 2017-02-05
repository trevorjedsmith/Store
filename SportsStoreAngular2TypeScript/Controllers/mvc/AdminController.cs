using SportsStoreAngular2TypeScript.Data;
using SportsStoreAngular2TypeScript.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace SportsStoreAngular2TypeScript.Controllers.mvc
{
    public class AdminController : Controller
    {

        //Use Ninject for this
        ProductRepository _repo = new ProductRepository();
        // GET: Admin
        public ActionResult Index()
        {
            return View(_repo.GetAll());
        }
        [HttpGet]
        public ViewResult Edit(int id)
        {
            Product product = _repo.GetAll().FirstOrDefault(x => x.Id == id);
            return View(product);

        }
        [HttpPost]
        public async Task<ActionResult> Edit(Product product)
        {
            if (ModelState.IsValid)
            {
                await _repo.Save(product);
                TempData["Message"] = string.Format("{0} has been saved", product.Name);
                return RedirectToAction("Index");
            }else
            {
                return View(product);
            }
        }

        [HttpGet]
        public ViewResult Create()
        { 
            return View(new Product());

        }
        [HttpPost]
        public async Task<ActionResult> Create(Product product)
        {
            if (ModelState.IsValid)
            {
                await _repo.Save(product);
                TempData["Message"] = string.Format("{0} has been created", product.Name);
                return RedirectToAction("Index");
            }
            else
            {
                return View(product);
            }
        }

        [HttpGet]
        public ViewResult Delete(int id)
        {
            Product product = _repo.GetAll().FirstOrDefault(x => x.Id == id);
            return View(product);

        }

        [HttpPost]
        public async Task<ActionResult> Delete(int id,bool check)
        {
            Product product = _repo.GetAll().FirstOrDefault(x => x.Id == id);
            if(product != null && check == true)
            {
                await _repo.Delete(id);
                TempData["Message"] = string.Format("{0} has been deleted", product.Name);
                return RedirectToAction("Index");
            }
            return View(product);           
        }

    }
}