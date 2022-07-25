
import React from "react";

export const fetchData = async (url, options) => {
    const res = await fetch(url, {
        headers : {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-API-KEY": "e5f2a82c71bb4748a1ae81060c449fa2",
        },
        ...options,
    })
    const data = await res.json()
    return data
}