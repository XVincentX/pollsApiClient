import angular from "angular";
import "restangular"


class pollsService
{
    constructor(Restangular)
    {
        this.restangular = Restangular;
    }
};

var app = angular.module("pollsClient");

export var PollsService = app.service("PollsService", ["Restangular", pollsService]);