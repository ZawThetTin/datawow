import { createApi } from '@reduxjs/toolkit/query/react';

import { customBaseQuery } from './customBaseQuery';
import * as tags from './tags';

export const api = createApi({
	baseQuery: customBaseQuery,
	tagTypes: Object.values(tags),
	endpoints: () => ({})
});

export const resetApiState = api.util.resetApiState;
