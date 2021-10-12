document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("#canvas");

    lineDesigner = new CanvasLineDesigner(canvas);
    lineDesigner.setButtonDrawLine("#CLD-DrawLine");
    lineDesigner.setButtonSelectLine("#CLD-SelectLine");
    lineDesigner.setButtonRemoveLastLine("#CLD-RemoveLastLine");
    lineDesigner.setButtonLineSize("#CLD-LineHeight");
    lineDesigner.setButtonLineColor("#CLD-ColorLine");
    lineDesigner.setLineSize(1);
    lineDesigner.setLineColor("#ff0000");
});