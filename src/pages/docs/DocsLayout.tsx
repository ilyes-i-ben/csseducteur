import React from 'react';
import { Outlet } from 'react-router-dom';
import { DocsSidebar } from '../../components/DocsSidebar';

export function DocsLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex">
          <DocsSidebar />
          <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}