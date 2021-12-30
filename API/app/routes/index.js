var api = require("../api"),
    path = require("path");

module.exports = function (app) {
    app.route("/v1/pictures").post(api.add).get(api.list);

    app.route("/v1/pictures/:pictureId")
        .delete(api.remove)
        .get(api.search)
        .put(api.update);

    app.get("/v1/groups", api.listGroups);
    app.get("/v1/pictures/group/:groupId", api.listByGroup);
};
