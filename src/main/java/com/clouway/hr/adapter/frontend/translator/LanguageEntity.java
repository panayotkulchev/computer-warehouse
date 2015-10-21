package com.clouway.hr.adapter.frontend.translator;

import com.vercer.engine.persist.annotation.Key;

import java.util.List;
import java.util.Set;

/**
 * Created by Panayot Kulchev on 15-10-19.
 * e-mail: panayotkulchev@gmail.com
 * happy codding ...
 */
public class LanguageEntity {

  @Key
  public String id;
  private Set<Long> translaorIds;

  public LanguageEntity(String id) {
    this.id = id;
  }

  public Set<Long> getTranslaorIds() {
    return translaorIds;
  }

  public void setTranslaorIds(Set<Long> translaorIds) {
    this.translaorIds = translaorIds;
  }
}
