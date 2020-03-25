import React from 'react';
//todo: zobacz na bledy ktore Ci tutaj podkreśla IDE,

const UserPanelSidebar = (event) => {
  return (
    <div
      className={
        userPanel_active
          ? 'userPanel-sidebar '
          : 'userPanel-sidebar display-none'
      }
    >
      <UserPanelLink
        link={'/devs/panel/profile'}
        setUserPanel_active={() => {
          setUserPanel_active(false);
          setBrands(false);
        }}
        iconClass={'far fa-user'}
        paragraph={'My profile'}
      />
      <UserPanelLink
        link={'/devs/panel/settings'}
        setUserPanel_active={() => {
          setUserPanel_active(false);
          setBrands(false);
        }}
        iconClass={'fas fa-cog'}
        paragraph={'Settings'}
      />
      <UserPanelLink
        link={'/'}
        setUserPanel_active={() => {
          dispatch(logged());
          setUserPanel_active(false);
          setBrands(false);
        }}
        iconClass={'fas fa-power-off'}
        paragraph={'Log out'}
      />
    </div>
  );
};

export default UserPanelSidebar;
