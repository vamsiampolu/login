'use strict';
import getOnLocalProvider from './local-provider-route';

const providerRoute = (middleware) => ({
    const onLocalProvider = getOnLocalProvider(middleware);

    return (result, name) => ({
	if(name === 'local') {
	   result = onLocalProvider(result, name);
	} else {
	    result[name] = {
		init: {
		   type: 'get',
		   path: '/' + name,
		   middleware: [
			middleware.scoped[name],
		   ],
		},
		callback: {
		   type: 'get',
		   path: '/' + name + '/callback',
		   middleware: [
		       middleware.data[name],
		   ],
		},
	   };
	}
	return result;
   });
});

export providerRoute as 'default';
