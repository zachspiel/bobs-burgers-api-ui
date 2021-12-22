import React from 'react';

const Sidebar = (): JSX.Element => {
  const getSidebarLink = (name: string, link: string) => {
    return (
      <p>
        <a href={link}>{name}</a>
      </p>
    );
  };

  return (
    <div className='sidebar p-4'>
      <h4 className='text-muted'>Getting Started</h4>
      {getSidebarLink('Introduction', '#introduction')}
      {getSidebarLink('Getting Started', '#get-started')}
      {getSidebarLink('Base URL', '#base-url')}
      <h4 className='text-muted'>Api Reference</h4>
      {getSidebarLink('Root', '#root')}
      {getSidebarLink('Characters', '#characters')}
      {getSidebarLink('Store Next Door', '#store-next-door')}
      {getSidebarLink('Pest Control Truck', '#pest-control-truck')}
      {getSidebarLink('End Credits Sequence', '#end-credits-sequence')}
    </div>
  );
};

export default Sidebar;
