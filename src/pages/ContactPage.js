import React from "react";
import NavItem from "../components/NavItem";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const ContactPage = () => {
  return (
    <div className='page contactPage'>
      <div className='contactPage__socials'>
        <ul className='contactPage__list'>
          <NavItem
            name='Facebook'
            link='https://www.facebook.com/robert.lucius.355/'
            icon={<FacebookIcon />}
          />
          <NavItem
            name='Github'
            link='https://github.com/msTdeV89'
            icon={<GitHubIcon />}
          />
          <NavItem
            name='Linkedin'
            link='https://www.linkedin.com/in/robert-kaczmarek-a230101a3/'
            icon={<LinkedInIcon />}
          />
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
