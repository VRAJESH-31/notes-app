export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export const getInitial = (name) => {
    if (typeof name !== "string" || name.trim().length === 0) return "U"; 

    const words = name.trim().split(" ");
    let initials = "";

    for (let i = 0; i < Math.min(words.length, 2); i++) {
        if (words[i].length > 0) {
            initials += words[i][0];
        }
    }

    return initials.toUpperCase() || "U"; 
};
