import AlertService from './alert/AlertService';
import {IAlertService} from './alert/IAlertService';
import HomeService from './Home/HomeService';
import {IHomeService} from './Home/IHomeService';
import {IMasterService} from './Master/IMasterService';
import MasterService from './Master/MasterService';
import {ISearchService} from './Search/ISearchService';
import SearchService from './Search/SearchService';
import AsyncStorages from './storage/AsyncStorage';
import {IAsyncStorage} from './storage/IAsyncStorage';

export const masterService: IMasterService = new MasterService();
export const homeService: IHomeService = new HomeService();
export const localStorage: IAsyncStorage = new AsyncStorages();
export const alertService: IAlertService = new AlertService();
export const searchService: ISearchService = new SearchService();
