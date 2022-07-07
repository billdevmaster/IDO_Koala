import React from 'react';
import { Row, Col, Container } from 'reactstrap'
import { NFTsStyle } from '../../../style';

const NFTs = () => {
	return (
		<>
			<section class="section-main imgcrdbx-section">
				<div class="container">
					<div class="imgcrdbx-main">
						<ul>
							<li>
								<div class="card-box">
									<img src="./images/koala-1.jpg" alt="" />
								</div>
							</li>
							<li>
								<div class="card-box">
									<img src="./images/koala-2.jpg" alt="" />
								</div>
							</li>
							<li>
								<div class="card-box">
									<img src="./images/koala-3.jpg" alt="" />
								</div>
							</li>
							<li>
								<div class="card-box">
									<img src="./images/koala-4.jpg" alt="" />
								</div>
							</li>
							<li>
								<div class="card-box">
									<img src="./images/koala-5.jpg" alt="" />
								</div>
							</li>
							<li>
								<div class="card-box">
									<img src="./images/koala-6.jpg" alt="" />
								</div>
							</li>
							<li>
								<div class="card-box">
									<img src="./images/koala-7.jpg" alt="" />
								</div>
							</li>
						</ul>
					</div>
				</div>
				
			</section>
			<section class="botom-section">
				<div class="btm-img">
					<img src="./images/botom-img.png" alt="" />
				</div>
			</section>
		</>
	)
}

export default NFTs;