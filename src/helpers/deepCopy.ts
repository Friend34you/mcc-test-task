

export function deepCopy<T>(obj: T): T {

    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    let copy: any;
    if (Array.isArray(obj)) {
        copy = [];
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepCopy(obj[i]);
        }
    } else {
        copy = {};
        for (let key in obj) {
            if (Object.hasOwn(obj, key)) {
                copy[key] = deepCopy(obj[key]);
            }
        }
    }

    return copy;
}

