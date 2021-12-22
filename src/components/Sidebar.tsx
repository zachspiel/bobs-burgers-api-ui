import React from 'react';

const Sidebar = (): JSX.Element => {
  const getSidebarLink = (name: string, link: string) => {
    return (
      <p className='p-2 mb-1'>
        <a href={link}>{name}</a>
      </p>
    );
  };

  return (
    <div className='sidebar p-4'>
      <h4 className='text-muted'>Getting Started</h4>
      {getSidebarLink('Introduction', '#introduction')}
      {getSidebarLink('Try Now', '#try-now')}
      {getSidebarLink('Getting Started', '#get-started')}
      {getSidebarLink('Statistics', '#statistics')}
      {getSidebarLink('Base URL', '#base-url')}
      <h4 className='text-muted'>Api Reference</h4>
      {getSidebarLink('Root URL', '#root-url')}
      {getSidebarLink('Characters', '#characters')}
      {getSidebarLink('Episodes', '#episodes')}
      {getSidebarLink('Store Next Door', '#store-next-door')}
      {getSidebarLink('Pest Control Truck', '#pest-control-truck')}
      {getSidebarLink('End Credits Sequence', '#end-credits-sequence')}
    </div>
  );
};

export default Sidebar;
