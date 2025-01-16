import React from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { DocsSidebar } from './DocsSidebar';
import { ApiSidebar } from './ApiSidebar';

interface LayoutProps {
    children: React.ReactNode;
    location: Location;
}

export function Layout({ children, location }: LayoutProps) {
    const currentPath = location.pathname;
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="min-h-screen bg-white ">
                <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex'>
                        {currentPath.startsWith('/docs') && <DocsSidebar />}
                        {currentPath.startsWith('/api') && <ApiSidebar />}
                        <section className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
                            {children}
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
