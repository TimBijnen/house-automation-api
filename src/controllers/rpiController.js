class RpiController {
    static setStatus(req, res) {
        return res.status(200).json({
            data: { pins: [] },
            message: "All the students",
        });
    }
    // Get a single student
    static getStatus(req, res) {
        return res.status(200).json({
            data: { pins: [] },
            message: "All the pins",
        });
    }

    static getSingleStatus(req, res) {
        const id = req.params.id;
        return res.status(200).json({
            data: { pins: [] },
            message: `Pin with id ${ id }`,
        });
    }
}
module.exports = RpiController;
