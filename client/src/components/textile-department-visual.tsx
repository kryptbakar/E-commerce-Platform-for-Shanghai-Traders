export default function TextileDepartmentVisual() {
  return (
    <div className="relative w-full h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-textile-navy-light to-textile-navy">
      {/* Creative SVG Textile Pattern */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-30" 
        viewBox="0 0 400 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Textile Loom Pattern */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E9C46A" />
            <stop offset="100%" stopColor="#F4A261" />
          </linearGradient>
          <pattern id="weavingPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="rgba(233, 196, 106, 0.05)" />
            <path d="M0,20 L20,0 L40,20 L20,40 Z" fill="rgba(244, 162, 97, 0.1)" />
          </pattern>
        </defs>
        
        {/* Background Weaving Pattern */}
        <rect width="400" height="300" fill="url(#weavingPattern)" />
        
        {/* Floating Thread Loops */}
        <g className="textile-float">
          <circle cx="80" cy="60" r="25" fill="none" stroke="url(#goldGradient)" strokeWidth="3" opacity="0.6" />
          <circle cx="80" cy="60" r="15" fill="none" stroke="url(#goldGradient)" strokeWidth="2" opacity="0.4" />
        </g>
        
        <g className="thread-loop" style={{ transformOrigin: '200px 80px' }}>
          <ellipse cx="200" cy="80" rx="30" ry="20" fill="none" stroke="url(#goldGradient)" strokeWidth="2" opacity="0.7" />
          <ellipse cx="200" cy="80" rx="20" ry="12" fill="none" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.5" />
        </g>
        
        <g className="textile-float" style={{ animationDelay: '2s' }}>
          <circle cx="320" cy="120" r="20" fill="none" stroke="url(#goldGradient)" strokeWidth="2" opacity="0.5" />
          <circle cx="320" cy="120" r="12" fill="none" stroke="url(#goldGradient)" strokeWidth="1" opacity="0.3" />
        </g>
        
        {/* Textile Machinery Silhouettes */}
        <g className="flying-element" style={{ animationDelay: '1s' }}>
          <rect x="50" y="180" width="80" height="60" rx="8" fill="rgba(233, 196, 106, 0.2)" />
          <rect x="60" y="190" width="60" height="40" rx="4" fill="rgba(244, 162, 97, 0.15)" />
          <circle cx="70" cy="200" r="8" fill="url(#goldGradient)" opacity="0.6" />
          <circle cx="110" cy="220" r="6" fill="url(#goldGradient)" opacity="0.4" />
        </g>
        
        <g className="thread-loop" style={{ animationDelay: '3s', transformOrigin: '280px 200px' }}>
          <rect x="250" y="170" width="60" height="50" rx="6" fill="rgba(233, 196, 106, 0.15)" />
          <rect x="260" y="180" width="40" height="30" rx="3" fill="rgba(244, 162, 97, 0.1)" />
          <circle cx="270" cy="190" r="5" fill="url(#goldGradient)" opacity="0.5" />
          <circle cx="290" cy="200" r="4" fill="url(#goldGradient)" opacity="0.3" />
        </g>
        
        {/* Flowing Thread Lines */}
        <path 
          d="M0,250 Q100,230 200,250 T400,250" 
          stroke="url(#goldGradient)" 
          strokeWidth="2" 
          fill="none" 
          opacity="0.4" 
          className="wave-pattern"
        />
        <path 
          d="M0,270 Q150,250 300,270 T400,270" 
          stroke="url(#goldGradient)" 
          strokeWidth="1" 
          fill="none" 
          opacity="0.3" 
          className="wave-pattern" 
          style={{ animationDelay: '2s' }}
        />
      </svg>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-textile-gold mb-2">Advanced Textile Manufacturing</h3>
          <p className="text-textile-text opacity-80">Precision Engineering from China to Pakistan</p>
          <div className="mt-4 flex justify-center space-x-4">
            <div className="elite-card px-4 py-2">
              <span className="text-textile-gold font-semibold">ISO 9001</span>
            </div>
            <div className="elite-card px-4 py-2">
              <span className="text-textile-gold font-semibold">CE Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}