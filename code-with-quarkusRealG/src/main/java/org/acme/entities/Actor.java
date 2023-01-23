package org.acme.entities;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import io.quarkus.runtime.annotations.RegisterForReflection;

import javax.persistence.*;
import javax.ws.rs.GET;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;


@Table(name="actori")
@Entity
public class Actor extends PanacheEntityBase implements Serializable {
    @Id
    @GeneratedValue(generator = "actori_id_seq")
    private int id;


    private String nume;


    @ManyToMany
    @JoinTable(
            name = "jointable",
            joinColumns = @JoinColumn(name = "actorid"),
            inverseJoinColumns = @JoinColumn(name = "idmovie"))
    Set<Movies> movies;

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public String getNume() {
        return nume;
    }
    public void setNume(String nume) {
        this.nume = nume;
    }
}
