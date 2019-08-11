import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Dropdown, Menu, Button } from 'semantic-ui-react';
import { LanguageContext } from '../contexts/LanguageContext';
import { AuthContext } from '../contexts/AuthContext';
import logo from '../images/Logo.png'
import { colors } from '../styles/colors';

const langOptions = [
    { key: 1, text: 'Polish', value: 'pl', },
    { key: 2, text: 'English' , value: 'en', },
];

const styles = {
    organizationButton: {
        background: colors.PURPLE,
        color: colors.WHITE,
        height: '41px',
    }
}

const Navbar = () => {
    // const [organizationVisible, setOrganizationVisible] = useState(false);
    const { lang, setLang } = useContext(LanguageContext);
    const { error, closeError, authenticated } = useContext(AuthContext);

    useEffect(() => {}, [error]);

      return !error ? (
        <Wrapper>
            <Logo src={logo} />
            <Organization>
                <LanguageWrapper>
                <LanguageTitle>Select language:</LanguageTitle>
                <Menu compact>
                    <Dropdown
                        options={langOptions}
                        simple
                        item
                        onChange={(e, {value}) => setLang(value)}
                        defaultValue={lang} />
                </Menu>
                </LanguageWrapper>
                {authenticated && <Button style={styles.organizationButton}>My organization</Button>}
            </Organization>
        </Wrapper>

      ): (
        <ErrorWrapper>
            {error.errorMessage}
            <span onClick={closeError}>✕</span>
        </ErrorWrapper>
    );

};

const Wrapper = styled.div`
    background: ${colors.WHITE};
    height: 80px;
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 107px;
`

const Logo = styled.img`
    width: 47px;
    height: 47px;
`

const ErrorWrapper = styled.div`
    display: flex;
    background: ${colors.RED};
    font-size: 16px;
    color: ${colors.WHITE};
    text-align: center;
    justify-content: center;
    height: 80px;
    align-items: center;
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
`

const Organization = styled.div`
    display: flex;
    align-items: center;
`

const LanguageWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 10px;
`

const LanguageTitle = styled.span`
    color: ${colors.GRAY_LIGHTER};
    font-size: 14px;
    margin: 0px 10px;
`

export default Navbar;