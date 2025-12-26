import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProfileNavigation from "./ProfileNavigation";

import UserProfile from "./Profile";
import Orders from "./Orders";
import Address from "./Address";
import Favorites from "./Favorites";
import Events from "./Events";

const Profile = () => {
  const [openSideBar] = useState(false);

  return (
    <div className="flex min-h-screen bg-black">
      {/* LEFT SIDEBAR */}
      <div className="w-[260px] shrink-0">
        <ProfileNavigation open={openSideBar} />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 p-6 text-white">
        <Routes>
          <Route index element={<UserProfile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="address" element={<Address />} />
          <Route path="events" element={<Events />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
