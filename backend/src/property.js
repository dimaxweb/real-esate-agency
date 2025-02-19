"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// property.ts
var db_1 = require("./db");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var PropertyService = /** @class */ (function () {
    function PropertyService() {
    }
    PropertyService.prototype.query = function (sql, params) {
        return (0, rxjs_1.from)(db_1.default.query(sql, params)).pipe((0, operators_1.map)(function (result) { return result.rows; }));
    };
    PropertyService.prototype.homeSliderData = function () {
        return this.query('SELECT * FROM properties WHERE type = $1', ['home_slider']);
    };
    PropertyService.prototype.propertyData = function (type) {
        return this.query('SELECT * FROM properties WHERE type = $1', ['sale']);
    };
    PropertyService.prototype.featuredPropertyData = function () {
        return this.query('SELECT * FROM properties WHERE is_featured = true');
    };
    PropertyService.prototype.latestForRentData = function () {
        return this.query('SELECT * FROM properties WHERE type = $1', ['rent']);
    };
    PropertyService.prototype.newOfferData = function () {
        return this.query('SELECT * FROM properties WHERE type = $1', ['new_offer']);
    };
    PropertyService.prototype.propertyInCityData = function (city) {
        return this.query('SELECT * FROM properties WHERE city = $1', [city]);
    };
    PropertyService.prototype.bannerData = function () {
        return this.query('SELECT * FROM properties WHERE type = $1', ['banner']);
    };
    PropertyService.prototype.propertyOfDayData = function () {
        return this.query('SELECT * FROM properties WHERE type = $1', ['property_of_day']);
    };
    PropertyService.prototype.propertyDetailsData = function (id) {
        return this.query('SELECT * FROM properties WHERE id = $1', [id]).pipe((0, operators_1.map)(function (properties) { return properties[0]; }));
    };
    PropertyService.prototype.filterPropertyData = function (filter) {
        var filterKeys = Object.keys(filter);
        var filterValues = Object.values(filter);
        var query = 'SELECT * FROM properties WHERE ';
        query += filterKeys.map(function (key, index) { return "".concat(key, " = $").concat(index + 1); }).join(' AND ');
        return this.query(query, filterValues);
    };
    PropertyService.prototype.getImage = function (id) {
        return this.propertyDetailsData(id);
    };
    PropertyService.prototype.getPropertyDetail = function (id) {
        return this.query('SELECT * FROM properties WHERE id = $1', [id]);
    };
    PropertyService.prototype.updateProperty = function (id, property) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.query('Update properties * FROM properties WHERE id = $1', [id])];
            });
        });
    };
    PropertyService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 6; }
        var totalPages = Math.ceil(totalItems / pageSize);
        var paginateRange = 3;
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        }
        else if (currentPage < paginateRange - 1) {
            startPage = 1;
            endPage = startPage + paginateRange - 1;
        }
        else {
            startPage = currentPage - 1;
            endPage = currentPage + 1;
        }
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        var pages = Array.from(Array(endPage + 1 - startPage).keys()).map(function (i) { return startPage + i; });
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages,
        };
    };
    return PropertyService;
}());
exports.default = new PropertyService;
