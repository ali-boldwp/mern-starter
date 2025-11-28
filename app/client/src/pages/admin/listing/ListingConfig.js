import Listing from "./Listing"

const ListingConfig = {
    settings: {
        layout: {
            config: {

            }
        }
    },
    auth: [ 'admin' ],
    routes: [
        {
            path: '/listing',
            element: <Listing />
        }
    ]
};

export default ListingConfig;