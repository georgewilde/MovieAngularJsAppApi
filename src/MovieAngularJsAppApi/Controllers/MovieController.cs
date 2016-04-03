using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using MovieAngularJsAppApi.Models;


namespace MovieAngularJsAppApi.Controllers
{
    [Route("api/[controller]")]
    public class MovieController : Controller



    {
        // GET: api/movies
        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            return new List<Movie> {
                new Movie {Id=1, Title="Star Wars", Director="Lucas"},
                new Movie {Id=2, Title="King Kong", Director="Jackson"},
                new Movie {Id=3, Title="Memento", Director="Nolan"}
            };
        }

        // GET api/movies/5
        [HttpGet("{id}")]
        public object Get(int id)
        {
            return new Movie {Id = 1, Title = "Star Wars", Director = "Lucas"};
        }

        // POST api/movies
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/movies/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/movies/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
