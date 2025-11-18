import { sequelize } from '../configDb/configdb.js';
import Schemes from '../models/schemes.model.js';
const addScheme = async (req) => {
    const data = req.body;
    const result = await sequelize.query(
        `EXEC SP_CreateScheme
            @IntermediaryName = :IntermediaryName,
            @OEM = :OEM,
            @SchemeName = :SchemeName,
            @PolicyType = :PolicyType,
            @SchemeValidFrom = :SchemeValidFrom,
            @SchemeValidTo = :SchemeValidTo,
            @AppliedOn = :AppliedOn,
            @MinAge = :MinAge,
            @MaxAge = :MaxAge,
            @States = :States,
            @InsuranceCompany = :InsuranceCompany,
            @FuelType = :FuelType,
            @RenewalType = :RenewalType,
            @ApplicableOn = :ApplicableOn,
            @Models = :Models,
            @VehicleType = :VehicleType,
            @IsNCB = :IsNCB,
            @ODDiscount = :ODDiscount,
            @RNSDiscount = :RNSDiscount,
            @CRPDiscount = :CRPDiscount,
            @CC_KW_FROM = :CC_KW_FROM,
            @CC_KW_TO = :CC_KW_TO,
            @UploadDocument = :UploadDocument`,
        {
            replacements: data,
            type: sequelize.QueryTypes.SELECT
        }
    );

    return result;
};

export default addScheme;
