package org.acme.resources;

import org.acme.entities.Actor;
import org.acme.entities.Movies;

import javax.transaction.Transactional;
import javax.ws.rs.*;
import java.util.List;
import java.util.Set;

@Path("/api/movies")

public class MoviesResource {
    @GET
    @Path("/all")
    public List<Movies> allMovies() {
        return Movies.listAll();
    }
    //post add object without query params
//    @POST
//    @Transactional
//    @Path("/addMovie")
//    public void addMovie(@QueryParam("name")String name ,
//                         @QueryParam("production_cost")long production_cost )
//    {
//        Movies movies=new Movies();
//        movies.setName(name);
//        movies.setProduction_cost(production_cost);
//        movies.persist();
//    }
    @POST
    @Transactional
    @Path("/addMovie")
    public void addMovie(Movies movies){
        movies.persist();
    }
    @PUT
    @Transactional
    @Path("/modifyMovie/{id}")
    public void modifyMovie(@PathParam("id") int id,
                            @QueryParam("name")String name,
                            @QueryParam("production_cost")Long production_cost){

        Movies x=Movies.findById(id);
        if(x==null)
            throw new NotFoundException();
        if(name!=null)
            x.setName(name);
        if(production_cost!=null)
                x.setProduction_cost(production_cost);
        x.persist();

    }
    @GET
    @Path("/checkActors")
    public Set<Actor> getActorsPlaying(@QueryParam("id")int id)
    {
        Movies movies=Movies.findById(id);
        return movies.getActors();
    }
}
