import { sequelize } from "../configDb/configdb.js";
import { DataTypes } from "sequelize";

const Schemes = sequelize.define('Scheme', {
    IntermediaryName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'IntermediaryName cannot be empty.' }
        }
    },
    OEM: { type: DataTypes.STRING, allowNull: false },
    SchemeName: { type: DataTypes.STRING, allowNull: false },

    PolicyType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: {
                args: [['Both', 'New', 'Renew']],
                msg: "PolicyType must be 'Both', 'New', or 'Renew'"
            }
        }
    },

    SchemeValidFrom: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            isDate: { msg: 'Invalid date format (YYYY-MM-DD).' }
        }
    },

    SchemeValidTo: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            isDate: { msg: 'Invalid date format (YYYY-MM-DD).' }
        }
    },

    AppliedOn: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: {
                args: [['State', 'City', 'Dealer', 'RTO', 'PAN India']],
                msg: "AppliedOn must be 'State', 'City', 'Dealer', 'RTO', 'PAN India'"
            }
        }
    },

    MinAge: { type: DataTypes.INTEGER, allowNull: false },
    MaxAge: { type: DataTypes.INTEGER, allowNull: false },

    States: { type: DataTypes.STRING, allowNull: false },
    InsuranceCompany: { type: DataTypes.STRING, allowNull: false },

    FuelType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: {
                args: [['ELECTRIC', 'PETROL', 'DIESEL']],
                msg: "Fuel Type must be ELECTRIC, PETROL or DIESEL"
            }
        }
    },

    RenewalType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: {
                args: [['Regular Renewal', 'Break-in Case Renewal', 'Renewal with Add-ons', 'Renewal with Insurer Change']],
                msg: "Invalid RenewalType"
            }
        }
    },

    ApplicableOn: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['State', 'City', 'Dealer', 'RTO', 'PAN India']],
            msg: "ApplicableOn must be in 'State', 'City', 'Dealer', 'RTO', 'PAN India' "
        }
    },
    Models: { type: DataTypes.STRING, allowNull: false },

    VehicleType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: {
                args: [['Both', 'Private', 'Commercial']],
                msg: "VehicleType must be 'Both', 'Private', 'Commercial'"
            }
        }
    },

    IsNCB: { type: DataTypes.BOOLEAN, allowNull: false },
    ODDiscount: { type: DataTypes.DECIMAL, allowNull: false },
    RNSDiscount: { type: DataTypes.DECIMAL, allowNull: false },
    CRPDiscount: { type: DataTypes.DECIMAL, allowNull: false },
    CC_KW_FROM: { type: DataTypes.INTEGER, allowNull: false },
    CC_KW_TO: { type: DataTypes.INTEGER, allowNull: false },
    Status: {
        type: DataTypes.STRING,
        defaultValue: 'Active',
        allowNull: false,
        isIn: {
            args: [['Active', 'Inactive']],
            msg: "Status must be in 'Active' and 'Inactive' "
        }
    },
    UploadDocument: { type: DataTypes.STRING }

}, {
    sequelize,
    timestamps: true,
    updatedAt: 'updateTimestamp'
});

(async () => {
    await Schemes.sync({ force: true })
})();
export default Schemes;
