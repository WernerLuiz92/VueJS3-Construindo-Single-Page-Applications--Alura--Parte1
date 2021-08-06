//Não implementei isto na aplicação pois o VueResource não é compatível com VueJs 3
export default class PictureService {

    constructor(resource) {

        this._resource = resource('v1/pictures{/id}');

    }

    list () {

        return this._resource
            .query()
            .then(res => res.json());
    }

    create (picture) {

        return this._resource
            .save(picture)

    }

    delete (id) {

        return this._resource.delete( { id } )
    }

}