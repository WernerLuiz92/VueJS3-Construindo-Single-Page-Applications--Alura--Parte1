var db = require("../../config/database");

var api = {};

api.add = function (req, res) {
    db.insert(req.body, function (err, newDoc) {
        if (err) return console.log(err);
        console.log("Successfully added: " + newDoc._id);
        res.json(newDoc._id);
    });
};

api.search = function (req, res) {
    db.findOne({ _id: req.params.fotoId }, function (err, doc) {
        if (err) return console.log(err);
        if (doc) return res.json(doc);
        res.status(404).end();
    });
};

api.update = function (req, res) {
    db.update(
        { _id: req.params.fotoId },
        req.body,
        function (err, numReplaced) {
            if (err) return console.log(err);
            if (numReplaced) res.status(200).end();
            res.status(500).end();
            console.log("Updated successfully: " + req.body._id);
            res.status(200).end();
        }
    );
};

api.list = function (req, res) {
    db.find({})
        .sort({ title: 1 })
        .exec(function (err, doc) {
            if (err) return console.log(err);
            res.json(doc);
        });
};

api.listByGroup = function (req, res) {
    var groupId = parseInt(req.params.groupId);
    db.find({ group: groupId }, function (err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

api.remove = function (req, res) {
    db.remove({ _id: req.params.pictureId }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log("successfully removed");
        if (numRemoved) res.status(200).end();
        res.status(500).end();
    });
};

api.listGroups = function (req, res) {
    res.json([
        {
            _id: 1,
            nome: "sport",
        },
        {
            _id: 2,
            nome: "places",
        },
        {
            _id: 3,
            nome: "animals",
        },
    ]);
};

module.exports = api;
