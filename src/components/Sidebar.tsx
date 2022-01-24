import React from 'react';

const Sidebar = (): JSX.Element => {
  const getSidebarLink = (name: string, link: string) => {
    return (
      <p className='p-1 mb-1'>
        <a href={link}>{name}</a>
      </p>
    );
  };

  return (
    <div className='sidebar p-4'>
      <h1 className='display-6 header'>Bob's Burgers API</h1>
      <hr />
      <h5 className='fw-bold'>Getting Started</h5>
      {getSidebarLink('Introduction', '#introduction')}
      {getSidebarLink('Try Now', '#try-now')}
      {getSidebarLink('Statistics', '#statistics')}
      {getSidebarLink('Getting Started', '#get-started')}
      {getSidebarLink('Base URL', '#base-url')}
      <h5 className='fw-bold'>Api Reference</h5>
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
