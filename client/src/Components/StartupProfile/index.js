import React from 'react';
import './style.css';

import { HiOutlinePhoto } from 'react-icons/hi2';
import { RiLinkedinBoxLine, RiTwitterLine, RiGithubLine } from 'react-icons/ri';

import { Card, CardBody } from '../../Components/Card';
import TagList from '../../Components/TagList';

export default function StartupProfile(props) {  
  const showStartupPhoto = (startup) => {
    return startup.img ?
      <img
        src={startup.img}
        alt={startup.name}
      /> :
      <HiOutlinePhoto
        size={100}
      />;
  }

  const showSocialNetwork = () => {
    return props.hiddenSocialNetwork ? <></> :
    <div className='startup-social-network'>
      <RiLinkedinBoxLine /> <RiTwitterLine /> <RiGithubLine />
    </div>
  }

  const showTags = (tags) => {
    return props.hiddenTags ? <></> :
    <div className='startup-tags'>
      <TagList tags={tags} maxWidth />
    </div>
  }

  return (
    <div className='startup-profile'>
      <Card>
        <CardBody>
          <div className='startup-avatar-border'>
            <div className='statup-avatar-img'>
              {showStartupPhoto(props.startup)}
            </div>
          </div>
          <div className='startup-name'>
            {props.startup.name}
          </div>
          <div className='startup-contact'>
            {props.startup.email}
          </div>
          {showSocialNetwork()}
          {showTags(props.startup.tags)}
        </CardBody>
      </Card>
    </div>
  );
}