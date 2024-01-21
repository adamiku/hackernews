import { VITE_API_URL, VITE_API_VERSION } from '@/environment';

export const apiRoutes = {
    topStories: '/topstories',
    topStory: '/item/:id',
};

export const BASE_URL = `${VITE_API_URL}/${VITE_API_VERSION}`;

export const createAPIUrl = (path: string) => {
    return `${BASE_URL}/${path}.json?print=pretty`;
};
