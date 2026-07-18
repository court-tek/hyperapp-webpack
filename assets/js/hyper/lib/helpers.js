// Helper functions belong to this file

export function findPercentage(part, whole) {
    return function() {
        return Math.ceil((part/whole) * 100);
    }
}

export function findPercentageOfNum(percentage, whole) {
    return function() {
        return Math.ceil((percentage / 100) * whole)
    }
}

export function makeBetweenFunc(x, y) {
    return function(num) {
        return num >= x && num <= y;
    }
}