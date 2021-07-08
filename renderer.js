function enableRerenderOnResize() {
    // Call render whenever window dimensions are changed
    window.onresize = render;
}

/**
 * Analyzes the effectively available browser canvas size and determines the best fit for the provided backdrop image.
 * This means two values are determined: The zoom level of the backdrop image and the resulting left margin, if the
 * backdrop image is to be placed centered, with maximum size that does not lead to cropping.
 * @return An object containing two values: "zoom" and "margin". "zoom" tells the linear multiplication factor to be
 *     applied to a future overlay sprite, so that it is to scale with the currently rendered backdrop. "margin" tells
 *     the pixel offset left of the backdrop sprite that is used to convert absolute browser canvas positions into
 *     absolute backdrop canvas coordinates.
 */
function computeScaling() {
    // find out the total dimensions of browser content
    let totalSpaceEffectiveSizeX = document.getElementById("gradient").clientWidth;
    let totalSpaceEffectiveSizeY = document.getElementById("gradient").clientHeight;
    let totalSpaceRatio =
        totalSpaceEffectiveSizeX / parseFloat(totalSpaceEffectiveSizeY);
    //console.log("Browser space X/Y dimensions: " + totalSpaceEffectiveSizeX + " / " + totalSpaceEffectiveSizeY + ",
    // ratio = " + totalSpaceRatio);

    // find out the original backdrop ratio
    const backdrop = document.querySelector("#board");
    const realWidth = backdrop.naturalWidth;
    const realHeight = backdrop.naturalHeight;
    const backdropRatio = realWidth / parseFloat(realHeight);
    //console.log("Backdrop ratio = " + realWidth + ":" + realHeight + " = " + backdropRatio);

    // Compute offset (left margin) and zoom to be applied for all overlay elements.
    let zoom;
    let margin;
    if (totalSpaceRatio > backdropRatio) {
        // the screen is wide enough to use only Y-sizes to determine zoom (no cropping will occur)
        // Zoom is therefore chosen to make the backdrop fit the available height.
        zoom = totalSpaceEffectiveSizeY / parseFloat(realHeight);

        // there is a left margin, it is half of the space that remains (not covered by backdrop)
        margin = (totalSpaceEffectiveSizeX - realWidth * zoom) / 2;
    } else {
        // the screen is not wide enough to only use the Y-sizes as zoom (cropping would occur)
        // Zoom is therefore chosen to make the backdrop fit the available width.
        zoom = totalSpaceEffectiveSizeX / parseFloat(realWidth);

        // there is no left margin
        margin = 0;
    }
    console.log("Zoom: " + zoom + ", Margin: " + margin);
    return {zoom: zoom, margin: margin};
}

/**
 * Places a dom element (regardless of its previous positioning) as overlay on a desired target position.
 * @param domElementId as the name of the html element to be repositioned. (All UI elements are loaded from the start
 *     in the DOM tree, although not-needed elements are by default rendered outside the visible canvas and may
 *     therefore be invisible.)
 * @param posId as the target position provided in the "absolutePosition" properties file.
 * @param scaling as the margin and zoom information to be used when placing the overlay.
 */
function relativePlaceOverlay(domElementId, posId, scaling) {

    const elementOriginalWidth =
        document.querySelector("#"+domElementId).naturalWidth;
    const element = document.getElementById(domElementId);

    element.style.left = (scaling.margin + absPos[posId].x * scaling.zoom)+'px';
    element.style.top = (absPos[posId].y * scaling.zoom)+'px';
    element.style.width = (elementOriginalWidth * scaling.zoom)+'px';
}

/* This function is invoked on every window resize. It will query the effective backdrop size and ensure all additional sprites are displayed on their respective relative position and scaling. */
function render() {
    console.log("Re-rendering the game UI.");

    // Determine zoom and margin for dynamic positioning of overlay elements
    const scaling = computeScaling();

    // Demo:
    // Place worldwide sprite on 1a:
    relativePlaceOverlay('company-worldwide', 'tile_1a', scaling);

    // place sackson sprite on 5d:
    relativePlaceOverlay('company-sackson', 'tile_5d', scaling);
}
