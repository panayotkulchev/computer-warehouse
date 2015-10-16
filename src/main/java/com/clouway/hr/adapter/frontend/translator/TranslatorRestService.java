package com.clouway.hr.adapter.frontend.translator;

import com.google.inject.Inject;
import com.google.sitebricks.At;
import com.google.sitebricks.client.transport.Json;
import com.google.sitebricks.headless.Reply;
import com.google.sitebricks.headless.Request;
import com.google.sitebricks.headless.Service;
import com.google.sitebricks.http.Post;

/**
 * Created by Panayot Kulchev on 15-10-14.
 * e-mail: panayotkulchev@gmail.com
 * happy codding ...
 */

@At("/r/nomenclature/translators")
@Service
public class TranslatorRestService {


  private TranslatorRepository repository;

  @Inject
  public TranslatorRestService(TranslatorRepository repository) {
    this.repository = repository;
  }


  @Post
  public Reply<?> add(Request request) {

    final TranslatorDto dto = request.read(TranslatorDto.class).as(Json.class);
    final TranslatorEntity entity = dtoToEntity(dto);

    repository.add(entity);

    return Reply.saying().ok();
  }


  private TranslatorEntity dtoToEntity(TranslatorDto dto) {
    return new TranslatorEntity(dto.name, dto.currentAddress, dto.permanentAddress, dto.phones,
            dto.languages, dto.educations, dto.email, dto.skype, dto.eid, dto.document, dto.iban);
  }
}
