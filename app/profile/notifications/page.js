'use client';

import ProfileSidebar from "@/components/global/ProfleSidebar";

export default function Notifications() {
  return (
    <div className="profileWrapper mx-auto max-w-7xl px-4">
      <h1 className="font-semibold text-3xl">My Profile</h1>
      <div className="profileContainer flex gap-5 mt-5">
        <div className="sidebarWrapper w-1/3">
          <ProfileSidebar />
        </div>
        <div className="contentWrapper w-2/3">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <p className="text-gray-600">Control your notification preferences.</p>
        </div>
      </div>
    </div>
  );
}
