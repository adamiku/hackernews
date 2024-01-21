import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        // process `*.tsx` files with `ts-jest`
    },
    setupFilesAfterEnv: ['<rootDir>/testSetupFile.ts'],
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1',
    },
};

export default jestConfig;
