import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';
import Coins from '../services/coins.json'
import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
 

  return (
    <>
      <Row>
        <Col span={8}>Coins</Col>
        <Col span={8}>24h Trade Volume</Col>
        <Col span={8}>Market Cap</Col>
      
      </Row>
      <Row>
        {Coins.map((coin) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={coin.uuid}
                showArrow={false}
                header={(
                  <Row key={coin.uuid}>
                    <Col span={8} >
                      <Text><strong>{coin.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={coin.iconUrl} />
                      <Text><strong>{coin.name}</strong></Text>
                    </Col>
                    <Col span={8} style={{marginLeft: "26vw"}} >$ {millify(coin.Volume)}</Col>
                    <Col span={8} style={{marginLeft: "51.5vw",position:"relative",top:"-3vh"}}>$ {millify(coin.marketCap)}</Col>
                  </Row>
                  )}
              >
                {HTMLReactParser(coin.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;