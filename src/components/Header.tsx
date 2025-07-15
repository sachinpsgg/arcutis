import React from 'react';
import { Button } from './ui/button';
import { Filter, User, LogOut } from 'lucide-react';

interface HeaderProps {
    isFilterOpen: boolean;
    setIsFilterOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isFilterOpen, setIsFilterOpen }) => {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-b border-blue-700 shadow-sm">
            <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <h1 className="text-xl font-bold">ZORYVE</h1>
                            <span className="text-sm opacity-90">(roflumilast) cream 0.3%</span>
                        </div>
                        <div className="text-xs opacity-75">
                            Powered by <span className="font-medium">FES</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="text-white hover:bg-white/20"
                        >
                            <Filter className="w-4 h-4 mr-2" />
                            Filters
                        </Button>

                        <div className="flex items-center space-x-3 border-l border-white/20 pl-4">
                            <div className="text-sm">
                                <span className="text-yellow-300 font-medium">Welcome Ram Sharma</span>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-white hover:bg-white/20"
                            >
                                <User className="w-4 h-4 mr-2" />
                                Profile
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-white hover:bg-white/20"
                            >
                                <LogOut className="w-4 h-4" />
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;