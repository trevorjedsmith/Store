﻿using SportsStoreAngular2TypeScript.Data;
using SportsStoreAngular2TypeScript.Models;
using SportsStoreAngular2TypeScript.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace SportsStoreAngular2TypeScript.Controllers.api
{
    public class OrdersController : ApiController
    {
        //Install DI container for this
        private OrderRepository repo { get; set; }
        private EmailProcessor emailProcessor = new EmailProcessor();

        public OrdersController()
        {
            repo = new OrderRepository();
        }

        public IHttpActionResult GetOrders()
        {
            return Ok(repo.GetAll());
        }

        public IHttpActionResult GetOrder(int id)
        {
            var order = repo.GetAll().FirstOrDefault(p => p.Id == id);
            if (order == null)
                return NotFound();

            return Ok(order);
        }

        public async Task<IHttpActionResult> PostOrder(Order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            //if save(order) throws then an email won't be sent
            await repo.Save(order);
            emailProcessor.ProcessOrder(order);
            return Ok(order.Id);
        }

        public async Task<IHttpActionResult> DeleteOrder(int id)
        {
            var order = repo.GetAll().FirstOrDefault(p => p.Id == id);
            if (order == null)
                return NotFound();

            await repo.Delete(id);
            return Ok(string.Format("The order with Id {0} was deleted.", id));
        }
    }
}
