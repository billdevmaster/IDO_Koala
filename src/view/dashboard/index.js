import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { NavLink } from 'react-router-dom';


import Purchase from './components/purchase';
import NFTs from './components/nfts';

const Dashboard = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Purchase />
      <NFTs />
    </>
  );
}

export default Dashboard;