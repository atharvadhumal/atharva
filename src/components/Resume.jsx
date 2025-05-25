import { useState } from 'react';
import { Download, FileText, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

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

  const handleViewOriginal = () => {
    window.open(pdfPath, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Respect existing background from index.css */}

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Profile Info */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <FileText className="text-white" size={28} />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white mb-1">Atharva Dhumal</h1>
                  <p className="text-lg text-purple-200 font-medium">Frontend Developer</p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <Mail size={14} />
                      <span>atharvadhumal256@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone size={14} />
                      <span>8689822200</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>Thane, Maharashtra</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleDownload}
                  disabled={isLoading}
                  className="inline-flex items-center bg-purple-500 hover:bg-purple-600 disabled:bg-purple-400 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                >
                  <Download className="mr-2" size={18} />
                  {isLoading ? 'Downloading...' : 'Download PDF'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto p-4 pt-6">
          {/* PDF Viewer Container */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            {/* PDF Viewer */}
            <div className="relative">
              <iframe
                src={`${pdfPath}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=page-width`}
                className="w-full border-0 rounded-2xl"
                style={{
                  height: 'calc(100vh - 200px)',
                  minHeight: '800px',
                  overflow: 'hidden'
                }}
                title="Resume PDF"
                loading="lazy"
                scrolling="no"
              />
              
              {/* Loading overlay */}
              {isLoading && (
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center rounded-2xl">
                  <div className="bg-white/90 p-6 rounded-xl shadow-xl">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-3"></div>
                    <p className="text-gray-700 font-medium">Processing download...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Fallback for browsers that don't support PDF viewing */}
            <noscript>
              <div className="p-12 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText size={48} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">PDF Preview Not Available</h3>
                <p className="text-lg mb-6 text-gray-300 max-w-md mx-auto">Your browser doesn't support PDF viewing. Please download the PDF to view the resume.</p>
                <button
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
                >
                  <Download className="mr-2 inline" size={18} />
                  Download Resume
                </button>
              </div>
            </noscript>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;