import React from 'react';

const PDFViewer = ({ pdfFile }) => {
  if (!pdfFile) return <p>No PDF file selected.</p>;

  return (
    <div style={{ width: '100%', height: '500px', border: '1px solid #ccc' }}>
      <iframe
        src={pdfFile}
        width="100%"
        height="100%"
        title="PDF Document"
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
};

export default PDFViewer;