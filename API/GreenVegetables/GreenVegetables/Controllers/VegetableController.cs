using GreenVegetables.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace GreenVegetables.Controllers
{
    [EnableCors(origins:"*", headers:"*", methods:"*")]
    [Authorize]         //to ensure that only authenticated clients can access the methods in this controller
    [AllowAnonymous]    //to allow anonymous accessn for entire controller as per client request, could also be done on individual methods
    public class VegetableController : ApiController
    {
        //static variable to hold the vegetable data. Ideally, this would be in database.
        private static List<VegetableServerModel> vegetables = new List<VegetableServerModel>();

        /// <summary>
        /// Initial data for vegetable store.
        /// </summary>
        static VegetableController()
        {
            vegetables.Add(new VegetableServerModel { ID = 1, Name = "Default_Potato", Price = 3.5m });
            vegetables.Add(new VegetableServerModel { ID = 2, Name = "Default_Tomato", Price = 2.0m });
            vegetables.Add(new VegetableServerModel { ID = 3, Name = "Default_Spinach", Price = 1.5m });
        }

        /// <summary>
        /// Lists all vegetables available
        /// </summary>
        /// <returns>List of vegetables</returns>
        public IEnumerable<VegetableServerModel> Get()
        {
            return vegetables.OrderBy(a => a.ID);
        }

        /// <summary>
        /// Fetches a specific vegetable by its id
        /// </summary>
        /// <param name="id">Id of the vegetable</param>
        /// <returns>Vegetable with given id</returns>
        /// <exception cref="HttpResponseException">Thrown if no vegetable with given id is found</exception>
        public VegetableServerModel Get(int id)
        {
            var veggie = vegetables.FirstOrDefault(a => a.ID == id);
            if (veggie == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            return veggie;
        }

        /// <summary>
        /// Creates new vegetable in system
        /// </summary>
        /// <param name="vegetable">Details of vegetable</param>
        /// <returns>Response with URI of created content (vegetable in this case)</returns>
        public HttpResponseMessage Post([FromBody] VegetableModel vegetable)
        {
            var maxIdInVeggie = vegetables.Count > 0 ? vegetables.Max(a => a.ID) : 0;
            var veggieToAdd = new VegetableServerModel { ID = ++maxIdInVeggie, Name = vegetable.Name, Price = vegetable.Price };
            vegetables.Add(veggieToAdd);

            //return veggieToAdd;   //returns the created vegetable without any URI information

            //return the response with URI of created content (vegetable in this case)

            HttpResponseMessage response = null;
            if (Request?.RequestUri != null)
            {
                response = Request.CreateResponse(HttpStatusCode.Created);
                var veggieLocation = new Uri(Request.RequestUri, $"vegetable/{veggieToAdd.ID}");
                response.Headers.Location = veggieLocation;
            }

            return response;
        }

        /// <summary>
        /// Updates the vegetable data
        /// </summary>
        /// <param name="id">Id of the vegetable to update</param>
        /// <param name="vegetable">Vegetable data to use for updating</param>
        /// <returns>Response indicating success of update operation</returns>
        /// <exception cref="HttpResponseException">Thrown if no vegetable with given id is found</exception>
        public HttpResponseMessage Put(int id, [FromBody] VegetableModel vegetable)
        {
            var veggieToUpdate = vegetables.FirstOrDefault(a => a.ID == id);
            if (veggieToUpdate == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            veggieToUpdate.Name = vegetable.Name;
            veggieToUpdate.Price = vegetable.Price;

            return Request?.CreateResponse(HttpStatusCode.OK);
        }

        /// <summary>
        /// Deletes the vegetable data from system
        /// </summary>
        /// <param name="id">Id of the vegetable to delete</param>
        /// <returns>Response indicating success of delete operation</returns>
        /// <exception cref="HttpResponseException">Thrown if no vegetable with given id is found</exception>
        public HttpResponseMessage Delete(int id)
        {
            var veggieToDelete = vegetables.FirstOrDefault(a => a.ID == id);
            if (veggieToDelete == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            vegetables.Remove(veggieToDelete);
            return Request?.CreateResponse(HttpStatusCode.OK);
        }
    }
}
