import Schemes from '../models/schemes.model.js';
import { sequelize } from '../configDb/configdb.js';

const searchbyparams = async (req) => {
    const filters = req.body;
    const result = await sequelize.query(
        `EXEC SP_SearchSchemes
            @OEM = :OEM,
            @SchemeName = :SchemeName,
            @PolicyType = :PolicyType,
            @AppliedOn = :AppliedOn,
            @State = :State,
            @FuelType = :FuelType,
            @RenewalType = :RenewalType,
            @VehicleType = :VehicleType,
            @MinAge = :MinAge,
            @MaxAge = :MaxAge,
            @SchemeValidFrom = :SchemeValidFrom,
            @SchemeValidTo = :SchemeValidTo,
            @PageNumber = :PageNumber,
            @PageSize = :PageSize`,
        {
            replacements: {
                OEM: filters.OEM || null,
                SchemeName: filters.SchemeName || null,
                PolicyType: filters.PolicyType || null,
                AppliedOn: filters.AppliedOn || null,
                State: filters.State || null,
                FuelType: filters.FuelType || null,
                RenewalType: filters.RenewalType || null,
                VehicleType: filters.VehicleType || null,
                MinAge: filters.MinAge || null,
                MaxAge: filters.MaxAge || null,
                SchemeValidFrom: filters.SchemeValidFrom || null,
                SchemeValidTo: filters.SchemeValidTo || null,
                PageNumber: filters.PageNumber || 1,
                PageSize: filters.PageSize || 10
            },
            type: sequelize.QueryTypes.SELECT
        }
    );

    return result;
};

export default searchbyparams;