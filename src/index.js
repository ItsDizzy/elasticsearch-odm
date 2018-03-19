import Model from './Model';

class ElasticSearchODM {
  constructor() {
    this.models = {};
    this.options = {};
  }

  /**
   * Gets a option value
   * @param {String} key - Option key
   */
  get(key) {
    return this.options[key];
  }

  /**
   * Sets a option value
   * @param {String} key - Option key
   * @param {String|Boolean} - value Option value
   * @returns {ElasticSearchODM}
   */
  set(key, value) {
    this.options[key] = value;
    return this;
  }

  /**
   * Defines a model
   * @param {String|Function} name - The model name or class extending Model
   * @param {Schema} schema - The model schema
   * @returns {Model}
   */
  model(name, schema) {
    const model = new Model(name, schema);
    this.models[name] = model;

    return model;
  }
}

// eslint-disable-next-line
const odm = module.exports = exports = new ElasticSearchODM();
