package org.acme.entities;


import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import io.vertx.codegen.annotations.DataObject;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="actorsabout")
public class ActorDetails extends PanacheEntityBase implements Serializable {
    @Id
    @GeneratedValue(generator = "actorsabout_id_seq")
    private int id;
    private String firstname;
    private String lastname;
    private String birthplace;

    @OneToOne
    @JoinColumn(name="idreferinta",referencedColumnName = "id")
    private Actor actor;

    public int getId() {
        return id;
    }

    public String getFirstname() {
        return firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public String getBirthplace() {
        return birthplace;
    }

    public Actor getActor() {
        return actor;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public void setBirthplace(String birthplace) {
        this.birthplace = birthplace;
    }
}
