import React from 'react';

const Recipe = () => (
    <div>Recipe Module</div>
);

export default {
    routeProps: {
        path: '/recipe',
        component: Recipe,
    },
    name: 'Recipe',
};
