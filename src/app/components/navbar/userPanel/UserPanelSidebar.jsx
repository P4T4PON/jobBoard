import React from 'react';

const UserPanelSidebar = (event) => {
  return (
    <div
      className={
        userPanel_active
          ? 'loggedUserPanel'
          : 'loggedUserPanel display-none'
      }
    >
      <UserPanelLink
        link={'/devs/panel/profile'}
        toggleActive={() => {
          setUserPanel_active(false);
          setBrands(false);
        }}
        iconClass={'far fa-user'}
        paragraph={'My profile'}
      />
      <UserPanelLink
        link={'/devs/panel/settings'}
        toggleActive={() => {
          setUserPanel_active(false);
          setBrands(false);
        }}
        iconClass={'fas fa-cog'}
        paragraph={'Settings'}
      />
      <UserPanelLink
        link={'/'}
        toggleActive={() => {
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
