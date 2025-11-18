import Schemes from '../models/schemes.model.js';
import { sequelize } from '../configDb/configdb.js';
const editSchemebyId = async (req, res) => {
    const { id } = req.params;
    const data = { ...req.body, SchemeId: id };
    const result = await sequelize.query(
        `EXEC SP_EditScheme
            @SchemeId = :SchemeId,
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

export default editSchemebyId;
