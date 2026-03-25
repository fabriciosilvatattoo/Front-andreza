/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import LeadsList from './components/LeadsList';
import ChatArea from './components/ChatArea';

export default function App() {
  return (
    <div className="bg-surface text-on-surface font-body overflow-hidden h-screen flex dark">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-background">
        <TopNav />
        <div className="flex flex-1 overflow-hidden">
          <LeadsList />
          <ChatArea />
        </div>
      </main>
    </div>
  );
}
