import {useEffect, useState} from 'react';
import PageHeader from '../PageHeader';
import CTA from '../CTA';
import Logos from '../../assets/data/logos';

import {ReactComponent as MainLogo} from '../../assets/img/projects/offthedock/logo.svg';
import {ReactComponent as Cleet} from '../../assets/img/projects/offthedock/cleet.svg';
import {ReactComponent as Bottle} from '../../assets/img/projects/offthedock/bottle.svg';
import {ReactComponent as Seashell} from '../../assets/img/projects/offthedock/seashell.svg';
import {ReactComponent as Octopus} from '../../assets/img/projects/offthedock/octopus.svg';
import {ReactComponent as Sticker1} from '../../assets/img/projects/offthedock/sticker1.svg';
import {ReactComponent as Sticker2} from '../../assets/img/projects/offthedock/sticker2.svg';
import {ReactComponent as Sticker3} from '../../assets/img/projects/offthedock/sticker3.svg';
import {ReactComponent as BCFront} from '../../assets/img/projects/offthedock/bc-front.svg';
import {ReactComponent as BCBack} from '../../assets/img/projects/offthedock/bc-back.svg';
import {ReactComponent as TSI} from '../../assets/img/projects/offthedock/tsi.svg';

import WaterBottles from '../../assets/img/projects/offthedock/merch/waterbottle.jpg';
import Hat from '../../assets/img/projects/offthedock/merch/hat.jpg';
import Windbreaker from '../../assets/img/projects/offthedock/merch/windbreaker.jpg';
import OliveShirt from '../../assets/img/projects/offthedock/merch/olive-front.jpg';
import OctopusHoodie from '../../assets/img/projects/offthedock/merch/paragon.jpg';
import TieDyeHoodie from '../../assets/img/projects/offthedock/merch/spider-royal.jpg';
import CoralPerformance from '../../assets/img/projects/offthedock/merch/coral-back.jpg';
import AquaPerformance from '../../assets/img/projects/offthedock/merch/aqua-back.jpg';


const OffTheDock = (props: {
  showInquiry: (value: boolean) => void;
}) => {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [slideIn, setSlideIn] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    if (!isLoading) return setSlideIn(true);
  }, [isLoading]);

  return (
    <div id="page" className={`${slideIn ? 'show' : ''}`}>

      <PageHeader 
        showInquiry={props.showInquiry}
      />

      <div id="OffTheDock">
        <div className="pageContainer">
          <div className="colorScheme">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="graphics">
            <div className="logo">
              <MainLogo />
            </div>
            <div className="icon">
              <Cleet />
            </div>
            <div className="thirds">
              <Bottle />
              <Seashell />
              <Octopus />
            </div>
            <div className="stickers">
              <Sticker1 />
              <Sticker2 />
            </div>
            <div className="sticker3">
              <Sticker3 />
            </div>
            <div className="businessCards">
              <BCFront />
              <BCBack />
            </div>
            <div className="tsi">
              <TSI />
            </div>
            <div className="merch">
              <div>
                <img src={WaterBottles} alt="" />
                <img src={Hat} alt="" />
              </div>
              <div>
                <img src={Windbreaker} alt="" />
                <img src={OliveShirt} alt="" />
              </div>
              <div>
                <img src={OctopusHoodie} alt="" />
                <img src={TieDyeHoodie} alt="" />
              </div>
              <div>
                <img src={CoralPerformance} alt="" />
                <img src={AquaPerformance} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTA 
        copy="Contact us today to discuss your project and embark on a journey to establish a compelling and consistent brand identity that leaves a lasting impression."
        showInquiry={() => props.showInquiry(true)}
      />

    </div>
  )
}

export default OffTheDock;
