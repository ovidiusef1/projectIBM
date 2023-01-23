package org.acme.resources;



import io.quarkus.hibernate.orm.panache.PanacheQuery;
import io.quarkus.panache.common.Sort;
import io.quarkus.vertx.http.runtime.devmode.Json;
import org.acme.entities.Actor;
import org.acme.entities.ActorDetails;
import org.hibernate.Session;

import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

@Path("/api/actori")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ActorResource {
    @GET

    public List<Actor> getAllActors()
    {
        return Actor.listAll();
    }
    @GET
    @Path("/id/")
    public Actor getActorId(@QueryParam("id") int id)
    {

        return Actor.findById(id);
    }
    private int firstUppercaseName(String nume)
    {
        for(int i=nume.length()-1;i>0;i--)
        {
            char literaMare=nume.charAt(i);
            if(literaMare>=65 && literaMare<=90)
            {
                return i;
            }
        }
        return -1;
    }
    @POST
    @Transactional
    @Path("/adaugareActor/{nume}")
    public void addActor(@PathParam("nume") String nume){
        StringBuilder rightName=new StringBuilder(nume);
        try {
            rightName.insert(firstUppercaseName(nume), " ");
        }catch(IndexOutOfBoundsException e){
            throw new WebApplicationException(422);
        }
        System.out.println(rightName);
        Actor actor=new Actor();
        actor.setNume(rightName.toString());
        actor.persist();

    }
    @GET
    @Path("/{nume}")
    public Actor findActorByName(@QueryParam("name") String nume)
    {
        Actor temp=Actor.find("nume",nume).firstResult();
        if(temp==null)
            throw new WebApplicationException(404);
        return temp;

    }
    @GET
    @Path("/detaliiActor")
    public ActorDetails getActorDetails(@QueryParam("id")int id)
    {
        return ActorDetails.findById(id);
    }
    @POST
    @Path("/adaugareDetaliiActor")
    @Transactional
    public void addActorDetails(ActorDetails actorDetails)
    {
        if(!doesItHaveDetails(actorDetails.getActor().getId()))
        {

            actorDetails.persist();
        }
        else
        {
            throw new IllegalArgumentException("The value is already in the list.");
        }
    }
    private boolean doesItHaveDetails(int id)
    {
        PanacheQuery<ActorDetails> lista= ActorDetails.find("idreferinta",id);
        return lista.count() != 0;
    }
}
