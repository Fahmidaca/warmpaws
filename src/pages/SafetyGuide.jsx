import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const SafetyGuide = () => {
  const { user } = useAuth();

  // Comprehensive safety checklist
  const safetyChecklist = [
    {
      category: "Indoor Safety",
      icon: "🏠",
      tips: [
        {
          title: "Keep Pets Indoors",
          description: "Limit outdoor time during extreme cold. Bring pets inside when temperatures drop below freezing (32°F/0°C).",
          severity: "high"
        },
        {
          title: "Safe Indoor Temperature",
          description: "Maintain indoor temperatures between 68-75°F. Check for drafts and ensure proper heating.",
          severity: "high"
        },
        {
          title: "Humidity Control",
          description: "Use humidifiers to prevent dry skin and respiratory issues. Ideal humidity: 30-50%.",
          severity: "medium"
        }
      ]
    },
    {
      category: "Outdoor Protection",
      icon: "❄️",
      tips: [
        {
          title: "Appropriate Winter Clothing",
          description: "Small dogs and short-haired breeds especially benefit from winter coats and sweaters.",
          severity: "high"
        },
        {
          title: "Paw Protection",
          description: "Check paws regularly for ice, salt, and other winter hazards. Consider booties for sensitive paws.",
          severity: "high"
        },
        {
          title: "Safe Walking Times",
          description: "Walk pets during daylight hours. Avoid early morning and late evening walks in extreme cold.",
          severity: "medium"
        }
      ]
    },
    {
      category: "Health Monitoring",
      icon: "🏥",
      tips: [
        {
          title: "Watch for Hypothermia Signs",
          description: "Symptoms: shivering, lethargy, pale gums, difficulty breathing, stiffness. Seek immediate vet care.",
          severity: "critical"
        },
        {
          title: "Frostbite Detection",
          description: "Check ears, tail, and paws for pale, gray, or blue skin. Frostbite requires immediate veterinary attention.",
          severity: "critical"
        },
        {
          title: "Emergency Contact Ready",
          description: "Keep your vet's emergency number and our 24/7 line: (555) 123-4567 easily accessible.",
          severity: "critical"
        }
      ]
    },
    {
      category: "Chemical Safety",
      icon: "🧪",
      tips: [
        {
          title: "Pet-Safe Ice Melts",
          description: "Use calcium chloride or magnesium chloride instead of sodium chloride. Avoid products with urea.",
          severity: "high"
        },
        {
          title: "Post-Walk Paw Care",
          description: "Wash paws with warm water after walks to remove salt, ice, and chemical residues.",
          severity: "high"
        },
        {
          title: "Antifreeze Awareness",
          description: "Clean up any coolant spills immediately. Antifreeze is highly toxic and attractive to pets.",
          severity: "critical"
        }
      ]
    },
    {
      category: "Nutrition & Hydration",
      icon: "💧",
      tips: [
        {
          title: "Fresh Water Access",
          description: "Ensure pets have access to fresh, unfrozen water. Use heated bowls in very cold weather.",
          severity: "high"
        },
        {
          title: "Increased Calorie Needs",
          description: "Outdoor pets may need 10-15% more calories in cold weather. Consult your vet for dietary adjustments.",
          severity: "medium"
        },
        {
          title: "Avoid Cold Food & Water",
          description: "Serve food and water at room temperature. Very cold items can lower body temperature.",
          severity: "medium"
        }
      ]
    },
    {
      category: "Emergency Preparedness",
      icon: "🚨",
      tips: [
        {
          title: "Emergency Kit",
          description: "Keep blankets, towels, first aid supplies, and emergency contact numbers in an easily accessible location.",
          severity: "high"
        },
        {
          title: "Vehicle Safety",
          description: "Never leave pets in cold cars. Warm up vehicles before letting pets inside.",
          severity: "high"
        },
        {
          title: "Backup Plans",
          description: "Have arrangements for pet care during extreme weather. Ensure proper identification with tags and microchips.",
          severity: "medium"
        }
      ]
    }
  ];

  const emergencySigns = [
    { symptom: "Excessive shivering", action: "Immediate indoor warming, contact vet if persists" },
    { symptom: "Lethargy or weakness", action: "Check temperature, provide warmth, call emergency vet" },
    { symptom: "Pale or blue gums", action: "Emergency vet visit immediately" },
    { symptom: "Difficulty breathing", action: "Emergency vet visit immediately" },
    { symptom: "Frostbite (pale skin)", action: "Gradual warming, emergency vet visit" },
    { symptom: "Refusal to eat/drink", action: "Monitor closely, consult vet if over 24 hours" }
  ];

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getSeverityBadge = (severity) => {
    switch(severity) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-warm-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Complete Winter Safety Guide
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive guide to keep your pets safe, warm, and healthy during winter months
            </p>
          </div>
        </div>
      </div>

      {/* Emergency Contact Banner */}
      <div className="bg-red-50 border-l-4 border-red-400 p-4 m-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">
              <strong>Emergency?</strong> Call our 24/7 line: 
              <a href="tel:+15551234567" className="font-semibold underline ml-1">
                (555) 123-4567
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Emergency Warning Signs */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-red-600 text-white px-6 py-4">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="text-3xl mr-3">🚨</span>
                Emergency Warning Signs
              </h2>
              <p className="mt-2">Seek immediate veterinary care if your pet shows any of these symptoms</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {emergencySigns.map((sign, index) => (
                  <div key={index} className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
                    <h3 className="font-semibold text-red-800 mb-2">{sign.symptom}</h3>
                    <p className="text-red-700 text-sm">{sign.action}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive Safety Checklist */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Safety Checklist
            </h2>
            <p className="text-xl text-gray-600">
              Follow this detailed checklist to prevent winter emergencies and keep your pets healthy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {safetyChecklist.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-warm-500 text-white px-6 py-4">
                  <h3 className="text-xl font-bold flex items-center">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    {category.category}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {category.tips.map((tip, tipIndex) => (
                      <div 
                        key={tipIndex} 
                        className={`p-4 rounded-lg border-2 ${getSeverityColor(tip.severity)}`}
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-3 mt-1">
                            <input 
                              type="checkbox" 
                              className="w-4 h-4 text-warm-600 border-gray-300 rounded focus:ring-warm-500"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{tip.title}</h4>
                              <span className={`inline-block w-2 h-2 rounded-full ${getSeverityBadge(tip.severity)}`}></span>
                            </div>
                            <p className="text-gray-700 text-sm">{tip.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Reference */}
        <div className="mb-12">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Quick Winter Safety Reference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🌡️</div>
                <h3 className="font-semibold mb-2">Temperature</h3>
                <p className="text-sm text-gray-600">Bring pets inside below 32°F (0°C)</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">⏰</div>
                <h3 className="font-semibold mb-2">Walking Time</h3>
                <p className="text-sm text-gray-600">Daylight hours only during extreme cold</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💧</div>
                <h3 className="font-semibold mb-2">Hydration</h3>
                <p className="text-sm text-gray-600">Fresh, unfrozen water available at all times</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🏠</div>
                <h3 className="font-semibold mb-2">Indoor Temp</h3>
                <p className="text-sm text-gray-600">Maintain 68-75°F year-round</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div className="text-center">
          <div className="bg-warm-600 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Need Professional Help?</h2>
            <p className="text-lg mb-6">
              Our experienced veterinary team is here to help keep your pets safe and healthy this winter.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="tel:+15551234567" 
                className="bg-white text-warm-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Emergency: (555) 123-4567
              </a>
              <Link 
                to={user ? "/services" : "/login"} 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-warm-600 transition-colors"
                onClick={() => {
                  if (!user) {
                    toast.error('Please login to access our services');
                  }
                }}
              >
                Book Winter Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyGuide;