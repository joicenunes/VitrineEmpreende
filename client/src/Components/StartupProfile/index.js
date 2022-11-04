import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import { MdOutlinePhoto } from 'react-icons/md';
import { RiLinkedinBoxLine, RiTwitterLine, RiGithubLine } from 'react-icons/ri';

import { Card, CardBody } from '../../Components/Card';
import TagList from '../../Components/TagList';
// import Button from '../Button';

export default function StartupProfile(props) {

  const setTitleColor = (color) => {
    switch (color) {
      case 'primary':
        return '#2EBEE5';
      default:
        return;
    }
  }

  const showSocialNetwork = () => {
    return props.hiddenSocialNetwork ? <></> :
      <div className='startup-social-network'>
        <RiLinkedinBoxLine size={20} color={setTitleColor(props.color)} /> <RiTwitterLine size={20} color={setTitleColor(props.color)} /> <RiGithubLine size={20} color={setTitleColor(props.color)} />
      </div>
  }

  const showTags = (tags) => {
    return props.hiddenTags ? <></> :
      <div className='startup-tags'>
        <TagList color='primary' tags={tags} maxWidth />
      </div>
  }

  const showStartupPhoto = (startup) => {
    return startup.img ?? { backgroundImage: `url(${startup.img})` }
  }

  return (
    <div className='startup-profile'>
      <Link
        to={`/startup/${props.startup.id}`}
        style={{ pointerEvents: props.noLink ? 'none' : '' }}
      >
        <Card>
          <CardBody>
            <div
              className='startup-avatar'
              style={showStartupPhoto(props.startup)}
            >
              {
                props.startup.img ??
                <MdOutlinePhoto
                  size={100}
                />
              }
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

        {
          props.hiddenDescription ? <></> :
            <div
              className={`startup-description${props.noLink ? '-disabled' : ''}`}
            >
              <p>{props.startup.description}</p>
            </div>
        }
      </Link>
    </div>
  );
}