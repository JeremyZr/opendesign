import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo_horizontal_white.svg';
import {Container, Menu} from 'semantic-ui-react'
import './header.css'

export default class Header extends Component {
    state = {activeItem: 'home'};
    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;
        return (
            <Menu pointing fixed='top' size='large' inverted>
                <Container>
                    <Link to='/'>
                      <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} className='header-logo'>
                        <img src={logo} className="OpenDesign-Logo" alt="OpenDesign" />
                      </Menu.Item>
                    </Link>
                    <Menu.Menu position='right'>
                        <Menu.Item name='Guidelines' active={activeItem === 'Guidelines'}
                                   onClick={this.handleItemClick} />
                        <Menu.Item name='sign-up' active={activeItem === 'sign-up'}
                                   onClick={this.handleItemClick} />
                          <Menu.Item name='login' active={activeItem === 'login'}
                                   onClick={this.handleItemClick}>
                            <Link to='/login'>
                              Login
                            </Link>
                          </Menu.Item>

                    </Menu.Menu>
                </Container>
            </Menu>
        )
    }
}
