import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import './style.css'

function ButtonComponent({componentRef}){

    const printDocument = () => {
        html2canvas(componentRef.current).then((canvas) => {
            console.log(canvas)
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "JPEG", 0, 0);
            pdf.save("download.pdf");
        });
    };

    return (
        <button className='downloadButton' onClick={printDocument}>Export As HTML</button>
    )
}
export default ButtonComponent;