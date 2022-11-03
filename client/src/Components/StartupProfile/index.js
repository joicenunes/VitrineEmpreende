import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import { MdOutlinePhoto } from 'react-icons/md';
import { RiLinkedinBoxLine, RiTwitterLine, RiGithubLine } from 'react-icons/ri';

import { Card, CardBody } from '../../Components/Card';
import TagList from '../../Components/TagList';
import Button from '../Button';

export default function StartupProfile(props) {
  const [isDescriptionVisible, setDescriptionVisibility] = useState(false);

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

  const showButtons = () => {
    return props.hiddenButtons ? <></> :
      <div className='startup-actions'>
        {
          props.hiddenDescription ??
          <Button
            color='primary'
            onClickButton={toggleDescriptionVisibility}
          >
            Resumo
          </Button>
        }
        <Link to={`/startup/${props.startup.id}`}>
          <Button
            color='primary'
          >
            Ir para
          </Button>
        </Link>
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

  const toggleDescriptionVisibility = () => {
    !props.hiddenDescription && setDescriptionVisibility(!isDescriptionVisible);
  }

  return (
    <div className='startup-profile'>
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
          {showButtons()}
        </CardBody>
      </Card>

      {
        !props.hiddenDescription && isDescriptionVisible ?
          <div
            className='startup-description'
          >
            <p>{props.startup.description}</p>
          </div> : <></>
      }
    </div>
  );
}