import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const buildProvidersTree = (componentsWithProps: any[]) => {
    const initialComponent = ({ children }: PropsWithChildren) => (
        <>{children}</>
    );
    return componentsWithProps.reduce(
        (AccumalatedComponents, [Provider, props = {}]) => {
            return ({ children }: PropsWithChildren) => {
                return (
                    <AccumalatedComponents>
                        <Provider {...props}>{children}</Provider>
                    </AccumalatedComponents>
                );
            };
        },
        initialComponent
    );
};

export const ProvidersTree = buildProvidersTree([
    [QueryClientProvider, { client: queryClient }],
]);
