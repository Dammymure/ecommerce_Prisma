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

type Callback<Args extends unknown[] = unknown[], Return = unknown> = (...args: Args) => Promise<Return>;

export function cache<T extends Callback>(
    cb: T,
    keyParts: string[],
    options: { revalidate?: number | false; tags?: string[] } = {}
) {
    const cachedCallback = reactCache(cb); // Cache the callback function using React's cache

    return nextCache(
        async (...args: Parameters<T>): Promise<ReturnType<T>> => {
            const _cacheKey = keyParts.join(":"); // For potential debugging or future use
            return (await cachedCallback(...args)) as ReturnType<T>; // Explicitly cast to ReturnType<T>
        },
        keyParts,
        options
    );
}


