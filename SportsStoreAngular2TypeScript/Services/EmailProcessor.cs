using SportsStoreAngular2TypeScript.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SportsStoreAngular2TypeScript.Models;
using System.Net.Mail;
using System.Net;
using System.Text;

namespace SportsStoreAngular2TypeScript.Services
{
    public class EmailProcessor : IOrderProcessor
    {
        //this should be in config file
        private EmailSettings emailSettings = new EmailSettings();

        public void ProcessOrder(Order order)
        {
            using (var smtpClient = new SmtpClient())
            {
                smtpClient.EnableSsl = emailSettings.UseSsl;
                smtpClient.Host = emailSettings.ServerName;
                smtpClient.Port = emailSettings.ServerPort;
                smtpClient.UseDefaultCredentials = false;
                smtpClient.Credentials
                = new NetworkCredential(emailSettings.Username, emailSettings.Password);


                StringBuilder body = new StringBuilder()
                .AppendLine("A new order has been submitted")
                .AppendLine("---")
                .AppendLine("Items:");
                foreach (var line in order.Lines)
                {
                    var subtotal = line.Product.Price * line.count;
                    body.AppendFormat("{0} x {1} (subtotal: {2:c}",
                    line.count,
                    line.Product.Name,
                    subtotal);
                }
                body.AppendFormat("Total order value: {0:c}",
                OrderTotal(order))
                .AppendLine("---")
                .AppendLine("Ship to:")
                .AppendLine(order.Name)
                .AppendLine(order.Street)
                .AppendLine(order.State)
                .AppendLine(order.Zip)
                .AppendLine(order.City)
                .AppendLine(order.Country)
                .AppendLine("---")
                .AppendFormat("Gift wrap: {0}",
                order.GiftWrap ? "Yes" : "No");
                MailMessage mailMessage = new MailMessage(
                emailSettings.MailFromAddress, //From
                emailSettings.MailToAddress, //To
                "Order from The Store submitted!", //Subject
                body.ToString()); //Body
                smtpClient.Send(mailMessage);
            }
        }

        public decimal OrderTotal(Order order)
        {
            decimal total = 0;
            foreach(var item in order.Lines)
            {
                total += (item.count * item.price);
            }
            return total;
        }


        public class EmailSettings
        {
            public string MailToAddress = "trevor_jed_smith@hotmail.com";
            public string MailFromAddress = "sportsstore@example.com";
            public bool UseSsl = true;
            public string Username = "trevor_jed_smith@hotmail.com";
            public string Password = "RMITServer2003";
            public string ServerName = "smtp.live.com";
            public int ServerPort = 25;
        }
    }
}