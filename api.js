'use strict';

const Services = require('ataraxia-services');
const Things = require('./lib/things');

const limits = require('./lib/events/limits');
const time = require('./lib/utils/time');

module.exports = function(network) {
	const services = new Services(network);
	const things = new Things(services);

	const result = things.publicApi;
	Object.defineProperty(result, 'id', { value: network.id });
	Object.defineProperty(result, 'time', { value: time });
	Object.defineProperty(result, 'limits', { value: limits });
	return result;
}
