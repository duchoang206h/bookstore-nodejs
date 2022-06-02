const BaseService = require('../interfaces/BaseRepo');
const db = require('../models')
 class CategoryService extends BaseService{
    constructor(model) {
        super(model);
    }
}
module.exports = new CategoryService(db.Category)