import React from "react";

export const ifBench = (val) => {
    let squat = val * 1.56
    let deadlift = squat * 1.1
    return [`Squat: ${Math.round(squat)}`, `Deadlift: ${Math.round(deadlift)}`]
}

export const ifSquat = (val) => {
    let bench = val / 1.56
    let deadlift = val * 1.1
    return [`Bench: ${Math.round(bench)}`, `Deadlift: ${Math.round(deadlift)}`]
}

export const ifDeadlift = (val) => {
    let squat = val / 1.1
    let bench = squat / 1.56
    return [`Bench: ${Math.round(bench)}`, `Squat: ${Math.round(squat)}`]
}