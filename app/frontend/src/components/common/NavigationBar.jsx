import React, { Component } from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';
import { Link } from 'react-router-dom';

const NavBarShadow = { boxShadow: '0.5px 0.5px 10px grey' };


export default class NavigationBar extends Component {
    render() {
        return (
            <Navbar style={NavBarShadow}>
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="#">
                        <img
                            src="https://bulma.io/images/bulma-logo.png"
                            alt="Bulma: a modern CSS framework based on Flexbox"
                            width="112"
                            height="28"
                        />
                    </Navbar.Item>
                    <Navbar.Burger
                    active={true}
                        // active={open}
                        // onClick={() =>
                        //     this.setState(state => {
                        //         open: !state.open;
                        //     })
                        // }
                    />
                </Navbar.Brand>
                <Navbar.Menu active={true}>
                    <Navbar.Container>
                        <Navbar.Item><Link to="/">Home</Link></Navbar.Item>
                    </Navbar.Container>
                    <Navbar.Container position="end">
                        <Navbar.Item href="#">At the end</Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>

        )
    }
}