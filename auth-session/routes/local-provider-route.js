'use strict';
const localProviderRoute = (middleware) => ({	
    return (result, name) => ({
        if(name === 'local') {
	    result.local = {
		'local-login': {
		   type: 'post',
		   path: '/local/login',
		   middleware: [
		       middleware.data['local-login'],
		   ],
	         },
		 'local-register': {
		     type: 'post',
		     path: '/local/register',
		     middleware: [
			middleware.data['local-login'],
		     ],
		},
	     };
	}
	return result;
    });
});

export localProviderRoute as 'default';
