export function capitalise(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function uncapitalise(word) {
    return word.charAt(0).toLowerCase() + word.slice(1);
}

export function unslugify(slug) {
    const split = slug.split('-');
    let result = '';
    split.forEach((token, index) => {
        if (index === split.length - 1) {
            result += capitalise(token);
        }
        else {
            result += `${capitalise(token)} `;
        }
    });

    return result;
}
