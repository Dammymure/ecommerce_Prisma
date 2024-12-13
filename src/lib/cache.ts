// import { unstable_cache as nextCache } from "next/cache"
// import { cache as reactCache} from "react"

// type Callback = (...args: any[]) => Promise<any>

// export function cache<T extends Callback>(
//     cb: T, 
//     keyParts: string[],
//     options: { revalidate?: number | false; tags?: string[]} = {}
// ){
//     return nextCache(reactCache(cb), keyParts, options)
// }

import { unstable_cache as nextCache } from "next/cache";
import { cache as reactCache } from "react";

type Callback = (...args: any[]) => Promise<any>;

export function cache<T extends Callback>(
    cb: T,
    keyParts: string[],
    options: { revalidate?: number | false; tags?: string[] } = {}
) {
    const cachedCallback = reactCache(cb); // Cache the callback function using react's cache
    return nextCache(async (...args: Parameters<T>): Promise<ReturnType<T>> => {
        const cacheKey = keyParts.join(":");
        return cachedCallback(...args);
    }, keyParts, options);
}
