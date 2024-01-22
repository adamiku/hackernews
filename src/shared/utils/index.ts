import { clsx, type ClassValue } from 'clsx';
import { compile } from 'path-to-regexp';
import { twMerge } from 'tailwind-merge';

export const pathToUrl = (path: string, params: object = {}) =>
    compile(path)(params);

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
