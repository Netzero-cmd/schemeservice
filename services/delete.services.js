
import { sequelize } from '../configDb/configdb.js';

const deletebySchemeId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await sequelize.query(
            `EXEC Sp_deletebySchemebyId 
                @SchemeId = :id`,
            {
                replacements: { id },
                type: sequelize.QueryTypes.SELECT
            }
        );
        const response = result[0];
        res.status(200).json({
            status: response.Status,
            message: response.Message
        });
    } catch (err) {
        res.status(500).json({
            status: "ERROR",
            message: err.message
        });
    }
};

export default deletebySchemeId;


