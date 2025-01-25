const Joi = require('joi');
const { refreshMaterializedView } = require('node-pg-migrate/dist/operations/materializedViews/refreshMaterializedView');
const PostAuthenticationPayloadSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
});

const PutAuthenticationPayloadSchema = Joi.object({
    refreshToken: Joi.string().required(),
});
const DeleteAuthenticationPayloadSchema = Joi.object({
    refreshToken: Joi.string().required(),
  });
   
  module.exports = {
    PostAuthenticationPayloadSchema,
    PutAuthenticationPayloadSchema,
    DeleteAuthenticationPayloadSchema,
  };
  

