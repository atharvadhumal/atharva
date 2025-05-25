import { useState } from 'react';
import { Download, FileText } from 'lucide-react';

const ResumeViewer = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Your PDF file path - update this to match your actual PDF location
  const pdfPath = "/atharva-frontend-dev.pdf";

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      // Create a temporary link element and trigger download
      const link = document.createElement('a');
      link.href = pdfPath;
      link.download = 'atharva-frontend-dev.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{
      fontFamily: 'Poppins, serif',
      backgroundImage: 'linear-gradient(to left, rgba(27, 20, 41, 1), rgba(20, 15, 35, 0.9))',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat'
    }}>
      <div className="max-w-5xl mx-auto p-4">
        {/* Simple Header with Download Button */}
        <div className="flex justify-between items-center mb-6 bg-white bg-opacity-95 backdrop-blur-sm p-4 rounded-lg border shadow-lg">
          <div className="flex items-center">
            <FileText className="mr-3 text-gray-700" size={24} />
            <div>
              <h1 className="text-xl font-semibold text-gray-800">Atharva Dhumal - Resume</h1>
              <p className="text-sm text-gray-600">Frontend Developer</p>
            </div>
          </div>
          
          <button
            onClick={handleDownload}
            disabled={isLoading}
            className="inline-flex items-center bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-md"
          >
            <Download className="mr-2" size={18} />
            {isLoading ? 'Downloading...' : 'Download PDF'}
          </button>
        </div>

        {/* Clean PDF Viewer */}
        <div className="bg-white rounded-lg shadow-lg border overflow-hidden">
          <iframe
            src={`${pdfPath}#toolbar=0&navpanes=0&scrollbar=0&view=Fit&zoom=page-width`}
            className="w-full h-[85vh] border-0"
            title="Resume PDF"
            style={{ 
              display: 'block',
              border: 'none',
              overflow: 'hidden'
            }}
            scrolling="no"
          />
          
          {/* Fallback for browsers that don't support PDF viewing */}
          <noscript>
            <div className="p-8 text-center">
              <FileText size={48} className="mx-auto mb-4 text-gray-400" />
              <p className="text-lg font-medium mb-2 text-gray-700">PDF Preview Not Available</p>
              <p className="text-sm mb-4 text-gray-600">Please download the PDF to view the resume.</p>
              <button
                onClick={handleDownload}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Download Resume
              </button>
            </div>
          </noscript>
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;