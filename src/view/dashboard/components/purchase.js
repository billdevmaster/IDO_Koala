import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Input, Button, InputGroup, InputGroupAddon } from "reactstrap";
import Web3 from 'web3';

import { faWallet } from '@fortawesome/free-solid-svg-icons'
import {toast} from 'react-toastify';
import { ContractAddr, ContractAbi, BUSDContractAbi, BUSDContractAddr, KoalaContractAbi, KoalaContractAddr } from '../../../constants/contract';
import { CHAIN_ID } from '../../../constants/constants';

import CountDown from "./countdown";
import { PurchaseStyle } from '../../../style';
import Item1 from '../../../assets/images/item-1.png'
import Item2 from '../../../assets/images/item-2.png'
import Item3 from '../../../assets/images/item-3.png'
import Item4 from '../../../assets/images/item-4.png'


const Introduction = () => {
  const dispatch = useDispatch();
  const userAddress = useSelector(state => state.userAddress);
  const web3 = useSelector(state => state.web3);
  const [amount, setAmount] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [amountAirdrop, setAmountAirdrop] = useState(0);

  const purchase = async (type) => {
    if (userAddress === '') {
      toast.warning(`please connect wallet.`);
      return;
    }
    const chainId = await web3.eth.getChainId();
    if (chainId !== CHAIN_ID) {
      return toast.warning("Please switch to ETH network");
    }
    
    const contract = new web3.eth.Contract(
      ContractAbi,
      ContractAddr
    );

    const contractBUSD = new web3.eth.Contract(
      BUSDContractAbi,
      BUSDContractAddr
    );

    const contractKoala = new web3.eth.Contract(
      KoalaContractAbi,
      KoalaContractAddr
    );

    if (type === 'airdrop') {
      if (amountAirdrop === 0) {
        toast.warning(`please input amount.`);
        return;
      }
      await contractBUSD.methods.approve(ContractAddr, web3.utils.toWei(amountAirdrop)).send({from: userAddress});
      
      const buyStatus = await contract.methods.purchaseAirdrop(web3.utils.toWei(amountAirdrop)).send({from: userAddress});
    } else {
      if (amount === 0) {
        toast.warning(`please input amount.`);
        return;
      }
      await contractBUSD.methods.approve(ContractAddr, web3.utils.toWei(amount)).send({from: userAddress});
      const buyStatus = await contract.methods.purchase(web3.utils.toWei(amount)).send({from: userAddress});
    }
  }

  useEffect(async () => {
    if (web3.eth) {
      var blockNumber = await web3.eth.getBlockNumber();
      var timestamp = await web3.eth.getBlock(blockNumber);
      console.log(timestamp.timestamp)
      const contract = new web3.eth.Contract(
        ContractAbi,
        ContractAddr
      );
      let purchaseHistory = await contract.methods.purchaseHistory().call();
      console.log(purchaseHistory)
      let end = await contract.methods.endTime().call();
      console.log(end)
      setEndTime(end)
      const chainId = await web3.eth.getChainId();
      if (chainId !== CHAIN_ID) {
        toast.warning("Please switch to ETH network");
      }
    }
  }, [userAddress])

  return (
    <>
      <section className="section-main countdown-section">
        <Container>
          <CountDown endTime={endTime}/>
        </Container>
      </section>
      <section className="section-main inputform-section">
        <span className="space-craft"><img src="./images/spacecraft.png" alt="" /></span>
        <Container>
          <Row>
            <Col md={6}>
            <div className="top-heading">
                <h2>Air drop Purchase</h2>
            </div>
              <div className="frm-single purchase">
                  <Input type="number" placeholder="Airdrop" value={amountAirdrop} onChange={(e) => setAmountAirdrop(e.target.value)} />
                  <div className="btn-main">
                      <button className="btn" onClick={() => {purchase('airdrop')}}>Purchase</button>
                  </div>
              </div>
            </Col>
            <Col md={6}>
            <div className="top-heading">
                <h2>IDO purchase</h2>
            </div>
              <div className="frm-single purchase">
                  <Input type="number" placeholder="IDO"  value={amount} onChange={(e) => setAmount(e.target.value)}/>
                  <div className="btn-main">
                      <button className="btn" onClick={() => {purchase('IDO')}}>Purchase</button>
                  </div>
              </div>
            </Col>
          </Row>
          <div className="top-heading">
              <h2>Air drop mission</h2>
          </div>
          <div className="inptfrm-main">
              <div className="frm-single">
                  <div className="frm-icon">
                      <span><img src="./images/twiter.png" alt="Twiter" /></span>
                  </div>
                  <Input type="text" className="social" placeholder="Twitter" />
                  <div className="btn-main">
                      <button className="btn">Button</button>
                  </div>
              </div>
              <div className="frm-single">
                  <div className="frm-icon">
                      <span><img src="./images/telegram.png" alt="Telegram Group" /></span>
                  </div>
                  <Input type="text" className="social" placeholder="Telegram group" />
                  <div className="btn-main">
                      <button className="btn">Button</button>
                  </div>
              </div>
              <div className="frm-single">
                  <div className="frm-icon">
                      <span><img src="./images/telegram.png" alt="Telegram Channel" /></span>
                  </div>
                  <Input type="text" className="social" placeholder="Telegram channel" />
                  <div className="btn-main">
                      <button className="btn">Button</button>
                  </div>
              </div>
          </div>
        </Container>
        <span className="rocket"><img src="./images/rocket.png" alt="" /></span>
      </section>
  </>      
  );
}

export default Introduction