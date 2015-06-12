import {ComponentAnnotation as Component, ViewAnnotation as View,ParentAnnotation as Parent, Observable,EventEmitter, bootstrap, NgIf , NgFor} from 'angular2/angular2';
import {RouterOutlet, RouterLink, Router, routerInjectables, RouteConfig} from 'angular2/router';
import {webServiceEndpoint} from 'constants'
import {PersonService} from 'service/personService'

import {PaginationTable , PaginationTableDefinition ,  PaginationTableColumnElement , PaginationTableDataProvider , PaginationTablePropertySort , PaginationTableColumn , PaginationTableProperty} from './paginationTable'
import {Injectable } from 'angular2/angular2';

@Component({
    selector: 'app'
})
@View({
    templateUrl: 'app/app.html',
    directives: [NgIf , NgFor ,  PaginationTable , PaginationTableColumn , PaginationTableProperty]
})
export class App {

    personProvider : PersonProvider;

    constructor ( ) {
        this.personProvider = new PersonProvider();

    }
}

export class PersonProvider  {
    personService : PersonService;

    constructor () {
        this.personService = new PersonService();
    }

    fetchPage(pageNumber : number, size : number , sort : Array<PaginationTablePropertySort>) {
        return this.personService.fetchAllPersons(pageNumber, size, sort);
    }
}