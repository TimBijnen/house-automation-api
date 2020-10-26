class RpiController {
    static getStatus(req, res) {
        return res.status(200).json({
            data: { pins: [] },
            message: "All the pins",
        });
    }
    static setStatus(req, res) {
        return res.status(200).json({
            data: { pins: [] },
            message: "set status of multiple pins",
        });
    }


    static getSingleStatus(req, res) {
        const id = req.params.id;
        return res.status(200).json({
            data: { pins: [] },
            message: `Pin with id ${ id }`,
        });
    }
    static setSingleStatus(req, res) {
        return res.status(200).json({
            data: { pins: [] },
            message: "set status of multiple pins",
        });
    }
}
module.exports = RpiController;
