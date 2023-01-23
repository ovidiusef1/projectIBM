package org.acme.entities;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="movies")
public class Movies extends PanacheEntityBase implements Serializable {

    @Id
    @GeneratedValue(generator="movies_id_seq")
    private int id;

    private String name;
    private long  production_cost;

    @ManyToMany(mappedBy = "movies")
    Set<Actor> actors;

    public Set<Actor> getActors() {
        return actors;
    }

    public int getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setProduction_cost(long production_cost) {
        this.production_cost = production_cost;
    }



    public String getName() {
        return name;
    }


    public long getProduction_cost() {
        return production_cost;
    }

}
