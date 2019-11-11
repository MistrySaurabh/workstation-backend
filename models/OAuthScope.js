var schema = new Schema({
  scope:  String,
  is_default: Boolean
},{
    collection:'OAuthScope'
});
schema.plugin(autoIncrement.plugin,'OAuthScope');
module.exports = schema;
