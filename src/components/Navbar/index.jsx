import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectUser } from '@containers/Client/selectors';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { setLocale } from '@containers/App/actions';

import classes from './style.module.scss';

const Navbar = ({ title, locale, user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuPosition, setMenuPosition] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(menuPosition);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAvatarClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setMenuPosition(event.currentTarget);
  };

  const handleClose = () => {
    setMenuPosition(null);
  };

  const onSelectLang = (lang) => {
    if (lang !== locale) {
      dispatch(setLocale(lang));
    }
    handleClose();
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className={classes.headerWrapper} data-testid="navbar">
      <div className={classes.contentWrapper}>
        <div className={classes.logoImage} onClick={goHome}>
          <div className={classes.titleLeft}>
            {title}
            <span className={classes.titleRight}>Task</span>
          </div>
        </div>
        <div className={classes.toolbar}>
          <div className={classes.toggle} onClick={handleClick}>
            <Avatar className={classes.avatar} src={locale === 'id' ? '/id.png' : '/en.png'} />
            <div className={classes.lang}>{locale}</div>
            <ExpandMoreIcon />
          </div>
          <IconButton onClick={handleAvatarClick}>
            <Avatar className={classes.avatar} src="https://source.unsplash.com/500x500/?avatar" />
          </IconButton>
          <Menu
            className={classes.dropdown}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleAvatarClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <div className={classes.userData}>
              <div className={classes.fullName}>{user?.fullName}</div>
              <div className={classes.email}>{user?.email}</div>
            </div>
            <div className={classes.divider} />
            <MenuItem className={classes.dropdown__item}>
              <Logout className={classes.logoutIcon} />
              <div className={classes.logoutText}>
                <FormattedMessage id="app_logout" />
              </div>
            </MenuItem>
          </Menu>
        </div>
        <Menu open={open} anchorEl={menuPosition} onClose={handleClose}>
          <MenuItem onClick={() => onSelectLang('id')} selected={locale === 'id'}>
            <div className={classes.menu}>
              <Avatar className={classes.menuAvatar} src="/id.png" />
              <div className={classes.menuLang}>
                <FormattedMessage id="app_lang_id" />
              </div>
            </div>
          </MenuItem>
          <MenuItem onClick={() => onSelectLang('en')} selected={locale === 'en'}>
            <div className={classes.menu}>
              <Avatar className={classes.menuAvatar} src="/en.png" />
              <div className={classes.menuLang}>
                <FormattedMessage id="app_lang_en" />
              </div>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  locale: PropTypes.string.isRequired,
  user: PropTypes.object,
};
const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps)(Navbar);
