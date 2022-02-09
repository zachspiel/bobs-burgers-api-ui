import React from 'react';

interface Props {
  className?: string;
}

const Sidebar = (props: Props): JSX.Element => {
  const getSidebarLink = (name: string, link: string) => {
    return (
      <p className='p-1 mb-1'>
        <a href={link}>{name}</a>
      </p>
    );
  };

  return (
    <div
      className={`sidebar p-4 ${props.className ?? ''}`}
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <h5 className='fw-bold mt-3'>Getting Started</h5>
      {getSidebarLink('Introduction', '#introduction')}
      {getSidebarLink('Try Now', '#try-now')}
      {getSidebarLink('Statistics', '#statistics')}
      {getSidebarLink('Base URL', '#base-url')}
      <h5 className='fw-bold mt-5'>Api Reference</h5>
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
