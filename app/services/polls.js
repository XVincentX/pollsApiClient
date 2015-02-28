import angular from "angular";
import "restangular"


class pollsService
{
    constructor(Restangular)
    {
        this.restangular = Restangular;
    }
};


export {pollsService}