import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import i18n from "../i18n/i18n";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TranslateIcon from '@material-ui/icons/Translate';
import {changeI18nLanguage} from "../redux/mainReducer";
import {connect} from "react-redux";

const Navbar = (props) => {
    //state for language select menu(isOpen and position);
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    //on language pick handler;
    const changeLangHandler = (e)=>{
        const lang = e.currentTarget.dataset.value;
        props.changeI18nLanguage(lang);
        setIsOpenMenu(false);
    };

    //onClick to language menu;
    const languageMenuHandler = (event) =>{
        setAnchorEl(event.currentTarget);
        setIsOpenMenu(true);
    };

    //close language menu;
    const closeMenuHandler = () => {
        setIsOpenMenu(false);
    };

    return (
        <>
            <AppBar position="static" className="navbar_appBar">
                <Toolbar>
                    <Typography variant="h6" className='navbar_title'>
                        {i18n.t('Navbar.navbarMainText')}
                    </Typography>
                    <div>
                        <IconButton
                            data-cy='languageMenuButton'
                            aria-haspopup="true"
                            onClick={languageMenuHandler}
                            color="inherit"
                        >
                            <TranslateIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={isOpenMenu}
                            onClose={closeMenuHandler}
                        >
                            <MenuItem onClick={changeLangHandler} data-value='ru'>Русский</MenuItem>
                            <MenuItem onClick={changeLangHandler} data-value='en'>English</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
};

const mapStateToProps = state => ({
    selectedLanguage: state.selectedLanguage
});

export default connect(mapStateToProps,{changeI18nLanguage})(Navbar);