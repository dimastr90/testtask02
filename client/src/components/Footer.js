import React from "react";
import i18n from "../i18n/i18n";
import {connect} from "react-redux";

export const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <p>{i18n.t('Footer.some')}</p>
                <p>2020</p>
            </div>
        </footer>
    )
};

const mapStateToProps = state => ({
    selectedLanguage: state.selectedLanguage
});

export default connect(mapStateToProps)(Footer);