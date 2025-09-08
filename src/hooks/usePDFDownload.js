import html2pdf from 'html2pdf.js';

function usePDFDownload() {
    const downloadPDF = (element, fileName = 'CV') => {
        const options = {
            margin: 0.5,
            filename: `${fileName}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2,
                useCORS: true,
                letterRendering: true,
            },
            jsPDF: {
                unit: 'in',
                format: 'a4',
                orientation: 'portrait',
            }
        };
        return html2pdf()
        .from(element)
        .set(options)
        .save();
    };

    return { downloadPDF };
}

export default usePDFDownload;