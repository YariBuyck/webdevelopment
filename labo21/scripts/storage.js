const storeSliderValues = (sliders) => {
    localStorage.setItem('redValue', sliders[0].value);
    localStorage.setItem('greenValue', sliders[1].value);
    localStorage.setItem('blueValue', sliders[2].value);
};

const restoreSliderValues = (sliders) => {
    const redValue = localStorage.getItem('redValue') || '128';
    const greenValue = localStorage.getItem('greenValue') || '255';
    const blueValue = localStorage.getItem('blueValue') || '128';
    sliders[0].value = parseInt(redValue);
    sliders[1].value = parseInt(greenValue);
    sliders[2].value = parseInt(blueValue);
};

const storeSwatches = (swatchBox) => {
    const swatches = [];
    swatchBox.querySelectorAll('.swatch-item').forEach(box => {
        swatches.push({
            r: box.dataset.r,
            g: box.dataset.g,
            b: box.dataset.b
        });
    });
    localStorage.setItem('swatches', JSON.stringify(swatches));
};

const restoreSwatches = (sliders, swatchBox, outputLabels, colorBox) => {
    const swatches = JSON.parse(localStorage.getItem('swatches') || '[]');
    swatches.forEach(swatch => {
        addToSwatch([swatch.r, swatch.g, swatch.b], swatchBox, outputLabels, colorBox, sliders, true);
    });
};