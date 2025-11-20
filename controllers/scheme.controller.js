import addScheme from '../services/create.services.js';
import editSchemebyId from '../services/edit.services.js';
import validate from '../services/validate.services.js';
import deletebySchemeId from '../services/delete.services.js';
import searchbyparams from '../services/search.services.js';
import { getAll, getById } from '../services/get.services.js';
class schemeController {
    static async CreateNewScheme(req, res) {
        try {
            const result = await addScheme(req);
            if (!result) {
                return res.status(404).json({ message: "Result not found" });
            }
            res.status(201).json({
                status: true,
                message: "Scheme created successfully",
                data: result
            });
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    static async GetAllSchemes(req, res) {
        try {
            const result = await getAll(req);
            if (!result) {
                return res.status(400).json({
                    status: true,
                    message: "All not schemes fetched successfully",
                    data: result
                });
            }
            return res.status(200).json({
                status: true,
                message: "All schemes fetched successfully",
                data: result
            });
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    static async GetSchemebyId(req, res) {
        try {
            const result = await getById(req);
            if (!result) {
                return res.status(404).json({ message: "Result not found" });
            }
            res.status(200).json({
                status: true,
                message: "Scheme fetched successfully",
                data: result
            });
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    static async SearchSchemebyParams(req, res) {
        try {
            const result = await searchbyparams(req);
            if (!result) {
                return res.status(404).json({ message: "Result not found" });
            }
            res.status(200).json({
                status: true,
                message: "Search results fetched successfully",
                data: result
            });
        }
        catch (err) {
            res.status(500).json({ error: err.message });

        }
    }
    static async EditSchemebyId(req, res) {
        try {
            const result = await editSchemebyId(req);
            if (!result) {
                return res.status(404).json({ message: "Result not found" });
            }
            res.status(200).json({
                status: true,
                message: "Scheme Edited successfully",
                data: result
            });
        }
        catch (err) {
            res.status(500).json({ error: err.message });

        }
    }
    static async DeleteSchemebyId(req, res) {
        try {
            const result = await deletebySchemeId(req);
            if (!result) {
                return res.status(404).json({ message: "Result not found" });
            }
            res.status(200).json({
                status: true,
                message: "Scheme Deleted successfully",
                data: result
            });
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    static async ValidateScheme(req, res) {
        try {

        }
        catch (err) {
            res.status(500).json({ error: err.message });

        }
    }
}

export default schemeController;