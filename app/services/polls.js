import angular from "angular";
import "restangular"


export class pollsService
{
    constructor(Restangular)
    {
        this.restangular = Restangular;
    }
};
