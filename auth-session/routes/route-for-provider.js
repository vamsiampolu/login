'use strict';
import reduce from 'lodash.reduce';
const routeForProvider = (router, routeInfo) => ({
    (_router, info, provider) => ({
        const {path, type, middleware} = info;
	_router[type](path, middleware[0]);
	return _router;
    });

    reduce(routeInfo, onEachProviderRoute, router);
    return router;
});

export routeForProvider as default;
