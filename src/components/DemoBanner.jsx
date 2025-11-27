import { useAuth } from '../contexts/AuthContext';

const DemoBanner = () => {
  const { isDemoMode } = useAuth();

  if (!isDemoMode) return null;

  return (
    <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-3 text-center">
      <div className="container mx-auto">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-2xl">🎭</span>
          <div>
            <span className="font-semibold">Demo Mode Active</span>
            <span className="ml-2 text-sm opacity-90">
              You're testing without real Firebase setup. All features work but no data is saved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoBanner;