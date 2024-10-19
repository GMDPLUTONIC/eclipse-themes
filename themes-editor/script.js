let theme = {
    blur: { blurEnabled: true, blurRadius: 1.0, blurSpeed: 0.3 },
    colors: {
        backgroundColor: "#FFFFFF", borderColor: "#FFFFFF", buttonActivatedColor: "#FFFFFF",
        buttonForegroundColor: "#FFFFFF", buttonHoveredColor: "#FFFFFF", checkboxBackgroundColor: "#FFFFFF",
        disabledColor: "#FFFFFF", titleBackgroundColor: "#FFFFFF", titleForegroundColor: "#FFFFFF"
    },
    details: { author: "", description: "", layout: "0", name: "Example-Theme", renderer: 0, schema: 1, style: 2 },
    other: { borderSize: 0, font: "Rubik", fontSize: 16, framePadding: 5, windowRounding: 0 }
};

function updatePreview() {
    // Update theme values from form inputs
    theme.blur.blurEnabled = document.getElementById('blurEnabled').checked;
    theme.blur.blurRadius = parseFloat(document.getElementById('blurRadius').value);
    theme.blur.blurSpeed = parseFloat(document.getElementById('blurSpeed').value);

    theme.colors.backgroundColor = document.getElementById('backgroundColor').value;
    theme.colors.borderColor = document.getElementById('borderColor').value;
    theme.colors.buttonActivatedColor = document.getElementById('buttonActivatedColor').value;
    theme.colors.buttonForegroundColor = document.getElementById('buttonForegroundColor').value;
    theme.colors.buttonHoveredColor = document.getElementById('buttonHoveredColor').value;
    theme.colors.checkboxBackgroundColor = document.getElementById('checkboxBackgroundColor').value;
    theme.colors.disabledColor = document.getElementById('disabledColor').value;
    theme.colors.titleBackgroundColor = document.getElementById('titleBackgroundColor').value;
    theme.colors.titleForegroundColor = document.getElementById('titleForegroundColor').value;

    theme.details.author = document.getElementById('author').value;
    theme.details.description = document.getElementById('description').value;
    theme.details.layout = document.getElementById('layout').value;
    theme.details.name = document.getElementById('name').value;
    theme.details.renderer = parseInt(document.getElementById('renderer').value);
    theme.details.schema = parseInt(document.getElementById('schema').value);
    theme.details.style = parseInt(document.getElementById('style').value);

    theme.other.borderSize = parseFloat(document.getElementById('borderSize').value);
    theme.other.font = document.getElementById('font').value;
    theme.other.fontSize = parseInt(document.getElementById('fontSize').value);
    theme.other.framePadding = parseFloat(document.getElementById('framePadding').value);
    theme.other.windowRounding = parseFloat(document.getElementById('windowRounding').value);

    // Update the preview button
    document.getElementById('previewButton').style.backgroundColor = theme.colors.backgroundColor;
    document.getElementById('previewButton').style.color = theme.colors.buttonForegroundColor;
    document.getElementById('previewButton').style.borderRadius = theme.other.windowRounding + 'px';
    document.getElementById('previewButton').style.fontSize = theme.other.fontSize + 'px';
}

function exportTheme() {
    const themeJson = JSON.stringify(theme, null, 4);
    const blob = new Blob([themeJson], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "theme.json";
    link.click();
}

function loadTheme(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        theme = JSON.parse(e.target.result);
        // Populate form inputs with the loaded theme
        document.getElementById('blurEnabled').checked = theme.blur.blurEnabled;
        document.getElementById('blurRadius').value = theme.blur.blurRadius;
        document.getElementById('blurSpeed').value = theme.blur.blurSpeed;
        document.getElementById('backgroundColor').value = theme.colors.backgroundColor;
        document.getElementById('borderColor').value = theme.colors.borderColor;
        document.getElementById('buttonActivatedColor').value = theme.colors.buttonActivatedColor;
        document.getElementById('buttonForegroundColor').value = theme.colors.buttonForegroundColor;
        document.getElementById('buttonHoveredColor').value = theme.colors.buttonHoveredColor;
        document.getElementById('checkboxBackgroundColor').value = theme.colors.checkboxBackgroundColor;
        document.getElementById('disabledColor').value = theme.colors.disabledColor;
        document.getElementById('titleBackgroundColor').value = theme.colors.titleBackgroundColor;
        document.getElementById('titleForegroundColor').value = theme.colors.titleForegroundColor;
        document.getElementById('author').value = theme.details.author;
        document.getElement
