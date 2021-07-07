function registerResizeListener() {

    console.log("Registering resize listener.");

    // Call render whenever window dimensions are changed
    window.onresize = render;

    // Also call render once now.
    render();
}

/* This function is invoked onon every window resize. It will query the effective backdrop size and ensure all additional sprites are displayed on their respective relative position and scaling. */
function render() {

    console.log("Re-rendering the game UI.");

    // find out the total dimensions of browser content
    let totalSpaceEffectiveSizeX = $(window).width();
    let totalSpaceEffectiveSizeY = $(window).height();
    let totalSpaceRatio = totalSpaceEffectiveSizeX / parseFloat(totalSpaceEffectiveSizeY);
    console.log("Browser space X/Y dimensions: " + totalSpaceEffectiveSizeX + " / " + totalSpaceEffectiveSizeY + ", ratio = " + totalSpaceRatio);

    // find out the original backdrop ratio
    const backdrop = document.querySelector("#board");
    const realWidth = backdrop.naturalWidth;
    const realHeight = backdrop.naturalHeight;
    const backdropRatio = realWidth / parseFloat(realHeight);
    console.log("Backdrop ratio = " + realWidth + ":" + realHeight + " = " + backdropRatio);

    // Compute offset (left margin) and zoom to be applied for all overlay elements.
    let zoom;
    let offset;
    if (totalSpaceRatio > backdropRatio) {
        // zoom is determined by available height
        zoom = totalSpaceEffectiveSizeY / parseFloat(realHeight);

        // there is a left margin
        offset = (totalSpaceEffectiveSizeX - (realWidth * zoom)) / 2;
    } else {
        // zoom is determined by available width
        zoom = totalSpaceEffectiveSizeX / parseFloat(realWidth);

        // there is no left margin
        offset = 0;
    }
    console.log("Zoom: "+zoom + ", Offset: "+offset);

    // Update position and size of worldwide, for testing:
    const worldwideOriginalWidth = document.querySelector("#worldwide").naturalWidth;
    $('#worldwide').css("left",offset);
    $('#worldwide').css("top",0);
    $('#worldwide').css("width",worldwideOriginalWidth*zoom*1.3); // UNSURE why the 1.3 is needed. => Solved. Sprite size is inconsistent.
}