using Microsoft.Data.Entity;
using MovieAngularJsAppApi.Models;

namespace MovieAngularJSApp.Models
{
    public class MoviesAppContext : DbContext
    {
        public DbSet<Movie> Movies { get; set; }
    }
}