import { useEffect } from "react";

import { CheckCircle, Heart, Users, Home, Download, Share2, Mail, Calendar } from "lucide-react";
import { toast } from "react-toastify";

const Success = () => {
  useEffect(() => {
    toast.success("🎉 Thank you for your generous donation!");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-500 rounded-full mb-6 shadow-lg">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Payment Successful
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Thank you for your generous donation. Your contribution will make a real difference in the lives of those we serve.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-orange-500 to-teal-500 px-8 py-6">
            <h2 className="text-2xl font-semibold text-white text-center">Your Donation Creates Impact</h2>
          </div>

          {/* Card Content */}
          <div className="p-8">
            {/* Appreciation Message */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-orange-500 fill-current" />
                <span className="text-lg font-medium text-gray-700">Your kindness changes lives</span>
              </div>
              
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Every donation, regardless of size, contributes to our mission of creating positive change in our community. 
                Your support enables us to continue providing essential services to those who need them most.
              </p>
            </div>

            {/* Impact Areas */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-100">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-semibold text-lg">Ed</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Education</h3>
                <p className="text-gray-600 text-sm">Supporting quality education and learning opportunities for underprivileged children</p>
                <div className="mt-3 text-orange-600 font-medium text-sm">500+ children supported</div>
              </div>
              
              <div className="text-center p-6 bg-teal-50 rounded-xl border border-teal-100">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-semibold text-lg">Nh</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Nutrition & Health</h3>
                <p className="text-gray-600 text-sm">Providing nutritious meals and essential healthcare services to communities in need</p>
                <div className="mt-3 text-teal-600 font-medium text-sm">1000+ meals served daily</div>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-semibold text-lg">Sp</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Support & Shelter</h3>
                <p className="text-gray-600 text-sm">Building safe spaces and providing comprehensive support for vulnerable families</p>
                <div className="mt-3 text-gray-600 font-medium text-sm">200+ families housed</div>
              </div>
            </div>

            {/* Process Timeline */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">What Happens Next</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email Confirmation</h4>
                    <p className="text-gray-600 text-sm">You'll receive a detailed receipt with tax benefit information within 5 minutes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Fund Allocation</h4>
                    <p className="text-gray-600 text-sm">Your donation will be allocated to our most urgent programs within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Impact Updates</h4>
                    <p className="text-gray-600 text-sm">We'll send you regular updates showing how your donation creates positive change</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-orange-600" />
                  <h3 className="text-lg font-semibold text-gray-800">Receipt & Documentation</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  A comprehensive receipt with all donation details and tax exemption information has been sent to your email address.
                </p>
                <div className="text-orange-600 font-medium text-sm">Check your inbox in the next few minutes</div>
              </div>
              
              <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-5 h-5 text-teal-600" />
                  <h3 className="text-lg font-semibold text-gray-800">Join Our Community</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Connect with other donors and volunteers to stay updated on our collective impact and upcoming initiatives.
                </p>
                <div className="text-teal-600 font-medium text-sm">5000+ active community members</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-sm"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </a>
              
              <button className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-sm">
                <Download className="w-5 h-5" />
                Download Receipt
              </button>
              
              <button className="inline-flex items-center justify-center gap-2 border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                <Share2 className="w-5 h-5" />
                Share Impact
              </button>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">
            Together, we're building a better tomorrow for our community.
          </p>
          <p className="text-gray-500">
            Thank you for being part of our mission to create lasting positive change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;