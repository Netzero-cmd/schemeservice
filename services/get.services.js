import Schemes from '../models/schemes.model.js';
import { sequelize } from '../configDb/configdb.js';
const getAll = async (req, res) => {
    const page = req.query.page || 1;
    const size = req.query.size || 10;
    const result = await sequelize.query(
        `EXEC SP_GetAllSchemes 
            @PageNumber = :PageNumber,
            @PageSize = :PageSize`,
        {
            replacements: {
                PageNumber: page,
                PageSize: size
            },
            type: sequelize.QueryTypes.SELECT
        }
    );
    console.log("result in get service", result)
    return result;
}
const getById = async (req, res) => {
    const { id } = req.params;
    const result = await sequelize.query(
        `EXEC SP_GetSchemeById @SchemeId = :id`,
        {
            replacements: { id },
            type: sequelize.QueryTypes.SELECT
        }
    );
    return result;
}

export { getAll, getById };