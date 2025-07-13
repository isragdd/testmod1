elements.sparkle = {
    color: "#ffff00",    // The default color of the element
    behavior: behaviors.POWDER,  // The built-in behavior it follows (e.g., powder, liquid)
    density: 1,          // Controls how heavy/fast it falls (if powder)
    category: "special", // Group/category in the element selector UI
    tempHigh: 3000,      // Temperature at which it changes into another element (optional)
    stateHigh: "steam",  // Element it turns into at tempHigh (optional)
    
    onPlace: function(pixel) {
        logMessage("Sparkle placed!");
    },
    onBreak: function(pixel) {
        logMessage("Sparkle broken!");
    }
};
