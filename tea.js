function calculateTeaPrice(pricePerGram, weight) {
    if (weight < 0) return 0;
    return pricePerGram * weight;
}

module.exports = calculateTeaPrice;
