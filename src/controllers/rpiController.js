class RpiController {
    static getStatus(req, res) {
        return res.status(200).json({
            data: req.app.locals.rpi,
            message: "All the pins",
        });
    }
    static setStatus(req, res) {
        const { body } = req;
        const rpi = req.app.locals.rpi;
        body.isActive ? rpi.activate() : rpi.deactivate();
        return res.status(200).json({
            data: rpi,
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
        const { id } = req.params;
        const { body } = req;
        const rpi = req.app.locals.rpi;
        console.log(body.isActive, id)
        const isActive = body.isActive ? rpi.activate(id) : rpi.deactivate(id);
        return res.status(200).json({
            data: { pins: rpi.pins },
            message: "Success",
        });
    }
}
module.exports = RpiController;
