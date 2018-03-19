export default class Model {
  /**
   * Creates a new model instance
   * @param {String} name - The model name
   * @param {Schema} schema - The model schema
   */
  constructor(name, schema) {
    /**
     * The model type
     * @type {String}
     */
    this.type = null;

    /**
     * The model name
     * @type {String}
     */
    this.name = name;

    /**
     * The model schema
     * @type {Schema}
     */
    this.schema = schema;
  }
}
